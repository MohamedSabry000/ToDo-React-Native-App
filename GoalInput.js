import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, I18nManager, Modal} from 'react-native';

export default function GoalInput({onAddGoal, visible, onCancel}) {
  const [goal, setGoal] = useState('');

  const addGoalHandler = () => {
    onAddGoal(goal);
    setGoal('');
    onCancel();
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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "column",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    width: '100%',
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    marginTop: 8,
    marginBottom: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
});