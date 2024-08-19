import { View, FlatList, ListRenderItem } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { NavigationProp } from '@react-navigation/native';

type CategoriesScreenProps = {
  navigation: NavigationProp<any>;
};

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ navigation }) => {
  const categoryItem: ListRenderItem<Category> = ({ item }) => {
    function onPressedHandler() {
      navigation.navigate('MealDetailScreen', {
        categoryId: item.id,
      });
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPressed={onPressedHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={categoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
