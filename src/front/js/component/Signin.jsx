import React from "react";

export const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
      <button type="submit" onClick={validateInput} className="btn btn-primary">
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
