import { View, Text } from 'react-native'
import styles from './styles'

export function Logo() {
  return (
    <View style={styles.logoArea}>
        <Text style={styles.logoTitle}>Recipe App</Text>        
    </View>
  )
}