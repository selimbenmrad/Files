import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function CarrotSoupWithLentils(){
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

        1- 400 g carrot.{"\n"}
        2- 1 peeled potato.{"\n"}
        3- 3 leeks sliced.{"\n"}
        4- 1/2 cup celery chopped.{"\n"}
        5- 1 tbsp extra virgin olive oil.{"\n"}
        6- 6 tbsp of lentils.{"\n"}
        7- 1 tbsp of curcumin, pinch of sea salt and pepper.{"\n"}
        8- 3 cups of water .{"\n"}























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Put the carrot, potato and leek into pan of boiling water. Make sure there is enough water to cover the vegetables.{"\n"}
        2- Season with a pinch of salt and pepper and curcumin.{"\n"}
        3- Add lentils and celery and stir to combine. Cover with lid. Bring to a boil until the carrots and lentils are tender.{"\n"}
        4- When ready, add spoon of olive oil.{"\n"}
        5- Blend the soup until smooth and serve in bowl. Enjoy.{"\n"}





















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

export default CarrotSoupWithLentils;
