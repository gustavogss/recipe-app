import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getFavorites(key) {
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || [];
}

export async function saveFavorite(key, newItem) {
 let myFavorites = await getFavorites(key)
 let hasItem = myFavorites.some(item => item.id === newItem.id)

 if(hasItem) {
    return;
 }
 myFavorites.push(newItem)
 await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
}

export async function removeItem(id) {
 let recipes = await getFavorites('@apprecipe')
 let myFavorites = recipes.filter(item => {
    return (item.id !== id)
 })
await AsyncStorage.setItem('@apprecipe', JSON.stringify(myFavorites))
return myFavorites;
}

export async function isFavorite(recipe) {
    let myRecipes = await getFavorites('@apprecipe')
    const favorite = myRecipes.find(item => item.id === recipe.id)
    if(favorite){
        return true;
    }
    return false;   
}