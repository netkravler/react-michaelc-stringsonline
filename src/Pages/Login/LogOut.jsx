import { UseLoginstore } from "./UseLoginstore";


const LogOut = () => {
  const { setLogOut } = UseLoginstore((store) => ({
    setLogOut: store.setLogOut,
  }));

  const handleLogOut = () => {
    setLogOut();
  };

  return <button onClick={() => handleLogOut()}>Log ud</button>;
};

export default LogOut;
