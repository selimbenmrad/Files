import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";


const HealthyBrownies= () => {
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
        1- 150g dark cooking chocolate (at least 70% cocoa solids).{"\n"}
        2- 4 eggs (for ecological reasons we suggest pasture-raised eggs).{"\n"}
        3- 2 tbsps of vegetable oil.{"\n"}
        4- 1/2 cup milk (we encourage the use of plant milk).{"\n"}
        5- 2 tbsp of pure honey.{"\n"}
        6- 2 ripe banana.{"\n"}
        7- 2 tbsps unsweetened cocoa powder.{"\n"}
        8- 50 g ground hazelnut.{"\n"}
        9- 100g oats flour or wholemeal flour.{"\n"}
       10- 1 tsp baking powder.{"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

      1- Preheat the oven to 200C, Line the base of a square cake tin with baking paper.{"\n"}
      2- Melt the chocolate in a heatproof bowl placed over a pan of gently simmering water (making sure the base of the bowl is not touching the water). Remove from the heat and set aside.{"\n"}
      3- Mash the bananas with a fork until smooth.{"\n"}
      4- In a large bowl, whisk the eggs, oil, honey, 1/2 cup of milk, and the unsweetened cocoa powder with an electric hand-held whisk until pale and thick.{"\n"}
      5- Add the mashed banana, and ground Hazelnut, flour, and baking powder. Gently fold this into the mixture until getting homogenous batter.{"\n"}
      6- Pour over the melted chocolate and gently fold in until well combined.{"\n"}
      7- Pour into the prepared tin and bake for 20–25 minutes, or until slightly fudgy .{"\n"}
      8- When cool, remove from the tin, cut into squares and serve.{"\n"}

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

export default HealthyBrownies;
