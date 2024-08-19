import { View, FlatList, StyleSheet, ListRenderItem } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';
import { RootStackParamList } from '../App';

type MealDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'MealDetailScreen'>;
};

const MealDetailScreen: React.FC<MealDetailScreenProps> = ({ route }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });

  const mealItem: ListRenderItem<Meal> = ({ item }) => {
    return <MealItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={mealItem}
      />
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
