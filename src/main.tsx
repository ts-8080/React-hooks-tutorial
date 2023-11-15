import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const userInfo = {
  name: "tanaka",
  age: 45,
};

const UserInfoContext = createContext(userInfo);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserInfoContext.Provider value={userInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserInfoContext.Provider>
);

export default UserInfoContext;
