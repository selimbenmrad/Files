import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";


function HomemadeMuesliWithDriedFruits(){
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
      1-  50 g oatmeal{"\n"}
      2-  50 g Small spelled flon{"\n"}
      3-  15 g banana chips{"\n"}
      4-  15 g almonds{"\n"}
      5-  10 g pumpkin seeds{"\n"}
      6-  10 g dried raspberries{"\n"}
      7-  10 g cranberry {"\n"}


        <Text style={styles.text}>
          Preparation:{"\n"}
        </Text>

  1-  Add in yoghurt of your choice, in vegetable, cow or goat milk.{"\n"}
  2-  But you can also use it as a basic ingredient to make cereal bars.{"\n"}
  3-  To do this add egg white or honey in quantity.{"\n"}
  4-  Spread the preparation in the bottom of a gratin mold in an even layer and bake at 180 ° for 20 min.{"\n"}
  5-  You can also add a little hazelnut oil,
  6-  spices such as cinnamon or nutmeg with honey and you will thus make a granola.{"\n"}

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

export default HomemadeMuesliWithDriedFruits;
