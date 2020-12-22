import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function ChocolatePeanutButterCups(){
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

        1- milled dark chocolate .{"\n"}
        2- Naturel peanut buuter.{"\n"}
        3- silicone moulds.{"\n"}












        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- melt  dark chocolate (place the chocolate in the oven at 45°C until it is completely melted).{"\n"}
        2- put the dark chocolate in the silicone moulds.{"\n"}
        3- add the peanut butter.{"\n"}
        4- recover again with milled chocolate.{"\n"}
        4- pop them in the fridge to harden.{"\n"}




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

export default ChocolatePeanutButterCups;
