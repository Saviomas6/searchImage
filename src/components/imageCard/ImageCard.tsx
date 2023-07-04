import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container } from "../../styles/sharedStyles";
import {
  Button,
  ButtonWrapper,
  ImageCardMainLayout,
  ImageGridLayout,
  LoadingCard,
  NoItemFound,
} from "./ImageCard.style";

interface I_ImageCard {
  isLoading: boolean;
  images: any;
  setLoadImage: any;
}

const ImageCard = ({ images, setLoadImage, isLoading }: I_ImageCard) => {
  return (
    <Container>
      <ImageCardMainLayout>
        <ImageGridLayout>
          {images.map((image: any, i: number) => (
            <LazyLoadImage
              key={i}
              effect="blur"
              alt={image.alt}
              height="100%"
              src={image?.urls?.regular}
              width="100%"
              style={{ borderRadius: "10px", objectFit: "cover" }}
            />
          ))}
          {isLoading && Array.from({ length: 20 }, (x, v) => <LoadingCard />)}
        </ImageGridLayout>
        {images.length === 0 && <NoItemFound>No Image Found</NoItemFound>}

        {images.length !== 0 && (
          <ButtonWrapper>
            <Button onClick={() => setLoadImage((pre: any) => pre + 1)}>
              Load More
            </Button>
          </ButtonWrapper>
        )}
      </ImageCardMainLayout>
    </Container>
  );
};

export default ImageCard;
