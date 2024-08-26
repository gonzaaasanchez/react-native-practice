import { View, FlatList, StyleSheet, ListRenderItem } from 'react-native';
import Meal from '../../models/meal';
import MealItem from './MealItem';

type MealListProps = {
  items: Meal[];
};

const MealList: React.FC<MealListProps> = ({ items }) => {
  const mealItem: ListRenderItem<Meal> = ({ item }) => {
    return <MealItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={mealItem}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
