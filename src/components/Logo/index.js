import { Text } from 'react-native'
import styles from './styles'
import {View} from 'moti';

export function Logo() {
  return (
    <View 
    style={styles.logoArea}
    from={{
      opacity: 0,
      translateX: -50,
    }}
    animated={{
      opacity:1,
      translateX: 0,
    }}
    transition={{      
      type:'spring',
      duration: 850
    }}
    >
        <Text style={styles.logoTitle}>Recipe App</Text>        
    </View>
  )
}