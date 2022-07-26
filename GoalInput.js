import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, I18nManager, Modal, Image} from 'react-native';

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
        <Image source={require('./assets/images/goal.png')} style={styles.inputImage} />
        <TextInput
          style={styles.textInput}
          placeholder="Add Your Goal!"
          placeholderTextColor="#CCC"
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
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
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    width: '100%',
    marginRight: 8,
    padding: 8,
    color: '#fff',
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: '#5e0acc',
  },
  inputImage: {
    width: "100%",
    height: "30%",
    marginRight: 8,
    marginBottom: 20
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