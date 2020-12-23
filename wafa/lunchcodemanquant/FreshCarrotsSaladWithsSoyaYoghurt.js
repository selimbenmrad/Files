import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function  FreshCarrotsSaladWithSoyaYoghurt(){
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

        1- 6 carrots.{"\n"}
        2- 1 soy yoghurt (plain){"\n"}
        3- handful of pumpkin seed.{"\n"}
        4- 1 tbsp of dried mint, sea salt to taste .{"\n"}





        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- wash and grate coarsely the carrots and put it in the bowl.{"\n"}
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

export default FreshCarrotsSaladWithSoyaYoghurt;
