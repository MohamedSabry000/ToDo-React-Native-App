import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, I18nManager, Modal} from 'react-native';

export default function GoalInput({onAddGoal, visible}) {
  const [goal, setGoal] = useState('');

  const addGoalHandler = () => {
    onAddGoal(goal);
    setGoal('');
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add Your Goal!"
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});