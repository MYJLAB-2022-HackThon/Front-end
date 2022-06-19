import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { DecideAnimalButton } from "../Component/DecideAnimalButton";
import { useAnimalList } from "../Store/animalListState";

type AnimalList = {
  id: string;
  animal: string;
  probability: number;
};

/*const demoList: AnimalList[] = [
  {
    id: "1",
    animal: "cat",
    probability: 0.34,
  },
  { id: "4", animal: "dog", probability: 0.58 },
  { id: "5", animal: "golira", probability: 0.23 },
];*/

export const AnimalList = ({ navigation }: any) => {
  const { animalList } = useAnimalList();
  console.log(animalList);

  const listOutput = Object.keys(animalList).map((key, probability) => {
    console.log(animalList[key]);

    const i = Math.round(animalList[key] * 100);

    return (
      <View style={styles.list} key={key}>
        <View style={{ width: "20%" }}>
          <Text style={styles.listText}>{key}</Text>
        </View>
        <View style={styles.bar}>
          <View
            style={{ width: `${i}%`, backgroundColor: "pink", flex: 1 }}
          ></View>
          <View style={{ width: `${100 - i}%`, justifyContent: "center" }}>
            <Text style={styles.listText}>{i}%</Text>
          </View>
        </View>
        <View style={{ width: "20%" }}>
          <DecideAnimalButton name={key} navigation={navigation} />
        </View>
      </View>
    );
  });

  /*
  const fixPercentage = (x: number) => {
    const i = Math.round(x * 100);
    return (
      <View style={{ width: `${i}%`, backgroundColor: "pink" }}>
        <Text style={styles.listText}>{i}%</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <FlatList
        data={demoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <View style={{ width: "20%" }}>
              <Text style={styles.listText}>{item.animal}</Text>
            </View>
            <View style={{ width: "60%", backgroundColor: "beige" }}>
              {fixPercentage(item.probability)}
            </View>
            <View style={{ width: "20%" }}>
              <DecideAnimalButton id={item.id} navigation={navigation} />
            </View>
          </View>
        )}
      />
    </View>
  );*/

  return <View style={{ flex: 1, padding: 24 }}>{listOutput}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  list: {
    flexDirection: "row",
    width: "100%",
  },
  listText: {
    fontSize: 18,
  },
  bar: {
    flexDirection: "row",
    width: "60%",
    backgroundColor: "beige",
    justifyContent: "center",
  },
});
