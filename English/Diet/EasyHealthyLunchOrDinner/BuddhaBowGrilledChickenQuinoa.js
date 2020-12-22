import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const BuddhaBowGrilledChickenQuinoa= () => {
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
        1:  150g of boneless chicken breast.{"\n"}
        2:  Brussels sprouts.{"\n"}
        3:  1 half avocado .{"\n"}
        4:  Red bean  .{"\n"}
        5:  Broccoli .{"\n"}
        6:  Curly parsley .{"\n"}
        7:  Sesame seeds.{"\n"}
        8:  Spinach .{"\n"}
        9:  125ml (1/2 cup) of quinoa .{"\n"}
      10: Olive oil .{"\n"}


      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

  1:  In a saucepan, bring 250ml of water to a boil.{"\n"}
  2:  Your quinoa in a very fine sieve to remove the saponin.{"\n"}
  3:  Roast your quinoa in a pan (2 minutes).{"\n"}
  4:  Pour your quinoa into the boiling water.{"\n"}
  5:  Cut your Brussels sprouts in 2.{"\n"}
  6:  Cut an avocado in 2 and remove the skin.{"\n"}
  7:  Cut your broccoli.{"\n"}

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
    fontSize: 15,
    fontWeight: "normal",
    lineHeight: 30,
  },
});
export default BuddhaBowGrilledChickenQuinoa;
