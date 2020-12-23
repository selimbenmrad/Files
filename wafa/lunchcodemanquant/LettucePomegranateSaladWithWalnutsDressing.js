import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function LettucePomegranateSaladWithWalnutsDressing(){
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

        1- 2 small heads butter lettuce.{"\n"}
        2- handful of walnuts, crushed.{"\n"}
        3- Seeds of 1 pomegranate.{"\n"}
        4- tablespoons walnut oil (or olive oil).{"\n"}
        5- juice of healf lemon .{"\n"}






        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Remove and discard the outer leaves of the lettuces, then tear the inner leaves, wash them and arrange on a large plate.{"\n"}
        2- Scatter over the lettuce the pomegranate seeds.{"\n"}
        3- In small bowl, whisk crushed walnut, walnut oil and lemon juice to emulsify.{"\n"}
        4- Drizzle dressing over salad and serve.{"\n"}




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

export default LettucePomegranateSaladWithWalnutsDressing;
