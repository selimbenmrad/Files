import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function GermanPatatoSalad(){
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
        1-  3 1/2 pounds red bliss potatoes {"\n"}
        2-  3/4 cup canola oil{"\n"}
        3-  1/2 cup seasoned rice vinegar {"\n"}
        4-  1 red onion {"\n"}
        5-  1 teaspoon salt {"\n"}
        6-  1 teaspoon freshly ground black pepper {"\n"}
        7-  1/2 cup chopped parsley {"\n"}
        8-  1 teaspoon spanish paprika {"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>

  1-  In a large pot of salted water over medium-high heat, add the potatoes. {"\n"}
  2-  Bring to a boil and cook until fork-tender, 25 to 35 minutes. {"\n"}
  3-  Drain the potatoes in a colander and peel while they are as hot as you can handle. {"\n"}
  4-  Cut one-third of them into 1/2-inch-thick slices .{"\n"}
  5-  Drizzle one-third of the oil over them, then one-third of the vinegar. {"\n"}
  6-  Repeat the process twice.{"\n"}
  7-  Sprinkle the salad with the paprika. {"\n"}
  8-  Cool to room temperature, then cover and refrigerate at least overnight.{"\n"}
  9-  Turn the container over for several hours so the juices permeate the potatoes. {"\n"}
  10- When ready to serve, bring the potato salad to room temperature and serve with a slotted spoon.{"\n"}

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


export default GermanPatatoSalad;
