import { TonConnectButton } from '@tonconnect/ui-react';
import { Button, Space, } from "antd-mobile";
import "../../style/Home.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate("/detail");
  };

  const goProfile = () => {
    navigate("/profile");
  };

  const goRules = () => {
    navigate("/rules");
  };

  return (
    <div className="page home_page">
      <div className='header'>
        <div className="header_l">
          <div>Best Score: 0</div>
          <div>Today's Rank: 0</div>
        </div>
        <div className="header_r">
          <TonConnectButton />
        </div>
      </div>
      <div className="body">
        <Space direction='vertical' className='action'>
          <Button onClick={goDetail}>Details</Button>
          <Button>Rank Board</Button>
          <Button onClick={goProfile}>个Profile</Button>
          <Button onClick={goRules}>Rules</Button>
        </Space>
      </div>
    </div >
  );
}

export default Home;
