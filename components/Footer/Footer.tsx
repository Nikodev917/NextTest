import { TextField } from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";

import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";

export default function Footer() {
  return (
    <>
      <div className="c-footer-root">
        <div className="c-footer-upPartContainer">
          <div className="c-footer-subscribeContainer">
            <div>
              {/* <div className="c-footer-subscribeTitle">
                Subscribe to our newsletter
              </div> */}
              <div>
                <img
                  src="/testImg/logoImage.png"
                  className="c-footer-logoImg"
                  alt="img"
                />
              </div>
              <div className="c-footer-subscribeDesc">
                Get updates about company news and new features of Fingerprint
                Pro.
              </div>
              <div className="c-footer-linkBlockItemTitle">Follow Us</div>
              <div className="c-footer-followLinkContainer">
                <div className="c-footer-followLink">
                  <MailIcon className="c-footer-followIcon" />
                </div>
                <div className="c-footer-followLink">
                  <TwitterIcon className="c-footer-followIcon" />
                </div>
                <div className="c-footer-followLink">
                  <FacebookIcon className="c-footer-followIcon" />
                </div>
                <div className="c-footer-followLink">
                  <GitHubIcon className="c-footer-followIcon" />
                </div>
                <div className="c-footer-followLink">
                  <InstagramIcon className="c-footer-followIcon" />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="c-footer-linkBlock">
            <div className="c-footer-linkBlockItem">
              <div className="c-footer-linkBlockItemTitle">SOLUTIONS</div>
              <a href="#" className="c-footer-linkBlockItemContent">
                Payment Fraund
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Account Takeover
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Account Sharing Prevention
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Paywall Enforcement
              </a>
            </div>
            {/*  */}
            <div className="c-footer-linkBlockItem">
              <div className="c-footer-linkBlockItemTitle">PLATFORM</div>
              <a href="#" className="c-footer-linkBlockItemContent">
                Pro - Visitor Identification
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                BotD - Bot Detection
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Integrations
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Security & Privacy
              </a>
            </div>
            {/*  */}
            <div className="c-footer-linkBlockItem">
              <div className="c-footer-linkBlockItemTitle">Contact Us</div>
              <a href="#" className="c-footer-linkBlockItemContent">
                <LocationOnIcon className="c-footer-contactIcon" />
                1440 W. Taylor St #735, Chicago, IL 60607, USA
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                <PhoneIcon className="c-footer-contactIcon" />
                +1 291-936-5412
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                <MailIcon className="c-footer-contactIcon" />
                support@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="c-footer-downPartContainer">
          <div className="c-footer-downPartLeft">
            Get updates about company news and new features of Fingerprint Pro.
          </div>
          <div className="c-footer-downPartRight">
            <div className="c-footer-downPartLeft">1234214 </div>
            <div className="c-footer-downPartLeft">1234214 </div>
            <div className="c-footer-downPartLeft">1234214 </div>
          </div>
        </div>
      </div>
    </>
  );
}
