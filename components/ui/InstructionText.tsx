import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  Dimensions,
} from 'react-native';
import Colors from '../../constants/Colors';

function InstructionText(props: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
}

export default InstructionText;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 18 : 24,
  },
});
