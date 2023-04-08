import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export function Instructions({data, index}) {
  return (
    <View style={styles.container}>
    <Text style={styles.id}>{index+1} - </Text>
    <Text style={styles.text}>{data.text}</Text>
  </View>
  )
}