import Login from "../../Pages/Login/Login";
import LogOut from "../../Pages/Login/LogOut";
import { UseLoginstore } from "../../Pages/Login/UseLoginstore";
import { ProductNav } from "./NavFromList";

const Header = () => {
  const { loggedIn, username } = UseLoginstore((store) => ({
    loggedIn: store.loggedIn,
    username: store.username,
  }));
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      {!loggedIn ? <Login /> : <LogOut />}
      {username}
    </div>
  );
};

export default Header;
