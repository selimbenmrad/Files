import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function BackedPotatoWedges(){
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

        1-  3 medium potatoes.{"\n"}
        2-  2 tbsp of olive oil.{"\n"}
        3-  1 tsp of curcumin powder.{"\n"}
        4-  1 tsp of rosemary powder.{"\n"}
        5-  ½  tsp of salt and pepper.{"\n"}








        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Preheat the oven to 260°C. Line large baking sheets with parchment paper; set aside.{"\n"}
        2- Cut each potato in half lengthways, then cut each half in half lengthways again, and then cut each half in half lengthways again until you have 8 wedges each potato.{"\n"}
        3- In a small jug, combine the olive  oil, curcumin powder,  rosemary powder,  salt, and pepper.{"\n"}
        4- Pour the oil mixture over the potatoes and toss together to coat evenly.{"\n"}
        5- Arrange potato wedges in a single layer on a large baking tray.{"\n"}
        6- Bake for 30 minutes,until golden, crisp and cooked through when tested with a fork.{"\n"}
        7- serve with slices of  fresh carrots and feta cheese pieces .{"\n"}










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

export default BackedPotatoWedges;
