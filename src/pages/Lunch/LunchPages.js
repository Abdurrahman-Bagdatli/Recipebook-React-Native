import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'iconsax-react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getLunchToDatabase } from '../../axios/Axios';
import { MEALSINFO } from '../../utils/Uri';
export default function LunchPages() {

  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [loading, setloading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await getLunchToDatabase()
      setData(response);
    } catch (error) {
      console.log("error:", error);
    }
    finally {
      setloading(false)
    }
  };
  useFocusEffect(
    useCallback(() => {
      fetchData()
    }, []));


    
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={50} color={"#E53935"}></ActivityIndicator>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft size="32" color="#E53935" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.MenuInfo}>
          <Text style={styles.MenuText}>Lunch:</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.ıtemContainer}
            onPress={() => navigation.navigate(MEALSINFO, { name: item.name, ingredients: item.ingredients, instructions: item.instructions })}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.summary}>{item.summary}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
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
  },
  ıtemContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    height: 160,
    width: "100%",
    borderRadius: 15,
    borderColor: "#E8D8C3",
    backgroundColor: "#FFFFFF",
    elevation: 3,
    marginBottom: 15,
  },
  imageContainer: {
    justifyContent: "center",
    flex: 0.4,
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
    flex: 0.6,
    padding: 10,
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D0E1E8",
  },
  title: {
    color: "#4A3C2C",
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 5,
  },
  summary: {
    fontSize: 16,
    color: "#6B4423",
  },
  backButton: {
    marginLeft: 10,
    alignItems: "flex-start",
    marginBottom: 5,
  },
  MenuInfo: {
    marginLeft: 10,
    alignItems: "flex-start",
  },
  MenuText: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
  },
  favorite: {
    position: "absolute",
    right: 10,
    bottom: 10,
  }
});
