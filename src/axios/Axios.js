import axios from "axios";
import { BaseButton } from "react-native-gesture-handler";

const BASE_URL = "http://192.168.1.100:5000";

export const getBreakfastToDatabase = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/breakfast`);
        return response.data
    } catch (error) {
        console.log("Error getting breakfast from database:", error);
        throw error; 
    }
}
export const getLunchToDatabase = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/lunch`)
        return response.data;
    } catch (error) {
        console.error("error getting Lunch from database:",error);
        throw error;
    }
}
export const getDinnerFromDatabase = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/dinner`)
        return response.data;
    } catch (error) {
        console.error("error getting Dinner from database:",error);
        throw error;
    }
}
export const getAllMealsFromDatabase = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/allmeals`)
        return response.data
    } catch (error) {
        console.error("error getting AllMeals from database:",error)
        throw error;
    }
}