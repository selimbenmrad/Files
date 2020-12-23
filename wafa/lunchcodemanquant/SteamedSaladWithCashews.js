import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const SteamedSaladWithCashews= () => {
  return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>

        <Text style={styles.text}>

        <Text style={styles.title}>
        Ingredients: {"\n"}
        <Text style={styles.textetitle}>
          For one person: {"\n"}
        </Text>
        </Text>
        1-  300g (2 medium size ) potatoes, diced.{"\n"}
        2-  200 g green beans, chopped.{"\n"}
        3-  4 carots ,diced.{"\n"}
        4-  50 g cashew roasted.{"\n"}
        5-  1tbsp of olive oil .{"\n"}




      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

        1- Steam cook the potatoes,green Beans and carrots until be tender (15min).{"\n"}
        2- Transfer steamed veggies to a large bowl, Add  cashew.{"\n"}
        3- Season with salt,pepper and olive oil and serve.{"\n"}

        PS: For steaming the vegetables,I fill a medium-size saucepan with 1/4 inch water. When it starts to boil, I place the steaming basket with diced potatoes,carrot,green beans and close the lid.{"\n"}
        


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
          fontSize: 30,
          fontWeight: "bold",
            lineHeight: 70,

        },

        text: {
          padding: 25,
          color: "black",
          fontSize: 16,
          fontWeight: "normal",
          lineHeight: 30,
        },
       });



export default SteamedSaladWithCashews;
