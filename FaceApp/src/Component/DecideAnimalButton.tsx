import { Button, View } from "react-native";

export const DecideAnimalButton = (props: { id: string }) => {
  const onDecideAnimal = () => {
    // post
    console.log(props.id);
  };

  return (
    <View>
      <Button title="決定" onPress={onDecideAnimal} />
    </View>
  );
};
