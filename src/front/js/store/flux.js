const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
    },
    actions: {
      // Use getActions to call a function within a fuction

      signUp: (email, password, first_name, last_name, dob) => {
        const new_user = {
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name,
          dob: dob,
        };
        fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_user),
          // redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },
      signIn: (email, password) => {
        const user = {
          email: email,
          password: password,
        };
        fetch(process.env.BACKEND_URL + "/api/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => getActions().verifyUser(result.access_token))
          .catch((error) => console.log("error", error));
      },

      verifyUser: (token) => {
        fetch(process.env.BACKEND_URL + "/api/protected", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => setStore({ user: result }))
          .catch((error) => console.log("error", error));
        // localStorage.setItem("token", token);
      },
      logout() {
        setStore({ user: {} });
      },
      // userLogin: (data) => {
      //   const login = User(store.demo);
      //   const requestOptions = {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     method: "GET",
      //     redirect: "follow",
      //   };
      //   fetch(process.env.BACKEND_URL + "/api/signup", requestOptions)
      //     .then((response) => response.json())
      //     .then((result) => {
      //       setTodolist(login);
      //     })
      //     .catch((error) => console.log("error", error));
      //   return login;
      // },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
