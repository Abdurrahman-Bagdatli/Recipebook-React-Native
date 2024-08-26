import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ALLMEALS, BREAKFAST, DINNER, HOME, LUNCH, MEALSINFO, SPLASH } from '../utils/Uri';
import SplashPage from '../pages/Splash/SplashPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/Home/HomePage';
import BreakfastPages from '../pages/Breakfast/BreakfastPages';
import LunchPages from '../pages/Lunch/LunchPages';
import DinnerPages from '../pages/Dinner/DinnerPages';
import MealInfo from '../pages/MealInfo/MealInfo';
import AllMeals from '../pages/AllMeals/AllMeals';

export default function StackNagivation() {
    const Stack = createNativeStackNavigator()
  return (
   <Stack.Navigator screenOptions={{
    headerShown:false,
   }}>
    <Stack.Screen name={SPLASH} component={SplashPage}></Stack.Screen>
    <Stack.Screen name={HOME} component={HomePage}></Stack.Screen>
    <Stack.Screen name={BREAKFAST} component={BreakfastPages}></Stack.Screen>
    <Stack.Screen name={LUNCH} component={LunchPages}></Stack.Screen>
    <Stack.Screen name={DINNER} component={DinnerPages}></Stack.Screen>
    <Stack.Screen name={MEALSINFO} component={MealInfo}></Stack.Screen>
    <Stack.Screen name={ALLMEALS} component={AllMeals}></Stack.Screen>
   </Stack.Navigator>
   
   
  )
}

const styles = StyleSheet.create({})