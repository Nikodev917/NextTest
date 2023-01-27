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
        Resources
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
        <div className="c-header-menuResourceBlock">
          <div className="c-header-menuBlackTxt">Blog</div>
          <div className="c-header-menuBlackTxt">FAQ</div>
          <div className="c-header-menuBlackTxt">Webinars</div>

          <div className="c-header-menuBlackTxt">Case Stuies</div>
        </div>
      </Menu>
    </>
  );
}
