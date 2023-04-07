import { Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'

export function FoodList({data}) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image 
      source={{uri: data.cover}}
      style={styles.cover}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{data.name} </Text>
        <Text style={styles.description}>{data.total_ingredients} ingredientes | {data.time} min</Text>
      </View>
      <LinearGradient 
      style={styles.gradient}
      colors={['transparent', 'rgba(0,0,0, 0.7)','rgba(0,0,0, 0.95)']}
      />
    </TouchableOpacity>
  )
}