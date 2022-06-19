import React, { useEffect, useState } from "react";
import { View, Image, Button } from "react-native";
// const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";

export const Output = ({ navigation }: any) => {
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
      <Button
        title="診断を終了する"
        onPress={() => navigation.navigate("home")}
      />
    </View>
  );
};
