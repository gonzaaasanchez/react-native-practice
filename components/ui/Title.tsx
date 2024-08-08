import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/Colors';

function Title(props: { children: string }) {
  return <Text style={styles.title}> {props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 12,
    borderColor: 'white',
    borderWidth: 2,
  },
});
