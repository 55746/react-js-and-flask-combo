import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

// IF YOU USE FLUX, YOU USE USECONTEXT, BECAUSE YOU ARE USEING THE STORE
export const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { store, actions } = useContext(Context);
  const [passLogin, setPasslogin] = useState(false);
  let history = useHistory();

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
          LETS LOGIN
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          PASSWORD
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
          if (email === "" || password === "") {
            alert("The input cannot be empty");
          } else {
            actions.signIn(email, password);
            history.push("/home");
          }
        }}
        formtype="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

// const AnyComponent = () => {
//     const [inputValue, setInputValue ] = React.useState('');

//     const validateInput = () => {
//       if(inputValue === "") alert("The input cannot be empty");
//       else alert("All perfect!");
//     };
//     return <div>
//         <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
//         <button onClick={validateInput}>Click to validate empty</button>
//     </div>;
// }

// ReactDOM.render(
//   <AnyComponent />,
//   document.getElementById('container')
// );
