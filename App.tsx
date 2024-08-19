import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoryScreen';
import MealDetailScreen from './screens/MealDetailScreen';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealDetailScreen: { categoryId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="MealDetailScreen"
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
