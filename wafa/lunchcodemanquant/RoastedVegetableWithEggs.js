import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function RoastedVegetablesWithEggs(){
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

        1- 2 medium size Potatoes diced.{"\n"}
        2- 2 squash. diced {"\n"}
        3- 3 cups of pumpkin, diced .{"\n"}
        4- 2 cups of tomates,diced .{"\n"}
        5- 4 green capsicum ,sliced.{"\n"}
        6- 1 tablespoon olive oil.{"\n"}
        7- pinch of salt.{"\n"}
        8- 2 boiled eggs.{"\n"}
        9- Some olives, chopped persaly.{"\n"}
















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Preheat oven to 260 degrees C and prepare 1 large baking sheets with parchment paper or a non-stick sheet.{"\n"}
        2- Wash and diced the vegtable and drizzle with a little oil to coat,Sprinkle a pinch of salt .{"\n"}
        3- Add vegetables to the same baking pan.{"\n"}
        4- Arrange into even layers so there isn’t much or any overlap.{"\n"}
        5- Bake until golden brown and tender (25-40 minutes,potatoes generally tend to take longer up to 40 minutes) .{"\n"}
        6- Boil 2 eggs  then sliced.{"\n"}
        7- Pour the roasted vegetables into dish add the eggs, parsely, olive combine toghter then serve .{"\n"}










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

export default RoastedVegetablesWithEggs;
