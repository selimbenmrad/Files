import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PumpkinOmelette(){
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

        1- 1 cup (100 g) pumpkin.{"\n"}
        2- 3 pieces of sun-dried tomatoes,chopped.{"\n"}
        3- 1 small onion, chopped.{"\n"}
        4- 2 tbsp of olive oil.{"\n"}
        5- 3 eggs.{"\n"}
        6- pinch of salt and pepper.{"\n"}
        












        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1-Peel the pumpkin and chop them finely.{"\n"}
        2-In a  frying pan, heat the  olive oil.{"\n"} 
        3-add the pumpkin , tomatoes and  onion.{"\n"} 
        4-cook and stir frequently for 10 minutes over low heat until the pumpkin are tender.{"\n"}
        5-In a salad bowl, break the eggs and season with salt and pepper and add it to the pan.{"\n"}
        6-Let it cook  until it is golden on both sides,then remove from the heat and serve.{"\n"}











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

export default PumpkinOmelette;
