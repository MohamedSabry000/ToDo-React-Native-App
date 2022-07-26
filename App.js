import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setGoals(currentGoals => [...currentGoals, {label: goal, id: Math.random().toString()}]);
  }

  const removeGoalHandler = (goalId) => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {
          !openModal && <Button
            title="Add Goal"
            color={'#b180f0'}
            onPress={() => setOpenModal(true)}
          />
        }
        <GoalInput onAddGoal={addGoalHandler} visible={openModal} onCancel={() => setOpenModal(false)} />
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
    </>
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
