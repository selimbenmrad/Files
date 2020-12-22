import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function DarkChocolateFruitsSalad(){
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

        1- 1 pear .{"\n"}
        2- 1 Pomegranate .{"\n"}
        3- 1 kiwi.{"\n"}
        4- 5 dattes.{"\n"}
        5- 5 dried apricots.{"\n"}
        6- 1 banana.{"\n"}
        7- 1 tbsp of grated coconut.{"\n"}
        8- 40 g dark chocolate.{"\n"}





        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- melt  dark chocolate (place the chocolate in the oven at 45°C until it is completely melted).{"\n"}
        2- cut  the  fruits into small cubes and put it in the bowl.{"\n"}
        3- add the melt chocolate.{"\n"}
        4- mix all ingredients together and sprinkle the grated coconut and serve.{"\n"}




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

export default DarkChocolateFruitsSalad;
