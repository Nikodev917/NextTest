import OrangeBtn from "../Base/OrangeBtn/OrangeBtn";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Marquee from "react-fast-marquee";

export default function DeviceIntroBlock() {
  return (
    <>
      <div className="c-deviceIntro-root">
        <div className="c-deviceIntro-leftPart">
          <div className="c-deviceIntro-titleTxt">
            Building
            <span style={{ color: "#0c79e4" }}> Digital Product,</span> Brand
            and Experience
          </div>
          <div className="c-deviceIntro-descTxt">
            Powered by the most accurate device fingerprinting technology,
            Fingerprint enables engineers to prevent fraud, improve user
            experiences, and better understand their traffic.
          </div>
          <div className="c-deviceIntro-btnContainer">
            <OrangeBtn
              content="Create Free Account"
              className="c-deviceIntro-btn"
            />
            {/* <OrangeBtn
              content="View Live Demo"
              bordered
              className="c-deviceIntro-btn"
            /> */}
            <div className="c-deviceIntro-checkVideoContainer">
              <div className="c-deviceIntro-videoIcon">
                <PlayArrowIcon className="c-deviceIntro-videoArrow" />
              </div>
              <div className="c-deviceIntro-checkVideoTxt">Check Video</div>
            </div>
          </div>
        </div>
        <div className="c-deviceIntro-video1Container">
          {/* <video muted playsInline autoPlay className="c-deviceIntro-video1">
            <source src="video1.mov" type="video/mp4" />
          </video> */}
          <img src="/testImg/digitalBG.png" className="c-deviceIntro-video1" />
        </div>
      </div>
      <div className="c-deviceIntro-comFlowTitle">
        Trusted By Greatest Companies
      </div>
      <div className="c-deviceIntro-comFlowContainer">
        <Marquee>
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
        </Marquee>
      </div>
    </>
  );
}
