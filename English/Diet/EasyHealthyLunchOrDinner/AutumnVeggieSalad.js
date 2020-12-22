import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const AutumnVeggieSalad= () => {
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
        1-   150g lentils.{"\n"}
        2-   4 white turnip (200g).{"\n"}
        3-   20g or 1 small red onion finely chopped .{"\n"}
        4-   1  Cucumber (150g) .{"\n"}
        5-   1 tablespoon of chia seeds{"\n"}
        6-   some parsely (chopped).{"\n"}
        7-   For the dressing:  2 tablespoon of olive oil, lemon juice , salt.{"\n"}




      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

  1- boiled the lentils until be cooked.{"\n"}
  2- wash and cut the  turnip and the Cucumber and put it in salad bowl.{"\n"}
  3- added the cocked lentils.{"\n"}
  4- added tbsp of chia Seeds,salt and and mix it all togther.{"\n"}
  5- season with olive oil, Lemon juice , parsely leaves  and serve  .{"\n"}


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


export default AutumnVeggieSalad;
