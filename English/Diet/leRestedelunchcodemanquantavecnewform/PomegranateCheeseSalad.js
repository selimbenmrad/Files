import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PomegranateCheeseSalad(){
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

        1- 2 tomatoes.{"\n"}
        2- 4 lettuce leaves.{"\n"}
        3- 1 Pomegranate.{"\n"}
        4- 60g white cheese Sicilin cheese.{"\n"}
        5- 2 tbsp of olive oil .{"\n"}
        6- 1 tbsp of lemon juice.{"\n"}
        7- 4 walnuts.{"\n"}




        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- wash and cut the tomatoes  and the lettuce.{"\n"}
        2- peeled the Pomegranate.{"\n"}
        3- cut the cheese in pieces.{"\n"}
        4- put  all ingredients in the bowl and mix it together.{"\n"}




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

export default PomegranateCheeseSalad;
