import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';
import Colors from '../constants/Colors';

function GameCreen() {
  return (
    <View style={styles.screen}>
      <Title> Oponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View></View>
    </View>
  );
}
export default GameCreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    padding: 12,
    borderColor: Colors.accent500,
    borderWidth: 2,
  },
});
