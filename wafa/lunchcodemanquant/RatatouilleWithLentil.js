import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function RatatouilleWithLentil(){
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

        1- eggplant (1 large) .{"\n"}
        2- 2 zucchini (350g).{"\n"}
        3- 200 g pumpkin. {"\n"}
        4- 3 tomates.{"\n"}
        5- 1 green capsicum.{"\n"}
        6- 3 cup of water.{"\n"}
        7- 150 g lentil .{"\n"}
        8- 2 tbsp of olive oil.{"\n"}
        9- 1 tbsp of dried mint .{"\n"}
        9- 1 teaspoon of curcumin and pinch of salt and pepper to tase.{"\n"}





















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Heat 2 tablespoons of the oil in a large Dutch oven or heavy-bottomed pot over medium-high heat and add the onions to Sauteed.{"\n"}
        2- Add the eggplant and the Zucchini until browned in spots, about 2 minutes.{"\n"}
        3- Add the  tomatoes, pumpkin and the capsicum cooded additionl for 5 minutes   .{"\n"}
        4- Add 3 cups of water and add the lentil, curcumin ,salt  and Cook over low heat 5 minutes, or until vegetables and lentil are  tender and cooked and liquid absorbed. {"\n"}
        5- Sprinkling  the dish serving with dried mint and drizzling with olive oil  and serve. {"\n"}



















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

export default RatatouilleWithLentil;
