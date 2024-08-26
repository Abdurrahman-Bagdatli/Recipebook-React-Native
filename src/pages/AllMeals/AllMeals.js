import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView, TextInput, ActivityIndicator } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getAllMealsFromDatabase} from '../../axios/Axios';
import { MEALSINFO } from '../../utils/Uri';
import LottieView from 'lottie-react-native';
import { ArrowLeft } from 'iconsax-react-native';

export default function AllMeals() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true)
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearch(text)
  }
  const fetchData = async () => {
    try {
      const response = await getAllMealsFromDatabase();
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

  const renderListEmptyComponent = () => (
    <View style={styles.isEmptContainer}>
      <LottieView source={require('../../assets/animations/lt3HJrJVAL.json')} autoPlay loop={false} style={styles.animation} speed={2} />
      <Text style={styles.notFoundText}>Not Found</Text>
    </View>
  )

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
        <TextInput
          placeholder='Search'
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.SearchBar}
          placeholderTextColor={"#ccc"}
          onChangeText={(text) => handleSearch(text)}
        ></TextInput>
      </View>
      <FlatList
        data={data.filter(meal => meal.name.toLowerCase().includes(search.toLowerCase()))}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => renderListEmptyComponent()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.ıtemContainer} onPress={() => navigation.navigate(MEALSINFO, { name: item.name, ingredients: item.ingredients, instructions: item.instructions })} >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} ></Image>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.summary}>{item.summary}</Text>
            </View>
          
          </TouchableOpacity>
        )
        }
      >
      </FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SearchBar: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flex:1,
    marginLeft:10,
    color:"black"
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
  },
  isEmptContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    marginVertical: 5,
    marginBottom:15,
    flexDirection:"row",
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
    marginLeft: 2,
    alignItems: "flex-start",
    marginBottom: 5,
    justifyContent:"center",
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
  animation: {
    width: 250,
    height: 250,
  },
  notFoundText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  }
})