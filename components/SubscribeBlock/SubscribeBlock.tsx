import { TextField } from "@material-ui/core";
import OrangeBtn from "../Base/OrangeBtn/OrangeBtn";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function SubscribeBlock() {
  return (
    <>
      <div style={{ padding: "0px 20px", marginTop: "60px" }}>
        <div className="c-subscribe-root">
          <img
            src="/testImg/subscribeImg1.png"
            className="c-subscribe-img1"
            alt="img"
          />
          <img
            src="/testImg/subscribeImg2.png"
            className="c-subscribe-img2"
            alt="img"
          />
          <div className="c-subscribe-container">
            <div className="c-subscribe-titleTxt">
              Subscribe Newletter Get Latest Updates and Deals
            </div>
          </div>
          {/*  */}
          <div className="c-contactus-sendemail-container">
            <TextField
              placeholder="Email address*"
              className="c-contactus-input"
            />
            {/* <CallMadeIcon className="c-footer-upArrowIcon" /> */}
            <OrangeBtn content="Subscribe" className="c-subscribe-Btn">
              <ArrowRightAltIcon className="c-subscribe-arrow" />
            </OrangeBtn>
          </div>
        </div>
      </div>
    </>
  );
}
