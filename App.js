import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, I18nManager, ScrollView } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  }

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, goal]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add Your Goal!"
          value={goal}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goals.map((goal, index) =>
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          )}
          <Text>List of your Goals...</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  goalsContainer: {
    flex: 5,
    flexDirection: "column",
    // justifyContent: 'space-between',
    paddingBottom: 20,
  },
  goalItem: {
    padding: 8,
    margin: 8,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
