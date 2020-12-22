import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function ZucchiniWhiteBeansStew(){
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

        1- 1 Zucchini (300 g), sliced (1/4-inch-thick slices).{"\n"}
        2- 3 cups baby Spinach .{"\n"}
        3- 1 small onion, chopped.{"\n"}
        4- 5 tomates finely chopped (or use blander to mixed quickly).{"\n"}
        5- 1 cup of white beans( 1/2 cane cannellini white beans).{"\n"}
        6- 2 tbsp of extra-virgin olive oil.{"\n"}
        7- 1 teaspoon of curcumin.{"\n"}
        8- pinch of salt , pepper to taste .{"\n"}























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Heat oil over medium heat in a large frying pan.{"\n"}
        2- Add onion,spinach, and zucchini, stir and let it cook .{"\n"}
        3- When zucchini lightly browned,add the tomatoes, salt, curcumin, pepper and Stir well to combine.{"\n"}
        4- Add the white beans into fryingpan and allow to come to a simmer and cook ( you could add 1/2cup of water if it need it).{"\n"}
        5- Remove the stew from the heat pour the mixture into a dish and serve with slices of fennel bulb (optional).{"\n"}





















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

export default ZucchiniWhiteBeansStew;
