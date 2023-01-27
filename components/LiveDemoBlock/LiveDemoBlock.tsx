import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

export default function LiveDemoBlock() {
  return (
    <>
      <div className="c-liveDemo-root">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <div className="c-liveDemo-tag">LIVE DEMO</div>
        </div>
        <div className="c-liveDemo-bigTitle">See Fingerprint in Action</div>
        <div className="c-liveDemo-mainInfoContainer">
          <div className="c-liveDemo-mainInfoUppart">
            <div className="c-liveDemo-visitorIdContainer">
              <div className="c-liveDemo-smallTitleTxt">
                YOUR VISITOR ID
                <ErrorOutlineIcon className="c-liveDemo-noticeIcon" />
              </div>
              <div className="c-liveDemo-orangeTxt">7vQjMMQLpdGPT3A3fB92</div>
            </div>
            <div className="c-liveDemo-visitorIdContainer">
              <div className="c-liveDemo-infoContainer1">
                <div className="c-liveDemo-smallTitleTxt">
                  YOUR VISIT SUMMARY
                </div>
                <div
                  className="c-liveDemo-smallDescTxt"
                  style={{ marginLeft: "5px" }}
                >
                  You visited 1 time
                </div>
              </div>
              <div className="c-liveDemo-threRowInfo">
                <div className="c-liveDemo-threRowItem">
                  <div className="c-liveDemo-smallTitleTxt">
                    INCOGNITO
                    <ErrorOutlineIcon className="c-liveDemo-noticeIcon" />
                  </div>
                  <div className="c-liveDemo-smallDescTxt">0 sessions</div>
                </div>
                <div className="c-liveDemo-threRowItem">
                  <div className="c-liveDemo-smallTitleTxt">IP ADDRESS</div>
                  <div className="c-liveDemo-smallDescTxt">1 IP</div>
                </div>
                <div className="c-liveDemo-threRowItem">
                  <div className="c-liveDemo-smallTitleTxt">
                    GEOLOCATION
                    <ErrorOutlineIcon className="c-liveDemo-noticeIcon" />
                  </div>
                  <div className="c-liveDemo-smallDescTxt">1 location</div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-liveDemo-mainInfoDownpart">
            <div
              className="c-liveDemo-smallTitleTxt"
              style={{
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              YOUR VISIT HISTORY
            </div>
            <div className="c-liveDemo-historyRoot">
              <div className="c-liveDemo-historyContainer">
                <div className="c-liveDemo-historyLeft">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      paddingBottom: "10px",
                      borderBottom: "1px solid #e8e8e8",
                    }}
                  >
                    <div className="c-liveDemo-ipTitileTxt">IP</div>
                    <div className="c-liveDemo-ipNumTxt">115.58.25.58</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      paddingBottom: "10px",
                      paddingTop: "16px",
                    }}
                  >
                    <div className="c-liveDemo-ipTitileTxt">INCOGNITO</div>
                    <div className="c-liveDemo-ipNumTxt">NO</div>
                  </div>
                </div>
                <div className="c-liveDemo-historyRight">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                    }}
                  >
                    <div className="c-liveDemo-ipTitileTxt">Location</div>
                    <div className="c-liveDemo-ipNumTxt">Finland</div>
                  </div>
                  <img src="/map.jpg" className="c-liveDemo-mapImg" />
                </div>
              </div>
            </div>
            <div className="c-liveDemo-currentTxt">CURRENT VISIT</div>
          </div>
        </div>
      </div>
    </>
  );
}
