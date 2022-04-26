import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function Form({ action, initialText }) {
  const [text, setText] = useState(initialText);

  const onChange = (value) => {
    setText(value);
  };

  return (
    <View style={styles.form}>
      <TextInput
        value={text}
        style={styles.form__input}
        onChangeText={onChange}
      />

      <TouchableOpacity
        style={styles.form__button}
        onPress={() => action(text)}
      >
        <Text>Сохранить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 30,
  },
  form__input: {
    height: 150,
    borderWidth: 1,
    borderColor: "#787779",
    marginBottom: 30,
    marginLeft: 40,
    marginRight: 40,
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
    padding: 20,
    backgroundColor: "white",
  },
  form__button: {
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
  },
});
