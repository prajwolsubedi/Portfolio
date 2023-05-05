import "./PricingCardStyle.css";
import { Link } from "react-router-dom";
import Mapty from "./assests/mapty.png";
import Simon from "./assests/Simon.png";
import Bank from "./assests/Bank.png";

const PricingCard = () => {
  return (
    <>
      <div className="pricing">
        <div className="card-container">
          <div className="card">
            <h3>--Bank App--</h3>
            <img src={Bank} alt="bank" />
            <p>
              <strong>ps</strong> :1111
            </p>
            <p>
              <strong>sd</strong> :2222
            </p>
            <p>Try transaction between this two users😇</p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://prajwolsubedibankapp.netlify.app/"
              className="btn"
            >
              Show
            </Link>
          </div>
          <div className="card">
            <h3>--Simon Game--</h3>
            <img src={Simon} alt="simon" />
            <p>My HighScore is 30😁</p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://prajwolsimongame.netlify.app/"
              className="btn"
            >
              Show
            </Link>
          </div>
          <div className="card">
            <h3>--Mapty--</h3>
            <img src={Mapty} alt="mapty" />
            <p>Plan your workout 🏃‍♂️🏃‍♂️</p>
            <p>Cycling and Running are only available for now!</p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://prajwolsubedimapty.netlify.app/"
              className="btn"
            >
              Show
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
