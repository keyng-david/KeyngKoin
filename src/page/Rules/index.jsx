import { NavBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import "../../style/Rules.css";

function Rules() {
  const navigate = useNavigate();

  const back = () => navigate("/");

  return (
    <div className="page rules_page">
      <NavBar onBack={back}>规则说明</NavBar>
      <div className="body">
        <section>
          <h3>Game Rule</h3>
          <p>The player controls the length of the rod by long pressing the screen, so that when the rod falls clockwise, it will hit the next platform to ensure that the villain can pass through the ravine safely, otherwise the game will end if it fails</p>

<p>When the player obtains the best score, the system prompts to save the score and consumes <b>10</b> Keyng Koins. If not saved, it will not be consumed</p>
        </section>
        <section>
          <p>The system performs this operation once a day at <b>00:00</b>

After settlement, all the gold coins consumed today will be awarded to all the top players in the ranking<b>50%<b>Players</p>
         </section>
         <section>
           <h3>Reward details</h3>
           <p>All daily income is returned to players</p>

<p>The top <b>1000</b> players will share <b>10%</b> of all Mined Keyng Koins.</p>

<p>The top <b>30%</b> of players will get an extra tie Share <b>15%</b></p> of Mined Coins

<p>The top <b>15%</b> of players will get an extra tie Share <b>15%</b></p> of all Keyng Koins

<p>The top <b>5%</b> players will get an extra share All gold coins<b>10%</b></p>

<p>The third player gets all additional gold coins<b>2%</b></p>

<p>The second player gets all additional gold coins<b>3%</b></p>


<p>The first player gets all additional gold coins<b>5%</b></p>
        </section>
      </div>
    </div>
  );
}

export default Rules;
