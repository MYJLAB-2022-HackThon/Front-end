import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { DecideAnimalButton } from "../Component/DecideAnimalButton";

type AnimalList = {
  id: string;
  animal: string;
  probability: number;
};

const demoList: AnimalList[] = [
  {
    id: "1",
    animal: "cat",
    probability: 0.34,
  },
  { id: "4", animal: "dog", probability: 0.58 },
  { id: "5", animal: "golira", probability: 0.23 },
];

export const AnimalList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getAnimalList = async () => {
    try {
      const response = await fetch("");
      const json = await response.json();
      setData(json.animalList);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnimalList();
  }, []);

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
      {isLoading ? (
        <ActivityIndicator />
      ) : (
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
                <DecideAnimalButton id={item.id} />
              </View>
            </View>
          )}
        />
      )}
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
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  listText: {
    fontSize: 30,
  },
});
