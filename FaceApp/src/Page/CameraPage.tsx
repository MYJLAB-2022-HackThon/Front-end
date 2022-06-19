import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useAnimalList } from "Store/animalListState";

export const CameraPage = ({ navigation }: any) => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState<Camera | null>(null);
  const { animalList, setAnimalList } = useAnimalList();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (camera) {
      const image = await camera.takePictureAsync();
      console.log(image);
      // APIに送信
      const formData = new FormData();
      // formData.append("file", image.uri);
      // formData.append("file", new File(["./sampleImage/test_dress.png"], "./sampleImage/test_dress.png"));

      formData.append("file", {
        uri: image.uri,
        type: "image/jpg",
        name: image.uri,
      });

      console.log(formData);

      fetch("http://133.2.101.153:55580/classify", {
        method: "POST",
        // headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      })
        .then((response) => response.json())
        .then((responseJson) => {
          let res = JSON.stringify(responseJson);
          setAnimalList(responseJson.animalList);
          console.log("Response: " + res);
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
      navigation.navigate("AnimalList");
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          setCamera(ref);
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // カメラ切り替え
            setType(
              type === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        >
          <Text style={styles.text}> Flip </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.text}> 撮影 </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  camera: {
    flex: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    textAlign: "center",
  },
});
