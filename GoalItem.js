import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function GoalItem({text}) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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