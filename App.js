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

  function onDeleteHandler(id) {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <TaskInput onAddTask={addTaskHandler} />
      <View style={styles.taskContainer}>
        <Text style={styles.taskListTitle} add={addTaskHandler}>
          My Tasks
        </Text>
        <FlatList
          data={taskList}
          renderItem={(taskData) => {
            return (
              <TaskItem
                text={taskData.item}
                onPressTask={onDeleteHandler}
                id={taskData.item.id}
              />
            );
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
  taskContainer: {
    flex: 3,
    marginTop: 16,
    borderColor: "red",
    borderWidth: 2,
  },
  taskListTitle: {
    textAlign: "center",
    fontSize: 24,
  },
});
