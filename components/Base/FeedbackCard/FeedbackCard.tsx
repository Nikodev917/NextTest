import StarIcon from "@material-ui/icons/Star";

interface Props {
  desc: string;
  avatarImg: string;
  userName: string;
  userJob: string;
  starCount: number;
}

export default function FeedbackCard({
  desc,
  avatarImg,
  userName,
  userJob,
  starCount,
}: Props) {
  return (
    <>
      <div className="c-feedbackCard-root">
        <div className="c-blackCardDesc">{desc}</div>
        <div className="c-feedbackCard-downPart">
          <div className="c-feedbackCard-userInfo">
            <img
              src={avatarImg}
              className="c-feedbackCard-avatarImg"
              alt="img"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="c-feedbackCard-userNameTxt">{userName}</span>
              <span className="c-feedbackCard-userJobTxt">{userJob}</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <StarIcon className="c-feedbackCard-starIcon" />
            <StarIcon className="c-feedbackCard-starIcon" />
            <StarIcon className="c-feedbackCard-starIcon" />
          </div>
        </div>
      </div>
    </>
  );
}
