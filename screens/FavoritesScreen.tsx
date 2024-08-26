import MealList from '../components/MealList/MealList';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
// import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { RootState } from '../store/redux/store';

const FavoritesScreen = () => {
  // const favoritesMealsContext = useContext(FavoritesContext);
  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoritesMealsContext.ids.includes(meal.id)
  // );
  const favoriteMealIds = useSelector(
    (state: RootState) => state.favoriteMeals.ids
  );
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals added.</Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
};
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
