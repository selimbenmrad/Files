import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PotetoesSalad(){
  return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>

        <Text style={styles.text}>

        <Text style={styles.title}>
        Ingredients: {"\n"}
        <Text style={styles.textetitle}>
          For one person: {"\n"}
        </Text>
        </Text>
        1-  200g potetoes.{"\n"}
        2-  2 carrots (115 g) .{"\n"}
        3-  50g white cheese or Sicilian cheese. {"\n"}
        4-  2 table spoons of olive oil.{"\n"}
        5-  1 table spoons of  lemon juice.{"\n"}
        6-  A handful of parseley finely chopped.{"\n"}
        7-  A hundful of green olive.{"\n"}



        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Peel the potetoes then Boil it until be tenders.{"\n"}
        2- Cut the potetoes, white cheese in small pieces.{"\n"}
        3- Grate the carrots.{"\n"}
        4- Add the olive and parsely.{"\n"}
        5- Add the oil olive and lemon juice.{"\n"}
        6- In a bowl mix all ingredients together.{"\n"}



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
                   fontSize: 30,
                   fontWeight: "bold",
                     lineHeight: 70,

                 },

                 text: {
                   padding: 25,
                   color: "black",
                   fontSize: 16,
                   fontWeight: "normal",
                   lineHeight: 30,
                 },
               });

export default PotetoesSalad;
