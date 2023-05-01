import React from "react";

const Login = () => {
  return (
    <div>
      <form
        className="flex flex-col w-96 gap-8 justify-center m-auto signin-form"
        id="signin-form"
      >
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="your email"
        />

        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="your password"
        />

        <div className="form-group form-button">
          <input
            type="submit"
            name="signin"
            id="signin"
            className="form-submit"
            value="login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
