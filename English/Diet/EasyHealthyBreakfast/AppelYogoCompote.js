import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function AppelYogoCompote(){
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

        1- 2 apples.{"\n"}
        2- 1 cup of water.{"\n"}
        3- 50g almonds powder.{"\n"}
        4- 1 table spoons of lemon Juice.{"\n"}
        5- 2 plain greek yogurts.{"\n"}
        6- 1 tablespoon of honey.{"\n"}



        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- wash and cut the apples into cubes and seeds them.{"\n"}
        2- in a cassarole bring the water to boil.{"\n"}
        3- added the apples and 1 tbsp of lemon juice.{"\n"}
        4- cook over low heat until the apple is softer and water is gone.{"\n"}
        5-  in a glass jar put the helf amount of apples.{"\n"}
        6- mix the yogurts with the almound pouder.{"\n"}
        7- put the mixture on the apples then add the rest of apples to the  top.{"\n"}
        8- decorate it with some almounds and tbsp of honey.{"\n"}



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

export default AppelYogoCompote;
