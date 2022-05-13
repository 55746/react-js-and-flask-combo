import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { SignIn } from "../component/Signin.jsx";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
// HAD TO IMPORT THE USEHISTORY TO BE ABLE TO BRING YOU TO THE LOGIN PAGE ONCLICK

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [dob, setDob] = useState("");
  const { store, actions } = useContext(Context);
  let history = useHistory();

  const validateInput = () => {
    if (inputValue === "") alert("The input cannot be empty");
    else alert("All perfect!");
    if (inputValue === "email") {
      console.log(print("email validation"));
    }
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
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
        <label htmlFor="first_name" className="form-label">
          First Name
        </label>
        <input
          onChange={(e) => setFirst_name(e.target.value)}
          value={first_name}
          type="first_name"
          className="form-control"
          id="first_name_input"
          aria-describedby="first_name"
        />
        <div id="first_name" className="form-text">
          First Name
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="last_name" className="form-label">
          last_name
        </label>
        <input
          onChange={(e) => setLast_name(e.target.value)}
          value={last_name}
          type="last_name"
          className="form-control"
          id="last_name_input"
          aria-describedby="last_name"
        />
        <div id="last_name" className="form-text">
          last_name
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="dob" className="form-label">
          Date of Birth
        </label>
        <input
          onChange={(e) => setDob(e.target.value)}
          value={dob}
          type="dob"
          className="form-control"
          id="dob"
          aria-describedby="dob"
        />
        <div id="dob" className="form-text">
          enter your Date of Birth
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
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
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        onClick={(e) => {
          validateInput();
          e.preventDefault();
          actions.signUp(email, password, first_name, last_name, dob);
          history.push("/signin");
        }}
        formtype="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};
