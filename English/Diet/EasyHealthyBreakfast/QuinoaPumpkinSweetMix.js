import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function QuinoaPumpkinSweetMix(){
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

        1- 1 cup of Quinoa.{"\n"}
        2- 1/2 cup of pumpkin ( peled and diced).{"\n"}
        3- 5 dates (pitted) {"\n"}







        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Bring the water to a boil in a saucepan.{"\n"}
        2- Add the quinoa, pumpkin and the dates.{"\n"}
        3- Cover and simmer 15 minutes, or until the pumpkin is tender and each grain of quinoa displays a little thread.{"\n"}
        4- Drain and pour them into a bowl and mix them well until combined then serve.{"\n"}















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

export default QuinoaPumpkinSweetMix;
