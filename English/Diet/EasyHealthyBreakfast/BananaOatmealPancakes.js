import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function BananaOatmealPancakes(){
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

        1- 75 g oatmeal {"\n"}
        2- 100 ml of semi-skimmed milk {"\n"}
        3- 1 egg {"\n"}
        4- 2 bananas {"\n"}
        5- 1 handful of walnuts {"\n"}
        6- 1 C. to s. by Becel Original Liquid {"\n"}
        7- 20 g Becel ProActiv Original {"\n"}
        8- Utensil: hand blender {"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>

    1-  the oatmeal, milk, egg and 1 banana using the hand blender until you get a smooth paste.{"\n"}

    2- Heat 1 tbsp. Becel Original in a crepe maker and form 3 small thick pancakes. {"\n"}

    3- Cook them on both sides for about 3 minutes.{"\n"}

    4- Repeat with the rest of the dough.{"\n"}

    5- Spread a little Becel ProActiv Original on each pancake.{"\n"}

    6- Cut the remaining banana into slices and finely chop the nuts.{"\n"}

    7- Form 2 equal piles of pancakes and garnish the tops with bananas and nuts, then serve. {"\n"}

    8- Sprinkle a thin drizzle of honey on the pancakes.{"\n"}

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

export default BananaOatmealPancakes;
