import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function RiceFlourPancake(){
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

        1- 1 cup of rice flour.{"\n"}
        2- 1 banana.{"\n"}
        3- 1 egg. {"\n"}
        4- 1/2 cup  of water or or as needed {"\n"}
        5- for garnish: walnuts, honey.{"\n"}
        6- cooking spray.{"\n"}
        7- Utensil:blender.{"\n"}









        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


          1- in blender:  Mix rice flour , banana,egg, and enough water to make a smooth batter .{"\n"}
          2- Spray a non-stick frying pan with cooking spray and place over medium heat .{"\n"}
          3- Form 3 small thick pancakes and Cook them on both sides for about 3 minutes.{"\n"}
          4- Repeat with the rest of the dough.{"\n"}
          5- Form 2 equal piles of pancakes and garnish the tops with  some walnut and honey then serve. {"\n"}















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

export default RiceFourPancacke;
