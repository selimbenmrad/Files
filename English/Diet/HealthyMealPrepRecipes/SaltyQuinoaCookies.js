import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const SaltyQuinoaCookies= () => {
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
      1-  100 g  red Quinoa (1 cup dry) .{"\n"}
      2-  4 tbsps of Oats.{"\n"}
      3-  200 g ricotta cheese.{"\n"}
      4-  1 egg.{"\n"}
      5-  1/2 cup chopped persaly .{"\n"}
      6-  pinch of salt  pepper , to taste.{"\n"}





      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

    1- Preheat oven to 260 degrees c. Line a large baking sheet with parchment paper and set aside.{"\n"}
    2- Prepare you Quinoa,Let simmer for 15 minutes In boiling water then strian.{"\n"}
    3- In a bowl, mix together all the ingredients until combined .{"\n"}
    4- Spoon about a tablespoon of dough onto a large baking sheet.{"\n"}
    5- Bake them for 12-14 minutes  or until lightly browned.{"\n"}
    6- serve (when cookies are completely cool, they can be stored in an airtight container ).{"\n"}


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
export default SaltyQuinoaCookies;
