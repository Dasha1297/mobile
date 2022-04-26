import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import Block from "../components/Block";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

export default function Notes() {
  const [listOfItems, setListOfitems] = useState([]);
  const [view, setView] = useState(false);
  const [updateText, setUpdateText] = useState("");
  const [updateId, setUpdateId] = useState();

  useEffect(async () => {
    const response = db.collection("notes");
    const data = await response.get();
    const items = [];
    data.docs.forEach((item) => {
      items.push({ title: item.data().title, id: item.id });
    });
    setListOfitems(items);
  }, []);

  async function add(text) {
    try {
      const docRef = await addDoc(collection(db, "notes"), {
        title: text,
      });
      addItem(text, docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function deleteItem(id) {
    await deleteDoc(doc(db, "notes", id));
    setListOfitems(() => {
      return listOfItems.filter((item) => item.id !== id);
    });
  }

  async function update(text) {
    const id = updateId;
    await setDoc(doc(db, "notes", id), { title: text });

    setListOfitems(() => {
      return listOfItems.map((item) =>
        item.id === id ? { id: item.id, title: text } : item
      );
    });
    setUpdateText("");
  }

  const addItem = (text, id) => {
    setListOfitems((item) => {
      return [{ title: text, id: id }, ...item];
    });
    setUpdateText("");
  };

  return (
    <ScrollView style={{ marginTop: 50, backgroundColor: "white" }}>
      <Modal visible={view}>
        <IconFontAwesome
          name={"close"}
          onPress={() => setView(false)}
          size={20}
          style={{ margin: 40, marginLeft: 310 }}
        />
        <Form initialText={updateText} action={update}></Form>
      </Modal>
      <Form action={add} initialText={""} />
      {listOfItems.map((item) => (
        <View style={styles.block}>
          <Block item={item} key={item.id} />

          <TouchableOpacity
            onPress={() => deleteItem(item.id)}
            style={styles.button}
          >
            <Text>Удалить</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setView(true);
              setUpdateText(item.title);
              setUpdateId(item.id);
            }}
          >
            <Text>Редактировать</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 180,
    height: 50,
    borderRadius: 7,
    backgroundColor: "#ADD8E6",
    marginLeft: 40,
    marginRight: 40,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: 10,
    marginTop: 10,
  },
  block: {
    backgroundColor: "#DCDCDC",
    marginBottom: 15,
    paddingTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
});
