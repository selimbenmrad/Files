import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PAPToest(){
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
      for one toest
        1- 1  slice whole wheat bread toest.{"\n"}
        2- 1  tbsp of peanut butter.{"\n"}
        3- 1/4 apple.{"\n"}
        4- 1/4 pear .{"\n"}
        5- for garnish : 1/2 tsp honey and pinch of sesame seeds .{"\n"}









        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- spread toest with peanut butter.{"\n"}
        2- assemble  the slices of pear and appel on the top.{"\n"}
        3- Drizzle with honey and sprinkle with sesame ( optional).{"\n"}







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

export default PAPToest;
