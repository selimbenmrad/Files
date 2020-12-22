import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const JoyfulLentilsSalad= () => {
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
        1-   200g lentils.{"\n"}
        2-   2  tomatoes.{"\n"}
        3-   20g or 1 small onion finely chopped .{"\n"}
        4-   1 small green piment .{"\n"}
        5-   some green olives.{"\n"}
        6-   1 Carrot  .{"\n"}
        7-   some parsely .{"\n"}
        8-   1 Box of tuna.{"\n"}
        9-   For the dressing: 20cl of oil.{"\n"}
        10-  Lemon juice, salt, pepper, 1 tsp ground cumin.{"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

  1- boiled the lentils until be cooked.{"\n"}
  2- wash and cut the vegetable.{"\n"}
  3- put and mix it  the vegetable togther in salad bowl .{"\n"}
  4- added the cocked lentils  and the tuna to them.{"\n"}
  5- added tsp of ground cumin,salt and pepper and mix it all togther.{"\n"}
  6- Garnish with olive oil, Lemon juice , parsely leaves and olives .{"\n"}

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


export default JoyfulLentilsSalad;
