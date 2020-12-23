import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function ChickpeasGreenBeansMix(){
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

        1- 110 g green beans.{"\n"}
        2- 110g  cooked Chickpeas .{"\n"}
        3- 1 red capsicum.{"\n"}
        4- 2 tbsp of olive oil .{"\n"}
        5- 1 teaspoon of sesame.{"\n"}
        6- pinch of salt , some olives.{"\n"}















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- boiled in water the  green beans until be tender (10 min).{"\n"}
        2- strain out the green beans  of the water  and put it in bowl.{"\n"}
        3- add the cooked chickpeas .{"\n"}
        4- wash and cut the capsicum and add it to the bowls.{"\n"}
        5- seasoned with olive oil, salt and sesame and decorate with same olive then serve.{"\n"}
      








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

export default ChickpeasGreenBeansMix;
