import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

export default function TaskInput(props) {
  const [enteredTask, setEnteredTask] = useState("");

  function taskInputHandler(enteredText) {
    setEnteredTask(enteredText);
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.userInput}
          placeholder="New Task"
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <View>
          <Button
            title="Add Task"
            onPress={() => {
              props.onAddTask(enteredTask);
              setEnteredTask("");
            }}
          />
          <Button title="Cancel" onPress={props.onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingVertical: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userInput: {
    borderWidth: 1,
    borderColor: "#cccc",
    width: "70%",
    padding: 8,
  },
});
