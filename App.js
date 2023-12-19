import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [enteredTask, setEnteredTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function taskInputHandler(enteredText) {
    setEnteredTask(enteredText);
  }

  function addTaskHandler() {
    setTaskList((prev) => [...prev, enteredTask]);
    setEnteredTask("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.taskContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="New Task"
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <Button title="Add Task" onPress={addTaskHandler} />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>My Tasks</Text>
        <View>
          {taskList.map((task) => {
            return <Text key={uuidv4()}>{task}</Text>;
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  taskContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccc",
    width: "70%",
    padding: 8,
  },
  listContainer: {
    flex: 3,
    marginTop: 16,
  },
  listTitle: {
    textAlign: "center",
  },
});
