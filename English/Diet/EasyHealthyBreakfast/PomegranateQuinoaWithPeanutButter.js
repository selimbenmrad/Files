import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PomegranateQuinoaWithPeanutButter(){
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

        1- 1  cup of Quinoa.{"\n"}
        2- 3  tablespoons peanut butter.{"\n"}
        3- 1 small Pomegranate, peeled {"\n"}







        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1-  Prepare you Quinoa.{"\n"}
        2-  Let simmer for 15 minutes In boiling water.{"\n"}
        3-  Once quinoa is done, Drain it well in a colander and pour it into a bowl{"\n"}
        4-  add the Pomegranate and the peanut butter and stir well then serve.{"\n"}















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

export default PomegranateQuinoaWithPeanutButter;
