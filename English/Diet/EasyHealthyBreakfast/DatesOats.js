import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function DatesOats(){
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
        1-   4 table spoons of oats {"\n"}
        2-   10 Hazelnut {"\n"}
        3-   4 Dates {"\n"}
        4-   A small piece of Dark chocoloate (More than 70% Cacoa){"\n"}
        5-   One Bannana{"\n"}
        6-   200ml of hot milk (Encourraged to use vegetable milk) {"\n"}
        7-   a teaspoon of chiaa seeds.{"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1-   In a bowl, mix all ingredients together.{"\n"}
        2-   let is soak for 30minutes


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

export default DatesOats;
