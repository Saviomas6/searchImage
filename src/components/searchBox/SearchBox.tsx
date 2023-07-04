import {
  SearchBoxContainer,
  SearchBoxDescription,
  SearchBoxHeader,
  SearchBoxInput,
  SearchBoxInputContainer,
  SearchBoxMainLayout,
} from "./SearchBox.style";
import image from "../../assets/image.jpg";

const SearchBox = ({ handleDebounce }: any) => {
  return (
    <SearchBoxMainLayout imgUrl={image}>
      <SearchBoxContainer>
        <SearchBoxHeader>
          Stunning free images & royalty free stock
        </SearchBoxHeader>
        <SearchBoxDescription>
          Over 2.7 million+ high quality stock images, videos and music shared
          by our talented community.
        </SearchBoxDescription>
        <SearchBoxInputContainer>
          <SearchBoxInput
            type="text"
            placeholder="Search for all images on Pixabay"
            onChange={handleDebounce}
          />
        </SearchBoxInputContainer>
      </SearchBoxContainer>
    </SearchBoxMainLayout>
  );
};

export default SearchBox;
