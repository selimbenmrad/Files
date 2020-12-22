import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";


const BasicEnergyBalls= () => {
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
        1- 1 cup dried fruit.{"\n"}
        2- 2 cups rolled oats .{"\n"}
        3- 1 cup nut butter or 2 cups nuts .{"\n"}
        4- ½ cup all-natural sweetener(honey,oragave nectar).{"\n"}
        5- 1/2 cup mix-ins of your choice.{"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

      1-  Place rolled oats in a high-speed food processor.{"\n"}
      2-  Process on high for about a minute.{"\n"}
      3-  Add the rest of the ingredients to food processor.{"\n"}
      4-  Process for 2 minutes until your dough is formed.{"\n"}
      5-  Scoop out the dough to form your balls.{"\n"}
      6-  Store energy balls then into the freezer.{"\n"}

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

export default BasicEnergyBalls;
