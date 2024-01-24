import { TbSquareRotatedFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ReactDOM from "react-dom/client";
import "./SingUp.css";
import { useState } from "react";
export default function Sing() {
  return (
    <div className="ContainerSing">
      <div className="textList">
        <h2>
          Get more benefits
          <br /> by Sign Up & Join <br /> Mejiwoo Community!
        </h2>
        <ul>
          <li>
            <TbSquareRotatedFilled /> FREE Special Gift to a new member
          </li>
          <li>
            <TbSquareRotatedFilled /> Get 2x JIWOO Points to purchase items
          </li>
          <li>
            <TbSquareRotatedFilled /> Get special voucher code every month{" "}
          </li>
          <li>
            <TbSquareRotatedFilled /> Claim Voucher Disc. Up To 50%{" "}
          </li>
        </ul>
      </div>
      <div className="containerInput">
        <form>
          <ul>
            <li>
              <input type="text" placeholder="Full Name" />
            </li>
            <li>
              <input type="text" placeholder="Email Adress" />
            </li>
            <li>
              <input type="text" placeholder="Password" />
            </li>
            <li>
              <input
                type="checkbox"
                className="checkbox"
                name="vehicle1"
                value="Bike"
              />
              I agree to all the <strong>Terms </strong>and{" "}
              <strong>Privacy Policy</strong>
            </li>
          </ul>
          <button className="btnSinUp">SING UP</button>
        </form>
        <div className="lineContainer">
          <div className="line1"></div>
          <p>Or</p>
          <div className="line2"></div>
        </div>
        <div className="socialMedia">
          <a href="#">
            <FcGoogle className="media" /> SING UP WITH GOOGLE
          </a>
          <a href="#">
            <FaFacebook className="media facebook" /> SING UP WITH FACEBOOK
          </a>
        </div>
      </div>
    </div>
  );
}
