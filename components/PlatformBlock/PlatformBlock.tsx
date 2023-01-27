export default function PlatformBlock() {
  return (
    <>
      <div className="c-platform-root">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <div className="c-liveDemo-tag">THE PLATFORM</div>
        </div>
        <div
          className="c-liveDemo-bigTitle"
          style={{ marginBottom: "16px !important" }}
        >
          {" "}
          Recognize your users across all touchpoints
        </div>
        <div className="c-platformDescTxt">
          Fingerprint’s device identity platform gives you a complete view of
          your users across web and mobile - whether or not they are logged in
          or concealing their identity.
        </div>
        <div className="c-platform-orangeTxt">THE DEVICE IDENTITY PLATFORM</div>
      </div>
    </>
  );
}
