import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";

export const CameraPage = () => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState<Camera | null>(null);

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
