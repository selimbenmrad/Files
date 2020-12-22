import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function HighProteinBars(){
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

        1- 200 g oats.{"\n"}
        2- 100 ml of milk (we encourage the use of vegetable milk).{"\n"}
        3- 2 small bananas.{"\n"}
        4- 3 egg whites.{"\n"}
        5- 2 tablespoons of peanut butter.{"\n"}
        6- 50 g of dried raisin (or you dates , pitted).{"\n"}












        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Crack the eggs and separate the whites from the yolks. Pour the whites into a large bowl.{"\n"}
        2- Peel your bananas and mash them with a fork then add them to the bowl.{"\n"}
        3- Add the milk, oats, raisin, and peanut butter and mix the preparation until it is homogeneous.{"\n"}
        4- Preheat the oven to 180 ° C. Line a large baking sheet with parchment paper.{"\n"}
        5- Pour the preparation and spread it evenly.{"\n"}
        6- Bake the protein bars for 15 minutes. Once cooked, cool completely before unmolding and cutting the bars with a knife.{"\n"}






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

export default HighProteinBars;
