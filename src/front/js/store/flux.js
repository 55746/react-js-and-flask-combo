const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      const Signup = (email, password) => {
        fetch(
          "https://3000-55746-reactjsandflaskc-7fuvd46mddi.ws-us44.gitpod.io/api/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(email, password),
            redirect: "follow",
          }
        )},
      getUser: (email, password) => {
        fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(email, password),
          redirect: "follow",
        }).catch((error) => console.log("error", error));
      },

      userLogin: (data) => {
        const login = User(store.demo);
        const requestOptions = {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
          redirect: "follow",
        };
        fetch(process.env.BACKEND_URL + "/api/signup", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setTodolist(login);
          })
          .catch((error) => console.log("error", error));
        return login;
      },

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
