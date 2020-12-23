import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function EggplantPizza(){
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

        1- 1 eggplant .{"\n"}
        2- 2 tbsp of tomato sauce .{"\n"}
        3- 40g (2tbsp) of shredded mozzarella cheese .{"\n"}
        4- 1 tbsp of olive oil.{"\n"}
        5-  sea salt and pepper, to taste .{"\n"}
        6- garnish : chopped parsely, olive , chopped green capsicum, 1/2 box of tuna (optional).{"\n"}




















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Preheat the oven to 200 ° C.{"\n"}
        2- Wash the eggplants and cut fairly thick slices lengthwise . {"\n"}
        3- Place the eggplant slices on a baking sheet previously covered with baking paper, drizzle with olive oil and sprinkle with salt and pepper. Bake for 10 minutes.{"\n"}
        4- Remove the eggplant slices from the oven, top each with 1 tablespoon of tomato sauce, Sprinkle it with cheese. Place in the oven for approximately 5 minutes, or until the cheese has melted.{"\n"}
        5- Place some chopped parsely,chopped green capsicum, olive, 1 teaspoon of tuna (optional) on the eggplant slices before serving hot.{"\n"}


















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

export default EggplantPizza;
