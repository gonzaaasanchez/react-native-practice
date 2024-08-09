import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function NumberContainer(props: { children: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
  },
});
