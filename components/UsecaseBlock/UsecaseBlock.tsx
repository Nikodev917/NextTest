import { Grid } from "@material-ui/core";
import BlackCard from "../Base/BlackCard/BlackCard";
import { blackCardData } from "../../config/mockupData";
import OrangeBtn from "../Base/OrangeBtn/OrangeBtn";

export default function UsecaseBlock() {
  return (
    <>
      <div className="c-usecase-root">
        <div className="c-usecase-container">
          <div className="c-usecase-bigTitleTxt">We are Strategic Creative</div>
          <div className="c-usecase-bigTitleTxt">Digital Agency Service</div>

          <div className="c-usecase-blackCards">
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {blackCardData?.map((item: any, key: any) => {
                return (
                  <Grid item xs={12} sm={12} md={3} key={key}>
                    <BlackCard
                      imgSrc={item?.imgSrc}
                      content={item?.content}
                      desc={item?.desc}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <OrangeBtn content="Get All Device" className="c-usecase-btn" />
        </div>
      </div>
    </>
  );
}
