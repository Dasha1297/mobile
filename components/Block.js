import { StyleSheet, View } from "react-native";
import { TouchableOpacity, Text, Modal } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

export default function Block({ item }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFFFFF",
    height: 150,

    borderWidth: 1,
    borderColor: "#787779",

    marginLeft: 40,
    marginRight: 40,
    flex: 1,
    flexDirection: "row",
  },
  text: {
    fontWeight: "800",
    fontSize: 18,
    lineHeight: 16,
    padding: 20,

    flex: 2,
  },
  buttons: {
    marginRight: 23,
  },
});
