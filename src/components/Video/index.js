import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import {Feather} from '@expo/vector-icons'
import WebView from 'react-native-webview'

export function Video({handleClose, videoUrl}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleClose}>
        <Feather name='arrow-left' size={24} color='#fff'/>
        <Text style={styles.backText}>Voltar</Text>
    </TouchableOpacity>
    <WebView 
    style={styles.webview}
    source={{uri: videoUrl}}
    />
    </SafeAreaView>
  )
}