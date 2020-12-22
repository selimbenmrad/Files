import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function GrilledVeggiesAndPotatoesToastShape(){
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

        1- 3 tomatoes.{"\n"}
        2- 4 capsicum green pepper.{"\n"}
        3- 3 cloves garlic.{"\n"}
        4- 1 small  red onion.{"\n"}
        5- 1 big potatoes (400 g).{"\n"}
        6- 1 tsp of dried mint.{"\n"}
        7- 2 tbsp of olive oil .{"\n"}
        8- pinch of salt.{"\n"}
        9- boiled egg ( optional).{"\n"}














        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- pell the potatoes and cut it in shapes of toest and anoint it with same olive oil .{"\n"}
        2- wash the tomates and green pepper and onions and cut it in half .{"\n"}
        3- put the potatoes,the veggies and the garlic in the oven to be grilled (200°C,15min).{"\n"}
        4- mix the  grilled tomates, pepper, onion,garlics and Tbsp of olive oil togther by a blender .{"\n"}
        5- spread the roasted potatoes with mixture of grilled veggies .{"\n"}
        6- decorate with olive and boilled egg and sprinkle dried mint.{"\n"}
        7- put it all  in a dish  and serve .{"\n"}









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
        fontSize: 23,
        fontWeight: "bold",
          lineHeight: 70,

      },

      text: {
        padding: 25,
        color: "black",
        fontSize: 16,
        fontWeight: "normal",
        textAlign: "justify",
        lineHeight: 30,
      },
      Textetitle: {
        color: "#fa8072",
        fontSize: 17,
        fontWeight: "bold",
          lineHeight: 70,

      },


               });

export default GrilledVeggiesAndPotatoesToastShape;
