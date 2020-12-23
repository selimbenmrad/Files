import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function  SaladWithOrangeAndWalnuts(){
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

        1- 8 lettuce leaves ( 2 cups) .{"\n"}
        2- 1 orange {"\n"}
        3- handful of Wlnuts .{"\n"}
        4- 2 tomatoes .{"\n"}
        5- 1 tbsp of olive oil .{"\n"}





        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- wash and  cut the tometoes and the luttuce  and peel the orange  and put them in the bowl.{"\n"}
        2- add the remaining ingredients, mix all together and enjoy.{"\n"}




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

export default SaladWithOrangeAndWalnuts;
