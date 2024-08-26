import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Heart } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { ALLMEALS, BREAKFAST, DINNER, LUNCH } from '../../utils/Uri';
export default function HomePage() {
    const navigation = useNavigation();

    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.Title}>
                    Hi!
                </Text>
                <Text style={styles.Subtitle}>
                    How about brightening your day with some delicious recipes?
                </Text>
            </View>
            <View style={styles.SubContainer}>
                <TouchableOpacity style={styles.allFood} onPress={() => navigation.navigate(ALLMEALS)}>
                    <Text style={styles.text}>All meals</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.Menus}>Meal Hours</Text>
            <View style={styles.mealContainer}>
                <View style={styles.mealItem}>
                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate(BREAKFAST)}>
                        <Image source={require("../../assets/images/Breakfast.jpeg")} style={styles.mealImage}>
                        </Image>
                        <View style={styles.textContainer}>
                            <Text style={styles.MenuText}>Breakfast</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.mealItem}>
                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate(LUNCH)} >
                        <Image source={require("../../assets/images/sundaylunch.jpeg")} style={styles.mealImage}>
                        </Image>
                        <View style={styles.textContainer}>
                            <Text style={styles.MenuText}>Lunch</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.mealItem}>
                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate(DINNER)}>
                        <Image source={require("../../assets/images/ThanksgivingDinnerIdeas-MunchkinTime.jpeg")} style={styles.mealImage}>
                        </Image>
                        <View style={styles.textContainer}>
                            <Text style={styles.MenuText}>Dinner</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "white"
    },
    headerContainer: {
        marginBottom: 30,
    },
    SubContainer: {
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    mealContainer: {
        flex: 1,
    },
    Title: {
        color: "black",
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 7,
    },
    Subtitle: {
        color: "black",
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 27,
    },
    text: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "600",
    },
    allFood: {
        width: "90%",
        height: 50,
        flexDirection: "row",
        backgroundColor: "#E53935",
        padding: 12,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    Menus: {
        color: "#333",
        fontSize: 22,
        fontWeight: "600",
        marginVertical: 15,
        textAlign: "center",
    },
    mealItem: {
        height: 170,
        marginBottom: 15,
        borderRadius: 10,
        overflow: "hidden",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    mealImage: {
        height: "100%",
        flex: 1,
        resizeMode: "cover",
    },
    textContainer: {
        width: "30%",
        height: "20%",
        backgroundColor: "rgba(240, 240, 240, 0.6)",
        position: "absolute",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    MenuText: {
        color: "black",
        fontSize: 20,
        fontWeight: "600",
    },
    Button: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    }

})