import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

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

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={demoList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.animal}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
