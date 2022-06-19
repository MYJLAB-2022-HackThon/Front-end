import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { useSelectedAnimal } from "../Store/selectAnimalState";

// const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";

export const Output = () => {
  const [img, setImg] = useState<string>("");
  const { selectedAnimal } = useSelectedAnimal();

  console.log(selectedAnimal);

  const fetchImage = async () => {
    await fetch(`http://localhost:80/funny_img/${selectedAnimal}`, {
      headers: {
        accept: "application/json",
        Cookie: "file_name=test.png; pass=3wkOFq0S&eX7",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        let res = JSON.stringify(responseJson);
        console.log("Response: " + res);
        return res;
      })
      .catch((error) => {
        console.error(error);
      });
    //const imageBlob = await res.blob();
    //const imageObjectURL = URL.createObjectURL(imageBlob);
    //setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <View>
      <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
    </View>
  );
};
