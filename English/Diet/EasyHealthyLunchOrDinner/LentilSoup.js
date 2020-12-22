import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const LentilSoup= () => {
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
      1:  Drizzle of olive oil.{"\n"}
      2:  4 large cloves garlic, minced.{"\n"}
      3:  3 carrots, peeled and chopped into small pieces.{"\n"}
      4:  4 cups vegetable broth.{"\n"}
      5:  2.5 cups cooked lentils.{"\n"}
      6:  1 can white beans, drained and rinsed.{"\n"}
      7:  1 can diced tomatoes.{"\n"}
      8:   1 bay leaf.{"\n"}
      9:  1 tablespoon onion powder.{"\n"}
      10: 3 large handfuls of spinach.{"\n"}

  
      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

    1-  Drizzle olive oil in a large pot over medium high heat.{"\n"}
    2-  Add garlic and cook for about 1 minute.{"\n"}
    3-  Bring to a boil and then simmer for 30 minutes.{"\n"}
    4-  Adding spinach and seasoning with salt and pepper.{"\n"}

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


export default LentilSoup;
