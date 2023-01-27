import React from "react";
import { Menu } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default function DeveloperTab() {
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
        Developers
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
        <div
          className="c-header-menuRightBlock"
          style={{ background: "white !important" }}
        >
          <div className="c-header-menuGreyTitle" style={{ marginLeft: "0px" }}>
            DEV RESOURCES
          </div>

          <div className="c-header-menuBlackTxt">Documentation</div>
          <div className="c-header-menuBlackTxt">API Status</div>
          <div className="c-header-menuBlackTxt">SDK and Libraries</div>

          <div className="c-header-menuBlackTxt">Open Source vs Pro</div>
        </div>
        <div className="c-header-menuRightBlock">
          <div className="c-header-menuGreyTitle" style={{ marginLeft: "0px" }}>
            Community
          </div>

          <div className="c-header-menuBlackTxt">Discord</div>
          <div className="c-header-menuBlackTxt">GitHub</div>
        </div>
      </Menu>
    </>
  );
}
