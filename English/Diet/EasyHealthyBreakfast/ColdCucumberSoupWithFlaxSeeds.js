import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function ColdCucumberSoupWithFlaxSeeds(){
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
      1-  1 cucumber{"\n"}
      2-  1 Greek yogurt (or soy){"\n"}
      3-  1 clove of garlic{"\n"}
      4-  5 cl of linseed oil (or olive oil){"\n"}
      5-  1 lemon juice{"\n"}
      6-  Salt pepper{"\n"}
      7-  Flax seeds for decoration{"\n"}

        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


      1-  Peel and seed the cucumber.{"\n"}
      2-  Cut it into small sections. {"\n"}
      3-  Place it in the blender with the other ingredients.{"\n"}
      3-  Mix until you get a smooth soup.{"\n"}
      4-  Keep cool and decorate with a few flax seeds before serving.{"\n"}

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

export default ColdCucumberSoupWithFlaxSeeds;
