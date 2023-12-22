import { StyleSheet, View, Text, Pressable } from "react-native";

export default function TaskItem(props) {
  return (
    <Pressable onPress={props.onPressTask.bind(this, props.id)} >
      <View style={styles.taskItem}>
        <Text style={styles.taskItemText}>{props.text.task}</Text>
      </View>
    </Pressable>
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
