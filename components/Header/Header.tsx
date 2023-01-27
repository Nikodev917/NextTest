import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import OrangeBtn from "../Base/OrangeBtn/OrangeBtn";
import PlatformTab from "./PlatformTab";
import SolutionTab from "./SolutionTab";
import DeveloperTab from "./DeveloperTab";
import ResourceTab from "./ResourceTab";

export default function GeneralSaleCard() {
  return (
    <>
      <div
        style={{
          width: "100%",
          background: "white",
          position: "fixed",
          zIndex: 20,
        }}
      >
        <div className="c-header-root">
          <img
            // src="/logoImg.svg"
            src="/testImg/logoImage.png"
            alt="img"
            className="c-header-fingureLogoContainer"
          />
          <div className="c-header-linkPart">
            <div className="c-header-headerTab">Home</div>
            <div className="c-header-headerTab">About Us</div>
            <div className="c-header-headerTab">Partner</div>
            <div className="c-header-headerTab">Blog</div>
            <div className="c-header-headerTab">Contact</div>
          </div>
          <div className="c-header-rightPart">
            <span className="c-header-loginTxt">Login</span>
            <OrangeBtn content="Get Started" className="c-header-actionBtn" />
          </div>
        </div>
      </div>
    </>
  );
}
