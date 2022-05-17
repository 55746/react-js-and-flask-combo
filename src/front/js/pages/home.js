import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Logout } from "../component/Logout.jsx";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  console.log(store.user);
  return (
    <div className="text-center mt-5">
      {store.user.email ? (
        <div>
          <h1 class="display-1">Display 1</h1>
          <h1 class="display-2">Display 2</h1>
          <h1 class="display-3">Display 3</h1>
          <h1 class="display-4">Display 4</h1>
          <h1 class="display-5">Display 5</h1>
          <h1 class="display-6">Display 6</h1>
          <button
            onClick={(e) => {
              // validateInput();
              e.preventDefault();
              actions.logout();
              history.push("/signin");
            }}
          >
            <Logout />
          </button>
        </div>
      ) : (
        <h1>You are not logged in</h1>
      )}
    </div>
  );
};

{
  /* condition ? true : false */
}

{
  /* <p>
  <img src={rigoImageUrl} />
</p>
<div className="alert alert-info">
  {store.message ||
    "Loading message from the backend (make sure your python backend is running)..."}
</div>
<Link to="/signup">
  <button>sign up</button>
</Link>
<p>
  This boilerplate comes with lots of documentation:{" "}
  <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
    Read documentation
  </a>
</p> */
}
