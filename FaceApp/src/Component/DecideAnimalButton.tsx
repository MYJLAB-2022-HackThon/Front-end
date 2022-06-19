import { Button, View } from "react-native";

export const DecideAnimalButton = (props: {
  name: string;
  navigation: any;
}) => {
  const onDecideAnimal = () => {
    // post
    console.log(props.name);
    props.navigation.navigate("Output");
  };

  return (
    <View>
      <Button title={`${props.name}にする`} onPress={onDecideAnimal} />
    </View>
  );
};
