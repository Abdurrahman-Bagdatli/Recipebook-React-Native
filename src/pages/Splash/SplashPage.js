import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { HOME } from '../../utils/Uri';
export default function SplashPage() {
    const navigation = useNavigation();
    const animationfinish = () => {
      navigation.navigate(HOME)
    }
  return (
    <View style={styles.container}>
        <LottieView source={require('../../assets/animations/TmguOjz20S.json')} autoPlay loop={false} style={styles.animation} onAnimationFinish={animationfinish} speed={2}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    animation:{
        width:250,
        height:250,
    }
})