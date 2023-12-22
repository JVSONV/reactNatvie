import { StyleSheet, View, Text, Pressable } from "react-native";

export default function TaskItem(props) {
  return (
    <View style={styles.taskItem}>
      <Pressable
        android_ripple={{ color: "#B4A0E5" }}
        onPress={props.onPressTask.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.taskItemText}>{props.text.task}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    borderRadius: 6,
    backgroundColor: "#B4A0E5",
  },
  taskItemText: {
    padding: 8,
    color: "white",
  },
});
