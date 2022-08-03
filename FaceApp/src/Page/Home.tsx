import { View, Text, Button } from "react-native";

export const Home = ({ navigation }: any) => {
  return (
    <View>
      {/* onPress={() => navigation.navigate('camera')}を追加 */}
      <Button
        title="診断を始める"
        onPress={() => navigation.navigate("CameraPage")}
      />
    </View>
  );
};
