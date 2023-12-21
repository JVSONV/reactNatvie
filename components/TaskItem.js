import { StyleSheet, View, Text } from "react-native";

export default function TaskItem(props) {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskItemText}>{props.text.task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  taskItemText: {
    color: "white",
  },
});
