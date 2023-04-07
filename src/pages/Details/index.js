import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {Entypo} from '@expo/vector-icons';

export function Details() {
  const navigation = useNavigation("");
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da receita",
        headerRight: () =>(
          <Pressable onPress={()=>console.log('Favoritar')}>
          <Entypo 
          name="heart"
          size={28}
          color="#D22222"
          />
          </Pressable>
        )
    });
  }, [navigation, route.params.data]);

  return (
    <View style={styles.container}>
      <Text>{route.params?.data.name}</Text>      
    </View>
  );
}
