import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft, Heart } from 'iconsax-react-native';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { getBreakfastToDatabase, getLunchFromDatabase } from '../../axios/Axios';

export default function MealInfo({ }) {
    
    const navigation = useNavigation();
    const route = useRoute()
    const {name,ingredients,instructions} = route.params
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <ArrowLeft size="32" color="#E53935" />
                </TouchableOpacity>
                
                <Text style={styles.MenuText}>{name}</Text>
                
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                <Text style={[styles.title,{marginTop:20}]}>Ingredients</Text>
                <Text style={styles.text}>{ingredients}</Text>
                <Text style={styles.title}>Instructions</Text>  
                <Text style={styles.text}>{instructions}</Text>
                <Text style={styles.endText}>Enjoy your meal! 😋</Text>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 15,
    },
    header: {
        width: "100%",
        marginBottom: 15,
        flexDirection:"row"
    },
    MenuText: {
        fontSize: 24,
        fontWeight: "700",
        color: "black",
        marginHorizontal:20,
    },
    backButton: {
        marginLeft: 2,
        alignItems: "flex-start",
        marginBottom: 5,
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
        lineHeight:26,
        fontWeight:"500",
        color: "#333",
    },
    scroll:{
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        overflow: 'hidden',
        padding:5,
    },
    title:{
        fontSize:22,
        fontWeight:"700",
        color:"#E53935",
    },
    endText:{
        fontSize:18,
        color:"black",
        marginVertical:5,
        fontWeight:"700",
        
    }
})