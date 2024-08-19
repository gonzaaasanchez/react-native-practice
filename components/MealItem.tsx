import { View, Text } from 'react-native';
import Meal from '../models/meal';

type MealItemProps = {
  item: Meal;
};

const MealItem: React.FC<MealItemProps> = ({ item }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default MealItem;
