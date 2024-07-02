import { useTonAddress } from '@tonconnect/ui-react';
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./page/Home/index.jsx"; // Explicit extension for clarity
import Login from "./page/Login/index.jsx"; // Explicit extension for clarity
import Profile from "./page/Profile/index.jsx"; // Explicit extension for clarity
import Rules from "./page/Rules/index.jsx"; // Explicit extension for clarity
import Detail from "./page/Detail/index.jsx"; // Explicit extension for clarity
import { Context } from "./context/index.jsx"; // Ensure this is correct

function App() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const tonAddress = useTonAddress();

  useEffect(() => {
    console.log("Current address:", tonAddress); // Log current tonAddress
    const targetUrl = location.pathname + location.search;
    if (!tonAddress) {
      console.log("Navigating to login");
      navigate(`/login?${targetUrl}`);
    } else {
      console.log("Navigating to home");
      navigate("/");
    }
  }, [tonAddress]); // Add tonAddress as a dependency

  if (tonAddress === undefined) return <></>;

  return (
    <Context.Provider value={{ userInfo }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;