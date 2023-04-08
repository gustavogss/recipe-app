import { ScrollView, Image, Pressable, View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { Ingredients } from "../../components/Ingredients";
import { Instructions } from "../../components/Instructions";

export function Details() {
  const navigation = useNavigation("");
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => console.log("Favoritar")}>
          <Entypo name="heart" size={28} color="#D22222" />
        </Pressable>
      ),
    });
  }, [navigation, route.params.data]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 14 }}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Pressable>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={50} color="#FAFAFA" />
        </View>
        <Image
          source={{ uri: route.params?.data.cover }}
          style={styles.cover}
        />
      </Pressable>
      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}>{route.params?.data.name}</Text>
          <Text style={styles.ingredients}>
            ingredientes ({route.params?.data.total_ingredients})
          </Text>
        </View>
        <Pressable onPress={() => console.log("Compartilhar")}>
          <Feather name="share-2" size={24} color="#121212" />
        </Pressable>
      </View>
      {route.params?.data.ingredients.map((item) => (
        <Ingredients key={item.id} data={item} />
      ))}
      <View style={styles.instructionsTag}>
        <Text style={styles.instructionsCook}>Mode de preparo</Text>
        <Feather name="arrow-down" size={24} color="#fff" />
      </View>
      {route.params?.data.instructions.map((item, index) => (
        <Instructions key={item.id} data={item} index={index}/>
      ))}      
    </ScrollView>
  );
}
