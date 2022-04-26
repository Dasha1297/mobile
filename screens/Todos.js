import { StyleSheet } from "react-native";
import { useState } from "react";
import react from "react";
import { ScrollView } from "react-native";
import Block from "../components/Block";

export default function Lists({ navigation }) {
  const [items, setItems] = useState([]);

  react.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((result) => setItems(result.slice(0, 5)));
  }, []);

  const listOfItems = items.map((value) => (
    <Block item={value} key={value.id} note={false} />
  ));
  return (
    <ScrollView style={{ marginTop: 30, backgroundColor: "white" }}>
      {listOfItems}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
