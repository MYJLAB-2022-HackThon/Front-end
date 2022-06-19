import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
// const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";

export const Output = () => {
  const [img, setImg] = useState<string>("");
  /*
  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);*/

  return (
    <View>
      <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
    </View>
  );
};
