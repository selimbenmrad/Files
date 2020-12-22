import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function CucumberAppleTomatoSaladWithSesame(){
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

        1- 1 Cucumber.{"\n"}
        2- one small red onion.{"\n"}
        3- 3tomatoes.{"\n"}
        4- 1 appel.{"\n"}
        5- 2 table spoons of olive oil.{"\n"}
        6- 2 tbsps of sesame.{"\n"}
        7- juice of half lemon.{"\n"}
        8- 1 tbsp of dried mint (optional).{"\n"}



        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- wash and cut the apple and vegetables in  pieces.{"\n"}
        2- put it in the bowl.{"\n"}
        3- add the sesame,dried mint, olive oil and lemon juice .{"\n"}
        4- mix all ingredients together and enjoy it.{"\n"}



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

export default CucumberAppleTomatoSaladWithSesame;
