import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function BuddhaBowlVitaminizedWinter(){
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
        1-  1/4 of a small red cabbage {"\n"}
        2-  1 large carrot {"\n"}
        3-  1 Handful of lamb's lettuce{"\n"}
        4-  1 Large avocado{"\n"}
        5-  1 Orange{"\n"}
        6-  5 tablespoons of walnut oil {"\n"}
        7-  5 tablespoons of white balsamic vinegar {"\n"}
        8-  A little lemon {"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>

        1-  Wash and dry the red cabbage in paper towels. Cut it finely. {"\n"}
        2-  Grate the carrot. Wash the lamb's lettuce.{"\n"}
        3-  Prepare the vinaigrette in a salad bowl and pour it over the vegetables. {"\n"}
        4-  Peel the avocado and cut it into strips. Lemon it to prevent it from darkening.{"\n"}
        5-  Peel the orange raw and remove its supremes. {"\n"}
        5-  Store everything in large bowls or plates.  {"\n"}
        6-  You can add some hazelnuts or dried fruits. {"\n"}


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

export default BuddhaBowlVitaminizedWinter;
