import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function EnergyCocoNutsBall(){
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

        1- 50 g ground Hazelnut.{"\n"}
        2- 50 g ground sesame.{"\n"}
        3- 1  white egg.{"\n"}
        4- for coating : shredded coconut, 2 tbsp of pure honey.{"\n"}









        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Preheat oven to 260 C.{"\n"}
        2- in a bowl, mix  well the ground sesame and Hazelnut with white egg .{"\n"}
        3- roll into balls  and put them in baking tray lined with parchment paper.{"\n"}
        4- bake it for 10 min or until the ball slightly golden brown.{"\n"}
        5- roll the  balls in honey then in  the  coconuts to coat then serve .{"\n"}





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

export default EnergyCocoNutsBall;
