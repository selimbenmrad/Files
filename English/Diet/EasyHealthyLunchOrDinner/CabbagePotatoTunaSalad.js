import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function  CabbagePotatoTunaSalad(){
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

        1- 1/4  head of purple cabbage.{"\n"}
        2- 1 potato.{"\n"}
        3- white cheese ( low fat) (30g).{"\n"}
        4- 1 can of tuna, drained.{"\n"}
        5- 6 lettuces leaves .{"\n"}
        6- for Seasoning: 2 tbsp of olive oil, pinch of salt ,1 tbsp of lemon Juice.{"\n"}
        7- some olive  , some grenade to decorate (optional).{"\n"}














        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Boil the potato until fork tender, Drain.{"\n"}
        2- Wash the cabbage,lettuce and  cut them in pieces then put them in a bowl.{"\n"}
        3- Add the potatoes,tuna , white cheese  and mix .{"\n"}
        4- In a small bowl, whisk together the oil, lemon juice, salt. pour over salad.{"\n"}
        5- Add some olive and grenade then serve.{"\n"}











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

export default CabbagePotatoTunaSalad;
