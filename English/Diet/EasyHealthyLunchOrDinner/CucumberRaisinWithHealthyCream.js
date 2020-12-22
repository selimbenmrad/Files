import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function  CucumberRaisinWithHealthyCream(){
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

        1- 1 cucumber.{"\n"}
        2- 100 g raisin.{"\n"}
        3- 2 (30ml) table spoons of olive oil.{"\n"}
        4- 1 naturel plain yogurt .{"\n"}
        5- 1 tbsp of dried mint and pinch of salt .{"\n"}





        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1  in a bowl well mix  the yogurt ,2 tbsps of olive oil, dried mint and salt until we have liquid cream .{"\n"}
        2- wash and cut the cucumber into cubes  and put it in the bowl.{"\n"}
        3- add the raisin.{"\n"}
        4- mix all ingredients together and serve.{"\n"}




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

export default CucumberRaisinWithHealthyCream;
