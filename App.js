import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import { StatusBar } from "expo-status-bar";

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
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        {!isModalOpen && (
          <View style={styles.buttonContainer}>
            <Pressable onPress={() => onShowModalHandler()}>
              <Text style={styles.modalButton}>Add A New Task</Text>
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  taskContainer: {
    flex: 3,
    marginTop: 16,
  },
  taskListTitle: {
    textAlign: "center",
    fontSize: 24,
    color: "#b4a0e5"
  },
  buttonContainer: {
    borderRadius: 6,
    backgroundColor: "#B4A0E5",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  modalButton: {
    fontSize: 24,
    textAlign: "center",
    padding: 0,
    margin: 0,
  },
});
