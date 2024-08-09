import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function InstructionText(props: { children: React.ReactNode }) {
  return <Text style={styles.instructionText}>{props.children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
