import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function TaskInput(props) {
  const [enteredTask, setEnteredTask] = useState("");

  function taskInputHandler(enteredText) {
    setEnteredTask(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.userInput}
        placeholder="New Task"
        onChangeText={taskInputHandler}
        value={enteredTask}
      />
      <Button
        title="Add Task"
        onPress={() => {
          props.add(enteredTask);
          setEnteredTask("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  userInput: {
    borderWidth: 1,
    borderColor: "#cccc",
    width: "70%",
    padding: 8,
  },
});
