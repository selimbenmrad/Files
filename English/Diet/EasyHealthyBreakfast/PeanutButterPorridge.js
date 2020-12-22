import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PeanutButterHotPorridge(){
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

        1- 6 tbsp of Oatmeal.{"\n"}
        2- 1 banana (cut into pieces).{"\n"}
        3- 1 cup (200 ml) milk low fat.{"\n"}
        4- 2 tbsp of Naturel peanut butter .{"\n"}
        5- Garnishing : sliced plum and banana.{"\n"}
























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- In a saucepan, combine the ingredients (not the plum).{"\n"}
        2- Bring to a boil, then reduce heat to low, stirring frequently and simmer until the liquid has been absorbed. {"\n"}
        3- Pour into bowls, and topping with  sliced plum and some slices of banana (optional).{"\n"}






















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

export default PeanutButterHotPorridge;
