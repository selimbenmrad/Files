import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function DatesPeanutButterPorridge(){
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

        1- 100 g (9 dates)(soaked 1 hour in water).{"\n"}
        2- 3 tbsps of Oatmeal.{"\n"}
        3- 2 tbsps of peanut butter.{"\n"}
        4- 1 cup (200ml) of water.{"\n"}



























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Drain the soaked dates.{"\n"}
        2- Combine all of the  ingredients in a high-speed blender and blend until creamy.{"\n"}
        3- Pour the mixture into saucepan,Bring to a boil.{"\n"}
        4- Stir frequently and simmer until the liquid has been absorbed (10min).{"\n"}
        5- Pour into bowls, and  serve.{"\n"}






















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

export default DatePeanutButterPorridge;
