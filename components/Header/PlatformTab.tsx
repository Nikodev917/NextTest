import React, { useState } from "react";
import { Menu } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default function PlatformTab() {
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
        Platform
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
            <div className="c-header-menuGreyTitle">CAPABILITIES</div>
            <div className="c-header-menuContentItem">
              <div className="c-header-menuBlackTxt">
                Pro visitory identification
              </div>
              <div className="c-header-menuSmallTxt">
                Identify web and mobile users with our high accuracy
                fingerprints.
              </div>
            </div>
            <div className="c-header-menuContentItem">
              <div className="c-header-menuBlackTxt">BotD - Bot Detection</div>
              <div className="c-header-menuSmallTxt">
                Detect automated threats and better understand your traffic.
              </div>
            </div>
          </div>
        </div>
        <div className="c-header-menuRightBlock">
          <div className="c-header-menuBlackTxt" style={{ opacity: 0 }}>
            xyz{" "}
          </div>

          <div className="c-header-menuBlackTxt">Integrations</div>
          <div className="c-header-menuBlackTxt">Security & Privacy</div>
        </div>
      </Menu>
    </>
  );
}
