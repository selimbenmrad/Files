import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function KidneyBeanSalad(){
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
        1-  2 15 oz cans kidney beans, drained and rinsed{"\n"}
        2-  1 medium red onion, diced{"\n"}
        3-  1 large red bell pepper, seeded and diced{"\n"}
        4-  1 large yellow bell pepper, seeded and diced{"\n"}
        5-  1 cup parsley, chopped{"\n"}
        6-  1 tbsp olive oil{"\n"}
        7-  2 cloves garlic, minced{"\n"}
        8-  Juice from 2 lemons{"\n"}
        9-  Salt and pepper to taste{"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


  1-  Place beans, peppers, onions and parsley in a large bowl.{"\n"}
  2-  Add in olive oil, garlic, lemon juice and salt  and pepper. Toss to combine.{"\n"}

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

export default KidneyBeanSalad;
