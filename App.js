import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setGoals(currentGoals => [...currentGoals, {label: goal, id: Math.random().toString()}]);
  }

  const removeGoalHandler = (goalId) => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({item}) =>
            <GoalItem item={item} onDelete={removeGoalHandler} />
          }
          alwaysBounceHorizontal={false}
          keyExtractor={(item, index) => item.id}
        >
        </FlatList>
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
  goalsContainer: {
    flex: 5,
    flexDirection: "column",
    paddingBottom: 20,
  }
});
