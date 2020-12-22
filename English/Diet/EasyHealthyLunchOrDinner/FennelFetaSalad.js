import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function FennelFetaSalad(){
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

        1- 1 fennel bulbs.{"\n"}
        2- 2 tomatoes.{"\n"}
        3- 5 lettuce leaves.{"\n"}
        4- 50 g Feta cheese.{"\n"}
        5- 2 toasts.{"\n"}
        6- 2 tbsp of olive oil .{"\n"}
        7- 1 teaspoon of thyme.{"\n"}

















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- wash and cut the veggies in  pieces.{"\n"}
        2- put it in the bowl.{"\n"}
        3- cut the toest into cubes and add it to the bowl .{"\n"}
        4- added the Feta cheese {"\n"}
        5- mix all ingredients together,seasoned with olive oil and thyme then serve.{"\n"}
        









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

export default FennelFetaSalad;
