import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function FruitsSaladWithCream(){
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

        1- 1 apple.{"\n"}
        2- 1 Pomegranate .{"\n"}
        3- 1 mandarine.{"\n"}
        4- 1 plain greek yogurt.{"\n"}
        5- 1 tbsp of pur honey (optional).{"\n"}
        6- handful of Walnuts{"\n"}
        





        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Pell the mandarine and the pomegranate,  the cut the  appel into small cubes and put  it all in the bowl.{"\n"}
        2- Mix the greek yogurt with spoon of honey.{"\n"}
        3- Mix all ingredients together and  top with the walnuts and serve.{"\n"}




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

export default FruitsSaladWithCream;
