import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function HealthySesamePorridge(){
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

        1- 1 cup (150g) toasted sesame seeds.{"\n"}
        2- 3 tbsp of Oats meal.{"\n"}
        3- 3 tbsp of flax seeds.{"\n"}
        4- 200 ml of milk (we encourage of consummation of plant milk).{"\n"}
        5- 2 tbsp of pure honey.{"\n"}
        6- Toasted nuts and seeds for garnish (optional).{"\n"}


























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- In a blender, blend sesame seeds, oats, flax seeds,honey and milk until smooth.{"\n"} 
        2- Pour into a pot and bring to a boil.{"\n"}
        3- Lower heat to a simmer and cook, stirring regularly, for 15 minutes.{"\n"}
        4- Top with extra nuts and seeds, if desired. Serve and enjoy.{"\n"}






















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

export default HealthySesamePorridge;
