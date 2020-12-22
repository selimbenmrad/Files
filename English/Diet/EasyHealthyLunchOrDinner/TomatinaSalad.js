import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function TomatinaSalad(){
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

        1- 350 g or 4 tomatoes.{"\n"}
        2- One small red onion.{"\n"}
        3- Handful of green (30g) olives. {"\n"}
        4- 3 table spoons of olive oil.{"\n"}
        5- 100 g sardine.{"\n"}
        6- A handful of parseley finely chopped.{"\n"}



        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Wash and cut tomatoes and onion in small pieces.{"\n"}
        2- Put it in the bowl.{"\n"}
        3- Added the sardine and the olives .{"\n"}
        4- Added the olive oil and the parsely.{"\n"}
        5- Mix all ingredients together.{"\n"}



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

export default TomatinaSalad;
