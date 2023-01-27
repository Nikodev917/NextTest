import { Grid } from "@material-ui/core";
import { feedBackCardData } from "../../config/mockupData";
import FeedbackCard from "../Base/FeedbackCard/FeedbackCard";

import CallMadeIcon from "@material-ui/icons/CallMade";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function HappyCustomer() {
  return (
    <>
      <div className="c-happyCustomer-root">
        <div className="c-happyCustomer-title">Happy Customer Feedback</div>
        <div className="c-usecase-blackCards">
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {feedBackCardData?.map((item: any, key: any) => {
              return (
                <Grid item xs={12} sm={12} md={3} key={key}>
                  <FeedbackCard
                    desc={item?.desc}
                    avatarImg={item?.avatarImg}
                    userName={item?.userName}
                    userJob={item?.userJob}
                    starCount={item?.starCount}
                  />
                </Grid>
              );
            })}
          </Grid>
          <div className="c-usecase-carouselBtnContainer">
            <div className="c-usecase-carouselBtn1">
              <CallMadeIcon
                style={{
                  color: "#424243",
                  width: "15px !important",
                  height: "15px",
                }}
              />
            </div>
            <div className="c-usecase-carouselBtn2">
              <ArrowRightAltIcon
                style={{
                  color: "white",
                  width: "15px !important",
                  height: "15px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
