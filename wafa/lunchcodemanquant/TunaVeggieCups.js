import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function TunaVeggieCups(){
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

        1-  2 potatoes.{"\n"}
        2-  1 cup of shredded fresh pumpkin .{"\n"}
        3-  100 g ricotta cheese .{"\n"}
        4-  2 tomatoes , diced .{"\n"}
        5-  1 cup chopped baby spinach.{"\n"}
        6-  80 g of tuna ( half of tuna box).{"\n"}
        7-  3 eggs .{"\n"}
        8-  pinch of salt, ground black pepper , to taste.{"\n"}
















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Preheat the oven to 260 c .{"\n"}
        2- Pell the potatoes and cooked into boiled water until be tendre then drain, then mash it .{"\n"}
        3- In a bowl mix the mashed potatoes and the rest of the ingredients togther .{"\n"}
        4- Put the mixture in silicone moulds .{"\n"}
        5- Bake in the preheated oven until a toothpick inserted in the center comes out clean (15min).{"\n"}
        6- Put it all  in a dish  and serve .{"\n"}












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

export default TunaVeggieCups;
