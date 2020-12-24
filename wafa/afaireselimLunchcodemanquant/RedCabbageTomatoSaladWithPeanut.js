import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function RedCabbageTomatoSaladWithPeanut(){
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
        2- 1/3 head of red cabbage.{"\n"}
        3- 1/2 medium bunch lettuce.{"\n"}
        4- 1 tbsp extra virgin olive oil.{"\n"}
        5- Handful of toasted peanut .{"\n"}























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1-  Wash and chop the vegetables.{"\n"}
        2-  In a large bowl, add all ingredients Stir well and gently.{"\n"}
        3-  Serve immediately or within a few hours.{"\n"}




















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

export default RedCabbageTomatoSaladWithPeanut;
