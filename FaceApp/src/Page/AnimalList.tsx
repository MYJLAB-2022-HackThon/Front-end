import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { DecideAnimalButton } from "../Component/DecideAnimalButton";
import { useAnimalList } from "../Store/animalListState";
import { PieChart } from "react-native-chart-kit";

type AnimalList = {
  id: string;
  animal: string;
  probability: number;
};
type Chart = {
  name: string;
  population: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
};

const demoList = {
  Cat: 0.01,
  Dog: 0.21,
  Fox: 0.09,
  Gorilla: 0.11,
  Horse: 0.01,
  Monkey: 0.24,
  Rabbit: 0.01,
  Wolf: 0.32,
};

const colorList = [
  "dodgerblue",
  "greenyellow",
  "coral",
  "aquamarine",
  "pink",
  "cyan",
  "dimgray",
  "plum",
];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const AnimalList = ({ navigation }: any) => {
  const { animalList } = useAnimalList();
  const chartData: Chart[] = [];
  console.log(animalList);

  const listOutput = Object.keys(demoList).map((key, probability) => {
    console.log(demoList[key]);

    const i = Math.round(demoList[key] * 100);
    const x: string = key;
    chartData.push({
      name: key,
      population: i,
      color: colorList[probability],
      legendFontColor: "#7F7F7F",
      legendFontSize: 10,
    });

    return (
      <View style={styles.list} key={key}>
        <View style={{ width: "30%" }}>
          <DecideAnimalButton name={key} navigation={navigation} />
        </View>
        <View style={styles.bar}>
          <View
            style={{
              width: `${i}%`,
              backgroundColor: colorList[probability],
              flex: 1,
            }}
          ></View>
          <View style={{ width: `${100 - i}%`, justifyContent: "center" }}>
            <Text style={styles.listText}>{i}%</Text>
          </View>
        </View>
      </View>
    );
  });

  const chartConfig = {
    backgroundGradientFrom: "black",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "black",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => "black",
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
      }}
    >
      {listOutput}
      <View style={{ width: "100%", alignItems: "center" }}>
        <PieChart
          data={chartData}
          width={windowWidth * 0.99}
          height={windowHeight / 4}
          chartConfig={chartConfig}
          accessor="population"
          bgColor="transparent"
          // absolute
        />
      </View>
    </View>
  );
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
    fontSize: 10,
  },
  bar: {
    flexDirection: "row",
    width: "70%",
    backgroundColor: "beige",
    justifyContent: "center",
  },
});
