import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function SavoryCups(){
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

        1-  1 potatoes (170g).{"\n"}
        2-  60 g white cheese (Sicilian cheese).{"\n"}
        3-  same chopped parsely leaves .{"\n"}
        4-  80 g of tuna ( half of tuna box).{"\n"}
        5-  1 egg .{"\n"}
        6-  same olives .{"\n"}
        7-  pinch of salt.{"\n"}
















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1-  Pell the potatoes and cooked into boiled water until be tendre then mash it .{"\n"}
        2-  In a bowl mix the mashed potatoes and the rest of the ingredients togther .{"\n"}
        3-  Put the mixture in silicone moulds then put it  in the oven to beaked  (200°C,15min).{"\n"}
        4-  Put it all  in a dish  and serve .{"\n"}












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

export default SavoryCups;
