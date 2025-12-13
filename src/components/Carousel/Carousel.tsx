import { Card } from "@mui/material";
import "./Carousel.scss";

type CarouselProps = {
  imageSrc: string;
  altText: string;
};

const Carousel = ({ imageSrc, altText }: CarouselProps) => {
  return (
    <Card className="wte-style-card">
      <img src={imageSrc} alt={altText} className="wte-style-image" />
    </Card>
  );
};

export default Carousel;
