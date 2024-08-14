import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

type MealDetailScreenProps = {};

const MealDetailScreen: React.FC<MealDetailScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Meals overview screen</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
