import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function GoalItem({item, onDelete}) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={() => onDelete(item.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: '#210644',
  },
  goalText: {
    color: '#fff',
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
  }
});