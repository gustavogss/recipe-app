import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'


export function Ingredients({data}) {
    
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.quantity}>{data.amount}</Text>
    </View>
  )
}