import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";
function DetoxPowerBowl(){
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
      1-  2-2.5 cups brown rice{"\n"}
      2-  2 cups cooked lentils (about ¾-1 cup uncooked) (or beans){"\n"}
      3-  2 (small) heads broccoli{"\n"}
      4-  4 cups baby spinach{"\n"}
      5-  2 cups chopped carrots{"\n"}
      6-  4 stalks diced celery{"\n"}
      7-  1 avocado{"\n"}
      8-  1 lime (juice){"\n"}
      9-  Basil or cilantro (fresh){"\n"}
      10- 3 dashes turmeric and 1 dash black pepper (optional){"\n"}

        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1-  Cook the rice (and lentils) according to the package. {"\n"}
        2-  You can also use canned precooked beans instead of the lentils (drained, rinsed, heated up). {"\n"}
        3-  Add lime juice to the rice cooking water and fresh basil or cilantro. {"\n"}
        4-  Now add the broccoli, spinach, carrots, and celery to a pot with ¼ cup water and simmer until all veggies are soft. {"\n"}
        5-  Add turmeric and pepper if desired.{"\n"}
        6-   Add 1 cup rice, 1/4th of the veggie mi, ½ cup lentils or beans, and 2 slices of avocado to a bowl to serve.{"\n"}

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


export default DetoxPowerBowl;
