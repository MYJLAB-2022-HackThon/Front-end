import React, { useEffect, useState } from "react";

import { View, Image, Text, Button } from "react-native";
import { useSelectedAnimal } from "../Store/selectAnimalState";
import { useCookie } from "../Store/cookieState";

// const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";

export const Output = ({ navigation }: any) => {
  const [img, setImg] = useState<string>("");
  const { cookie } = useCookie();
  const { selectedAnimal } = useSelectedAnimal();

  console.log(selectedAnimal);

  const fetchImage = async () => {
    const testUri = "http://0.0.0.0:80/funny_img/";
    const uri = "http://133.2.101.153:55580/funny_img/";

    await fetch(uri + selectedAnimal, {
      headers: {
        accept: "application/json",
        Cookie: cookie,
      },
    })
      .then((response) => {
        console.log(response);
        return response.blob();
      })
      .then((imageBlob) => {
        console.log(imageBlob);
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log(imageObjectURL);
        setImg(imageObjectURL);
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
      {img ? (
        <Image source={{ uri: img }} style={{ width: 112, height: 112 }} />
      ) : (
        <Text>生成中</Text>
      )}
      <Button
        title="診断を終了する"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};
