import React from "react";
import { Divider, Menu } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CallMadeIcon from "@material-ui/icons/CallMade";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default function SolutionTab() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="c-header-headerTab" onClick={handleClick}>
        Solutions
        {anchorEl === null ? (
          <ExpandMoreIcon className="c-header-downIcon" />
        ) : (
          <ExpandLessIcon className="c-header-downIcon" />
        )}
      </div>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="c-header-menuContainer"
      >
        <div className="c-header-menuLeftBlockContainer">
          <div className="c-header-menuLeftBlock">
            <div className="c-header-menuGreyTitle">PROJECT</div>
            <div className="c-header-menuContentItem">
              <div className="c-header-menuBlackTxt">Payment Fraud</div>
              <div className="c-header-menuSmallTxt">
                Protect your revenue while keeping approval rates high.
              </div>
              <div className="c-header-menuSmallTxt">See Use Case</div>
            </div>
            <div className="c-header-menuContentItem">
              <div className="c-header-menuBlackTxt">Account Takeover</div>
              <div className="c-header-menuSmallTxt">
                Prevent more attacks without hindering user experience.
              </div>
            </div>
          </div>
          {/*  */}
          <div className="c-header-menuLeftBlock">
            <div className="c-header-menuGreyTitle">PROJECT</div>
            <div className="c-header-menuContentItem">
              <div className="c-header-menuBlackTxt">Payment Fraud</div>
              <div className="c-header-menuSmallTxt">
                Protect your revenue while keeping approval rates high.
              </div>
              <div className="c-header-menuSmallTxt">See Use Case</div>
            </div>
            <div className="c-header-menuContentItem">
              <div className="c-header-menuBlackTxt">Account Takeover</div>
              <div className="c-header-menuSmallTxt">
                Prevent more attacks without hindering user experience.
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div
                className="c-header-menuBlackTxt"
                style={{ width: "50px", fontSize: "14px !important" }}
              >
                All Use Case
              </div>
              <CallMadeIcon className="c-header-arrowUpIcon" />
            </div>
          </div>
        </div>
        <div className="c-header-menuRightBlock">
          <div className="c-header-menuGreyTitle" style={{ marginLeft: "0px" }}>
            By Industry
          </div>

          <div className="c-header-menuBlackTxt">eCommerce</div>
          <div className="c-header-menuBlackTxt">Buy Now Pay</div>
          <div className="c-header-menuBlackTxt">Online Gaming</div>
          <div className="c-header-menuBlackTxt">Crypto Currency</div>
        </div>
      </Menu>
    </>
  );
}
