import { ScrollView, Image, Pressable, View, Text, Modal, Share } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { Ingredients } from "../../components/Ingredients";
import { Instructions } from "../../components/Instructions";
import { Video } from "../../components/Video";
import { isFavorite, removeItem, saveFavorite } from "../../utils/CRUD";

export function Details() {
  const navigation = useNavigation("");
  const route = useRoute();
  const [showVideo, setShowVideo] = useState(false)
  const [favorite, setFavorite] = useState(false)

  useLayoutEffect(() => {
    async function getStatusFavorite() {
      const recipeFavorite = await isFavorite(route.params?.data)
      setFavorite(recipeFavorite)
    }
    getStatusFavorite();

    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => handleFavoriteRecipe(route.params?.data)}>
       {
        favorite ? (
          <Entypo name="heart" size={28} color="#D22222" />
        ) :(
          <Entypo name="heart-outlined" size={28} color="#D22222" />
        )
       }
        </Pressable>
      ),
    });
  }, [navigation, route.params.data, , favorite]);


  async function handleFavoriteRecipe(recipe) {
    if(favorite){
      await removeItem(recipe.id)
      setFavorite(false);
    } else{
      await saveFavorite('@apprecipe', recipe)
      setFavorite(true);
    }
  }

  function handleOpenVideo() {
    setShowVideo(true);
  }

  async function handleShare(){
    try {
      await Share.share({     
        url: 'https://github.com/gustavogss/recipe-app',   
        message: `Receita: ${route.params?.data.name} (${route.params?.data.total_ingredients} ingredientes)       
        - Vi lá no app Recipe app`
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 14 }}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Pressable onPress={handleOpenVideo}>
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
        <Pressable onPress={handleShare}>
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
      <Modal visible={showVideo} animationType="slide">
        <Video 
        handleClose = {()=> setShowVideo(false)}
        videoUrl={route.params?.data.video}
        />
      </Modal>
    </ScrollView>
  );
}
