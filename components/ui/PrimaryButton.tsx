import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

function PrimaryButton(props: {
  children: React.ReactNode;
  onPressed: () => void;
}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnercontainer, styles.pressed]
            : styles.buttonInnercontainer
        }
        onPress={props.onPressed}
        android_ripple={{ color: Colors.primary600 }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnercontainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: deviceWidth < 380 ? 4 : 8,
    paddingHorizontal: deviceWidth < 380 ? 8 : 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
