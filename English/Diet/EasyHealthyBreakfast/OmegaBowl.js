import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function Omegabowl(){
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

        1- 1 pear.{"\n"}
        2- 1 plain naturel yogurts.{"\n"}
        3- 1  handful of raisin .{"\n"}
        4- 4 tbsp of Oats (50 g).{"\n"}
        5- 1 tbsp of Flax seeds.{"\n"}
        6- 1 tbsp of sesame seeds .{"\n"}
        7- 1 tbsp of almounds.{"\n"}








        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- put  all ingredients in the bowl and  serve .{"\n"}







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
        fontSize: 27,
        fontWeight: "bold",
          lineHeight: 70,

      },


               });

export default Omegabowl;
