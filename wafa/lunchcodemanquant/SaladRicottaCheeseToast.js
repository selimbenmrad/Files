import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function SaladRicottaCheeseToast(){
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
      for one toast
        1- 1  slice whole wheat bread toast.{"\n"}
        2- 1  tbsp of ricotta cheese.{"\n"}
        3- 2  slices of tomatoes.{"\n"}
        4- 3  slices of cumcumber.{"\n"}
        5- 1  tbsp of olive oil.{"\n"}
        6- For garnish : 1 teaspoon of dried mint, olives .{"\n"}









        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Spread toast with ricotta cheese and  1 tbsp olive oil.{"\n"}
        2- Assemble  the slices of  cumcumber and tomatoes on the top.{"\n"}
        3- Decorate with olive and sprinkle dried mint and serve.{"\n"}







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

export default SaladRicottaCheeseToast;
