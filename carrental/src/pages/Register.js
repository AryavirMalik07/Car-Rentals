import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        confirmPassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid registration");
      console.log("invalid registration");
    } else {
      window.alert("registration successfull");
      console.log("registration successfull");
      navigate("/login");
    }
  };

  return (
    <div>
      <form
        method="POST"
        className="flex flex-col w-96 gap-8 justify-center m-auto register-form"
        id="register-form"
      >
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          placeholder="your name"
          value={user.name}
          onChange={handleInputs}
        />
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="your email"
          value={user.email}
          onChange={handleInputs}
        />
        <input
          type="number"
          name="phone"
          id="phone"
          autoComplete="off"
          placeholder="your number"
          value={user.phone}
          onChange={handleInputs}
        />
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="your password"
          value={user.password}
          onChange={handleInputs}
        />
        <input
          type="confirmPassword"
          name="confirmPassword"
          id="confirmPassword"
          autoComplete="off"
          placeholder="your confirmPassword"
          value={user.confirmPassword}
          onChange={handleInputs}
        />
        <div className="form-group form-button">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            value="register"
            onClick={postData}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
