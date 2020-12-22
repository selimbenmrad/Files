import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function CarrotSalad(){
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
        1-  500g carrots  {"\n"}
        2-  one red onion{"\n"}
        3-  3 cloves of garlic{"\n"}
        4-  4 table spoons of olive oil.{"\n"}
        5-  2 table spoons of vinaigra{"\n"}
        6-  a handful of parseley finely chopped.{"\n"}



        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1-  Boil carrots for 20 min ( until tenders){"\n"}
        2-  Cut Carrots, garlic and onion in small piences.{"\n"}
        3-  in a bowl mix all ingredients together.{"\n"}


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

export default CarrotSalad;
