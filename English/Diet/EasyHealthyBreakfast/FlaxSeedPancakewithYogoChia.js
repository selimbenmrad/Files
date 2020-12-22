import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function FlaxSeedPancakeWithYogoChia(){
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

        1- 30 g ground Flax seed .{"\n"}
        2- 60 g oatmeal .{"\n"}
        3- 100 ml milk (semi skimmed) .{"\n"}
        4- 1 banana (100g).{"\n"}
        5- 1 tbsp of olive oil.{"\n"}
        6- 1 egg .{"\n"}
        7- 1 natural plain yogurt .{"\n"}
        8- 1 Tbsp of chia.{"\n"}
        9-  Pur honey ( optional).{"\n"}

















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- 1- mix the  flax seed,oatmeal, milk,egg,banana and  using the blender until you get a smooth paste.{"\n"}
        2- Heat 1 tbsp of olive oil in a crepe maker and form 3 small thick pancakes. {"\n"}
        3- Cook them on both sides for about 3 minutes.{"\n"}
        4- Repeat with the rest of the dough.{"\n"}
        5- Meanwhile mix the yogurt with a spoon of  chia seeds.{"\n"}
        6- Form 2 equal piles of pancakes and garnish the tops with honey then serve with yogo-chia mixture . {"\n"}
















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

export default FlaxSeedPancakeWithYogoChia;
