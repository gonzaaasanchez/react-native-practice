import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen(props: {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed{' '}
          <Text style={styles.hightlightText}>{props.roundsNumber}</Text> rounds
          to guess the number{' '}
          <Text style={styles.hightlightText}>{props.userNumber}</Text>
        </Text>
        <PrimaryButton onPressed={props.onStartNewGame}>
          Start New Game
        </PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  hightlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
