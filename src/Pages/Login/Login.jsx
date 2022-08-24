import { useForm } from "react-hook-form";

import appService from "../../Components/App/Appservices/App.service";
import { UseLoginstore } from "./UseLoginstore";

const Login = () => {


  const { setLoggedIn } = UseLoginstore((store) => ({
    setLoggedIn: store.setLoggedIn
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (submitdata) => {
    async function fetchResults() {
      try {
        const response = await appService.Login(submitdata.username, submitdata.password);

        if (response.data) {
          //localStorage.setItem("user", JSON.stringify(response.data));
          setLoggedIn(true, response.data);

          //setUser(response.data.username);
          console.log("data user", response.data);

          
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchResults();
  };

  return (
    <article>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <h2>Indtast login oplysninger</h2>
        <input
          {...register("username", { required: "Brugernavn er påkrævet" })}
          type="text"
          id="username"
          autoComplete="username"
          placeholder="brugernavn"
        />
        {errors.username ? <small className="liveValidateMessage">Du mangler brugernavn</small> : null}
        <input
          {...register("password", { required: "Password er et påkrævet felt" })}
          type="password"
          id="password"
          autoComplete="password"
          placeholder="Dit password"
        />
        {errors.password ? <small className="liveValidateMessage">Du mangler password</small> : null}

        <button>login</button>
      </form>
    </article>
  );
};

export default Login;
