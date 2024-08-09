import { View, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props: { userNumber: number; onGameOver: () => void }) {
  const initialGuess = generateRandomBetween(
    1,
    100,
    props.userNumber
  );
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver();
    }
  }, [currentGuess, props.userNumber, props.onGameOver]);

  function nextGuessHandler(direction: string) {
    if (
      (direction === 'lower' && currentGuess < props.userNumber) ||
      (direction === 'greater' && currentGuess > props.userNumber)
    ) {
      Alert.alert('Lier!', 'This is wrong..', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title> Oponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View>
          <PrimaryButton onPressed={() => nextGuessHandler('lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPressed={() => nextGuessHandler('greater')}>
            +
          </PrimaryButton>
        </View>
      </Card>
      <View></View>
    </View>
  );
}
export default GameScreen;

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
