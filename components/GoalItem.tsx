import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function GoalItem(
  this: any,
  props: {
    text: string;
    id: string;
    onDeleteGoal: (id: string) => void;
  }
) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteGoal.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});
