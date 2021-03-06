import { Button, View, StyleSheet } from "react-native";
import { useSelectedAnimal } from "../Store/selectAnimalState";

export const DecideAnimalButton = (props: {
  name: string;
  navigation: any;
}) => {
  const { setSelectedAnimal } = useSelectedAnimal();
  const onDecideAnimal = () => {
    // post
    console.log(props.name);
    setSelectedAnimal(props.name);
    props.navigation.navigate("Output");
  };

  return (
    <View>
      <Button title={`${props.name}`} onPress={onDecideAnimal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
