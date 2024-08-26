import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNagivation from './src/routers/StackNavigation';
export default function App() {
    return (
    <NavigationContainer>
          <StackNagivation></StackNagivation>
    </NavigationContainer>
    
    
  )
}

const styles = StyleSheet.create({})