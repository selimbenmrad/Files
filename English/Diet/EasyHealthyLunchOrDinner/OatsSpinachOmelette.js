import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function OatsSpinachOmelette(){
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

        1-  3 eggs .{"\n"}
        2-  6 spinach .{"\n"}
        3-  6 tbsp of Oats.{"\n"}
        3-  1 small onion finely chopped.{"\n"}
        4-  3 cloves garlic, sliced.{"\n"}
        5-  1 tbsp of olive oil .{"\n"}
        6-  pinch of salt and pepper to taste .{"\n"}








        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- heat a  the skillet over medium heat.{"\n"}
        2- add the oil , then garlic,onion and spinach.{"\n"}
        3- crack the eggs into a bowl, add the Oats and beat them .{"\n"}
        4- added the eggs oats mixture into skillet and let's it cooked with other ingredients for 3 min.{"\n"}
        5- added a pinch of salt and pepper and serve.{"\n"}










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

export default OatsSpinachOmelette;
