import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";


const AlmondsOvernightOats= () => {
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
      1-  A plain yogurt (for the tangy side) .{"\n"}
      2-  two large tablespoons of white cheese.{"\n"}
      3-  A banana.{"\n"}
      4-  Two tablespoons of multigrain flakes(oats, barley).{"\n"}
      5-  A handful of whole almonds.{"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

      1-  Mix the yogurt with a tablespoon of grain flakes.{"\n"}
      2-  Cut the banana into small slices .{"\n"}
      3-  Sprinkle them over the yogurt mixture.{"\n"}
      4-  Add the second tablespoon of multi-grain flakes.{"\n"}
      5-  Add the almonds.


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

export default AlmondsOvernightOats;
