import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const NicoiseSalad= () => {
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
        1:   200g green beans.{"\n"}
        2:   2 peeled tomatoes.{"\n"}
        3:   1 Boiled potato .{"\n"}
        4:   2 hard boiled eggs.{"\n"}
        5:   some black olives.{"\n"}
        6:   a few lettuce leaves .{"\n"}
        7:   1 onion, finely chopped.{"\n"}
        8:   1 Box of tuna.{"\n"}
        9:   100 grams some basil leaves.{"\n"}
        10:  For the dressing: 20cl of oil.{"\n"}
        11:  Lemon juice, salt, pepper, 1 tsp mustard.{"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

  1:  Place the lettuce leaves in a salad bowl.{"\n"}
  2:  Mix the onion, the potato cubes.{"\n"}
  3:  Add the boiled green beans with half the vinaigrette.{"\n"}
  4:  Put them in the fridge for 1 hour.{"\n"}
  5:  Then put them on the lettuce leaves.{"\n"}
  6:  Cut the hard-boiled eggs in 4 .{"\n"}
  7:  Spread them over the salads.{"\n"}
  8:  Cut the peeled tomatoes in 4.{"\n"}
  9:  spread them over the salad.{"\n"}
10:  Put the rest of the dressing on the salad .{"\n"}
11:  Garnish with tuna, basil leaves and olives.{"\n"}
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


export default NicoiseSalad;
