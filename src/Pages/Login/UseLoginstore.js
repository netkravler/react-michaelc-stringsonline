import create from "zustand";
import { persist } from "zustand/middleware";

export const UseLoginstore = create(
  persist(
    (set) => {
      return {
        loggedIn: false,
        access_token: "",
        expires_in: "",
        status: "",
        token_type: "",
        user_id: "",
        username: "",

        setLoggedIn: (logIn, userData) =>
          set((state) => {
            state.loggedIn = logIn;
            state.access_token = userData.access_token;
            state.expires_in = userData.expires_in;
            state.status = userData.status;
            state.token_type = userData.token_type;
            state.user_id = userData.user_id;
            state.username = userData.username;
          }),
        setLogOut: () =>
          set((state) => {
            state.loggedIn = false;
            state.access_token = "";
            state.expires_in = "";
            state.status = "";
            state.token_type = "";
            state.user_id = "";
            state.username = "";
          }),
      };
    },
    { name: "token", getStorage: () => sessionStorage }
  )
);
