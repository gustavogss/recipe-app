import { FlatList, SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { getFavorites } from '../../utils/CRUD'
import { useIsFocused } from '@react-navigation/native';
import { FoodList } from '../../components/FoodList'

export function Favorites() {
  const [recipes, setRecipes] = useState([]);
  const isFocus = useIsFocused();

  useEffect(()=>{
    let isActive = true;
    async function getRecipes(){
      const result = await getFavorites('@apprecipe');
      if(isActive){
        setRecipes(result);
      }
    }
    if(isActive){
      getRecipes();
    }

    return () =>{
      isActive = false;
    }
    
  }, [isFocus])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Receitas Favoritas</Text>
      {recipes.length === 0 && (
        <Text style={styles.recipeNoSave}>Você ainda não tem nenhuma receita salva</Text>
      )}
      <FlatList
      showsVerticalScrollIndicator={false}
      style={{marginTop: 14}}
      data={recipes}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <FoodList data={item} />}
      />
    </SafeAreaView>
  )
}