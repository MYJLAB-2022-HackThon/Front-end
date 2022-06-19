import { Button, View } from "react-native";

export const DecideAnimalButton = (props: { id: string; navigation: any }) => {
  const onDecideAnimal = () => {
    // post
    console.log(props.id);
    props.navigation.navigate("Output");
  };

  return (
    <View>
      <Button title="決定" onPress={onDecideAnimal} />
    </View>
  );
};
