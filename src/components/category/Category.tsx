import React from "react";
import { Container } from "../../styles/sharedStyles";
import { CategoryButton, CategoryButtonContainer } from "./Category.style";

interface I_Category {
  isSelectedValue: string;
  setSelectedValue(value: string): void;
  setImages: any;
  setSearchText(value: string): void;
}

const Category = ({
  isSelectedValue,
  setSelectedValue,
  setImages,
  setSearchText,
}: I_Category) => {
  const category = [
    {
      id: 1,
      label: "Nature",
      value: "nature",
    },
    {
      id: 2,
      label: "Wallpaper",
      value: "wallpaper",
    },
    {
      id: 3,
      label: "Background",
      value: "background",
    },
    {
      id: 4,
      label: "Sky",
      value: "sky",
    },
    {
      id: 5,
      label: "Money",
      value: "money",
    },
    {
      id: 6,
      label: "Cat",
      value: "cat",
    },
    {
      id: 7,
      label: "Love",
      value: "love",
    },
    {
      id: 8,
      label: "Car",
      value: "car",
    },
    {
      id: 9,
      label: "Dog",
      value: "dog",
    },
    {
      id: 10,
      label: "Food",
      value: "food",
    },
    {
      id: 11,
      label: "Flowers",
      value: "flowers",
    },
    {
      id: 12,
      label: "Music",
      value: "music",
    },
  ];
  return (
    <Container width="90%">
      <CategoryButtonContainer>
        {category.map((category) => (
          <CategoryButton
            key={category?.id}
            onClick={() => {
              setImages([]);
              setSelectedValue(category?.value);
            }}
            isSelectedValue={isSelectedValue === category?.value}
          >
            {category?.label}
          </CategoryButton>
        ))}
      </CategoryButtonContainer>
    </Container>
  );
};

export default Category;
