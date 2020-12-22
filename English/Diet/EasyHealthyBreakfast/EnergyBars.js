import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function EnergyBars(){
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

        1- 100 g dates paste .{"\n"}
        2- 50g ground Hazelnut.{"\n"}
        3- 50 g Oats (7 tbsps).{"\n"}
        4- handful of dried raisin (20 g).{"\n"}
        5- 2 tbsp of peanut butter.{"\n"}












        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- In a bowl mix all the ingredients togther until be well combined{"\n"}
        2- Press the dough onto a baking tray lined with parchment paper{"\n"}
        3- Refrigerate for at least 30 min then cut into pieces and enjoy.{"\n"}






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

export default EnergyBars;
