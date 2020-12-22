import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const TheTurnipearSalad= () => {
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
        1-   1 big pear (200g) .{"\n"}
        2-   4 white turnip (200g).{"\n"}
        3-   1 carrot (100 g).{"\n"}
        3-   1 Cucumber (150g) .{"\n"}
        4-   20g or 1 small red onion finely chopped .{"\n"}
        5-   1 tablespoon of sesame seeds.{"\n"}
        6-   Some parsely (chopped).{"\n"}
        7-   Handful of Hazelnut.{"\n"}
        8-   For the dressing:  2 tablespoon of olive oil, lemon juice.{"\n"}





      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

  1- Wash and cut the pear,turnip,carrot and the Cucumber and put it in salad bowl.{"\n"}
  2- Add the rest of the ingredients to the bowls and serve .{"\n"}





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


export default TheTurnipearSalad;
