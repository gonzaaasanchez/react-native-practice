import { View, FlatList, ListRenderItem } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';

type CategoriesScreenProps = {};

const categoryItem: ListRenderItem<Category> = ({ item }) => {
  return (
    <CategoryGridTile
      title={item.title}
      color={item.color}
    />
  );
};

const CategoriesScreen: React.FC<CategoriesScreenProps> = (props) => {
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
