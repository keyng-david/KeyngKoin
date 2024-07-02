import { useTonAddress } from '@tonconnect/ui-react';
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Profile from "./page/Profile";
import { Context } from "./context";
import Rules from "./page/Rules";
import Detail from "./page/Detail";

function App() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const tonAddress = useTonAddress();

  useEffect(() => {
    const targetUrl = location.pathname + location.search;
    if (!tonAddress) {
      navigate(`/login?${targetUrl}`);
    } else {
      navigate("/")
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