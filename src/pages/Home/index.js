import { 
  SafeAreaView, 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity,
  FlatList
 } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Logo } from '../../components/Logo'
import {Ionicons} from '@expo/vector-icons'
import api from '../../services/api'
import { FoodList } from '../../components/FoodList'

export function Home() {
    const [inputValue, setInputValue] = useState("")
    const [foods, setFoods]= useState([])

    useEffect(() => {
      async function fetchApi(){
        const res = await api.get("/foods")
        setFoods(res.data)
      }
      fetchApi()
    }, [])
    

    function handleSearch() {
        console.log(inputValue);
    }

  return (    
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title}>de queira preparar</Text>
      <View style={styles.form}>
        <TextInput
        placeholder='Digite o nome da comida ...'
        style={styles.input}
        value={inputValue}
        onChangeText={(event) => setInputValue(event)}
        />
        <TouchableOpacity
        onPress={handleSearch}
        >
            <Ionicons name='search' size={28} color='#ccc'/>
        </TouchableOpacity>
      </View>
      <FlatList
      data={foods}
      keyExtractor={(item)=> String(item.id)}
      renderItem={({item})=> <FoodList data={item} />}
      showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}