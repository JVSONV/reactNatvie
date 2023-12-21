import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addTaskHandler(enteredTask) {
    setTaskList((prev) => [
      ...prev,
      { id: uuidv4().toString(), task: enteredTask },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <TaskInput add={addTaskHandler} />
      <View style={styles.taskContainer}>
        <Text style={styles.taskListTitle} add={addTaskHandler}>
          My Tasks
        </Text>
        <FlatList
          data={taskList}
          renderItem={(taskData) => {
            return <TaskItem text={taskData.item} />;
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
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
  taskContainer: {
    flex: 5,
  },
  taskContainer: {
    flex: 3,
    marginTop: 16,
  },
  taskListTitle: {
    textAlign: "center",
  },
});
