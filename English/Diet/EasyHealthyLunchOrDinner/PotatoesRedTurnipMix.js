import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function  PotatoesRedTurnipMix(){
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

        1- 4 red trunip.{"\n"}
        2- 1 medium potatoes.{"\n"}
        3- 1 small red onions (30g).{"\n"}
        4- 1 carrot.{"\n"}
        5- 4 lettuces leaves .{"\n"}
        6- for Seasoning: 3tbsp of olive oil, pinch of salt ,1 tbsp of lemon Juice.{"\n"}














        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- pell and cut the potatoes and boiled in water until be tender (10min).{"\n"}
        2- strain out the potatoes of the water.{"\n"}
        3- wash the  red turnip,tomatoes,lettuce, carrot , onion and cut them in pieces the put them in a bowl.{"\n"}
        4- add the potatoes and mix .{"\n"}
        5- dressing with olive oil, salt and lemon juice  and serve .{"\n"}









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

export default PotatoesRedTurnipMix;
