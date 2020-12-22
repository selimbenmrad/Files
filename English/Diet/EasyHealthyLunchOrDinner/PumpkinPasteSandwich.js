import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PumpkinPasteSandwich(){
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

        1- 2 slices of whole wheat bread .{"\n"}
        2- 180 g pumpkin.{"\n"}
        3- 2 tbsp of olive oil.{"\n"}
        4- 2 poached eggs.{"\n"}
        5- pinch of salt .{"\n"}
        6- 1 teaspoon of curcumin.{"\n"}
        7- olive and parseley (optional). {"\n"}












        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1-  pell the pumpkin and  cut it in small pieces.{"\n"}
        2-  In a wok or large frying pan, heat the oil.{"\n"}
        3-  Add the pumpkin.{"\n"}
        4-  add half cup  of water(100ml), salt and curcumin.{"\n"}
        5-  washed withn a fork the pumpkin and let it cooked until we have a paste.{"\n"}
        6-  spread the bread with pumpkin paste.{"\n"}
        7-  assemble the poached egg on the top.{"\n"}
        8-  decorate with olive and same  parseley and serve.{"\n"}








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

export default PumpkinPasteSandwich;
