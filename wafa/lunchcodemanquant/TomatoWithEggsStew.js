import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function TomatoWithEggsStew(){
  return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>

        <Text style={styles.text}>

        <Text style={styles.title}>
        Ingredients: {"\n"}
        </Text>
        <Text style={styles.Textetitle}>
          For one person: {"\n"}
        </Text>

        1- 2 tablespoons olive oil.{"\n"}
        2- small (1/3 cups) chopped onion.{"\n"}
        3- 4 finely chopped tomatoes.{"\n"}
        4- 2 cloves garlic, minced.{"\n"}
        5- 2 bell peppers, any color , sliced.{"\n"}
        6- 1 teaspoon of curcumin , salt and pepper to taste.{"\n"}
        7- 2 eggs.{"\n"}



























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Heat the olive oil in a skillet over medium heat.{"\n"}
        2- add the onion,tomatoes, and garlic; cook and stir until the vegetables have softened and the onion has turned translucent, about 5 minutes.{"\n"}
        3- Pour the bell pepper into the skillet, and stir to combine.{"\n"}
        4- add the curcumin , salt and pepper and helf cup of water(100ml) if needed, Simmer, uncovered, until the tomato juices have cooked off, about 10 minutes.{"\n"}
        5- Make two indentations in the tomato mixture for the eggs.{"\n"}
        6- Crack the eggs into the indentations. Cover the skillet and let the eggs cook until they're firm but not dry, about 5 minutes . {"\n"}
        7- serve hot with some whole wheat toest.{"\n"}



















                </Text>

                </ScrollView>
                  </SafeAreaView>

               );
               }

     const styles = StyleSheet.create({

       bold: {fontWeight: 'bold'},
      container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor:"#ffffff",
        fontSize: 15,
        paddingTop: 10
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },

      title: {
        color: "#008b8b",
        fontSize: 27,
        fontWeight: "bold",
          lineHeight: 70,

      },

      text: {
        padding: 25,
        color: "black",
        fontSize: 18,
        fontWeight: "normal",
        textAlign: "justify",
        lineHeight: 30,
      },
      Textetitle: {
        color: "#fa8072",
        fontSize: 22,
        fontWeight: "bold",
          lineHeight: 70,

      },


               });

export default TomatoWithEggsStew;
