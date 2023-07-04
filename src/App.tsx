import axios from "axios";
import { useEffect, useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { baseUrl } from "./variable";
import { debounce } from "./helpers";
import Header from "./components/header/Header";
import SearchBox from "./components/searchBox/SearchBox";
import Category from "./components/category/Category";
import ImageCard from "./components/imageCard/ImageCard";

const App = () => {
  const [images, setImages] = useState<any>([]);
  const [loadImage, setLoadImage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSelectedValue, setSelectedValue] = useState<string>("nature");

  const myVar = import.meta.env.VITE_TEST_VAR;

  const fetchImage = async () => {
    setLoading(true);
    const response = await axios.get(
      `${baseUrl}?page=${loadImage}&query=${
        searchText === "" ? isSelectedValue : searchText
      }&client_id=${myVar}`
    );
    if (response) {
      setImages([...images, ...response?.data?.results]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [loadImage, searchText, isSelectedValue]);

  const handleChange = (e: any) => {
    setImages([]);
    setSearchText(e.target.value);
  };

  const handleDebounce = debounce((e: any) => handleChange(e), 1000);

  return (
    <>
      <Header />
      <SearchBox handleDebounce={handleDebounce} />
      <Category
        isSelectedValue={isSelectedValue}
        setSelectedValue={setSelectedValue}
        setImages={setImages}
        setSearchText={setSearchText}
      />
      <ImageCard
        isLoading={isLoading}
        images={images}
        setLoadImage={setLoadImage}
      />
    </>
  );
};

export default App;
