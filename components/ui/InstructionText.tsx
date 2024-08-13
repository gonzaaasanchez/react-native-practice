import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  Dimensions,
} from 'react-native';
import Colors from '../../constants/Colors';

interface InstructionTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const InstructionText: React.FC<InstructionTextProps> = ({
  children,
  style,
}) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 18 : 24,
  },
});
