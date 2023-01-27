import {
  fadeInUp,
  fadeInRight,
  slideInDown,
  fadeInDownShorter,
  maskRight,
  fadeInDownShorter2,
} from "../../../utility/keyframes";
import { Reveal, Fade } from "react-awesome-reveal";

interface Props {
  imgSrc: string;
  content: string;
  desc: string;
}

export default function BlackCard({ imgSrc, content, desc }: Props) {
  return (
    <>
      <div className="c-blackCard-root">
        <Fade
        // keyframes={fadeInDownShorter2}
        >
          <img src={imgSrc} className="c-blackCard-img" />
        </Fade>
        <div className="c-blackCard-title">{content}</div>

        <div className="c-blackCardDesc">{desc}</div>
      </div>
    </>
  );
}
