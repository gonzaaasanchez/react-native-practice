import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Meal from '../models/meal';

type MealDetailsProps = {
  item: Meal;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const MealDetails: React.FC<MealDetailsProps> = ({
  item,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{item.duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {item.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {item.affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
