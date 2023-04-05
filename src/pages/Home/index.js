import { SafeAreaView, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Logo } from '../../components/Logo'
import {Ionicons} from '@expo/vector-icons'

export function Home() {
    const [inputValue, setInputValue] = useState("")

    function handleSearch() {
        console.log(inputValue);
    }

  return (    
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title}>que combine com você</Text>
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
    </SafeAreaView>
  )
}