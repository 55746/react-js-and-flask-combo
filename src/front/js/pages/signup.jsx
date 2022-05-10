import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const is_active = true;
  const { store, actions } = useContext(Context);

  const validateInput = () => {
    if (email === "") alert("The input cannot be empty");
    else alert("All perfect!");
    if (password === "") alert("The input cannot be empty");
    else alert("All perfect!");
  };

  return (
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          fetch(process.env.BACKEND_URL + "/api/signup", {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              is_active: is_active,
            }),
          });
        }}
        // actions.SignUp(email, password, is_active) &&
        //   validateInput(email, password);

        formtype="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};
