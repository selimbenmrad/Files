import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function TunaPumpkinPotatoesInOven(){
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

        1- 4 Slices of Tuna. {"\n"}
        2- 1 medium potato.{"\n"}
        3- 1 cup  (150g) of pumpkin.{"\n"}
        4- 2 tbsps of olive oilve.{"\n"}
        5- 1 teaspoon of curcumin and thyme.{"\n"}
        6- Pinch of salt and ground black pepper, to taste .{"\n"}
        7- Fresh lettuce leaves.{"\n"}

















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Preheat oven to 260 degrees c.{"\n"}
        2- Combine Salt, Pepper, curcumin, and  thyme together thoroughly and rub on both sides of tuna steaks and brush it lightly with olive oil.{"\n"}
        3- Wash and peel the potato and the pumpkin and dice it and sprinkle some salt over them.{"\n"}
        4- Place 2 tablespoons of olive oil in a shallow baking dish and lay on it tuna steaks, potato, and pumpkin.{"\n"}
        5- Bake for 30 minutes or until fish flakes easily with a fork and the potatoes are tender and lightly golden.{"\n"}
        6- Place it into a plate and serve it with some fresh lettuce.{"\n"}
















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

export default TunaPumpkinPotatoesInOven;
