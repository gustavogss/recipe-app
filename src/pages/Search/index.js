import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useRoute } from '@react-navigation/native'
import api from '../../services/api'
import { FoodList } from '../../components/FoodList'

export function Search() {
  const route = useRoute();
  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    async function getApiRecipe(){
      const response = await api.get(`/foods?name_like=${route.params?.name}`)
      setRecipes(response.data)
    }
    getApiRecipe();
  }, [route.params?.name])
  return (
    <View style={styles.container}>      
      <FlatList 
      showsVerticalScrollIndicator={false}      
      data={recipes}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <FoodList data={item} />}
      ListEmptyComponent={()=>         
      <Text style={styles.textError}>Receita não existe</Text>}
      />
    </View>
  )
}