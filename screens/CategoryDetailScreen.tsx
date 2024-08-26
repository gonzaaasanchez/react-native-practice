import { useLayoutEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { RootStackParamList } from '../App';
import MealList from '../components/MealList/MealList';

type CategoryDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'CategoryDetailScreen'>;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'CategoryDetailScreen'
  >;
};

const CategoryDetailScreen: React.FC<CategoryDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealList items={displayedMeals} />;
};

export default CategoryDetailScreen;
