import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addTaskHandler(enteredTask) {
    setTaskList((prev) => [
      ...prev,
      { id: uuidv4().toString(), task: enteredTask },
    ]);
    onShowModalHandler();
  }

  function onDeleteHandler(id) {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  function onShowModalHandler() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <View style={styles.appContainer}>
      {!isModalOpen && (
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => onShowModalHandler()}>
            <Text style={styles.modalButton}>+</Text>
          </Pressable>
        </View>
      )}
      <TaskInput
        onAddTask={addTaskHandler}
        onClose={onShowModalHandler}
        isVisible={isModalOpen}
      />
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
  },
  taskListTitle: {
    textAlign: "center",
    fontSize: 24,
  },
  buttonContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#B4A0E5",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  modalButton: {
    fontSize: 32,
    textAlign: "center",
  },
});
