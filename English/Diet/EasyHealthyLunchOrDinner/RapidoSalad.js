import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function Rapidosalad(){
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

        1-  4 lettuce leaves.{"\n"}
        2-  2 carrots .{"\n"}
        3-  1 tablespoons of olive oil.{"\n"}
        4-  1 tablespoon of lemon juice.{"\n"}
        5-  1 box of  sardine.{"\n"}





        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Wash and cut  the letuce and the carots.{"\n"}
        2- ut it in the bowl.{"\n"}
        3- Add the sardine.{"\n"}
        4- Add the olive oil and Lemon juice.{"\n"}
        5- Mix all ingredients together and serve.{"\n"}



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

export default Rapidosalad;
