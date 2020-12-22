import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const QuinoaOvoVeggiesBowl= () => {
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
      1- Quinoa (1 cup dry) .{"\n"}
      2-  4 red turnip.{"\n"}
      3-  2 Cucumber .{"\n"}
      4-  2 tomates.{"\n"}
      5-  30 g wite cheese (sardinian cheese), diced .{"\n"}
      6-  2 tbsp olive oil.{"\n"}
      7-  Juice from 1/2 a lemon.{"\n"}
      8-  1 tbsp of dried mint powder.{"\n"}
      9-  boiled egg.{"\n"}



      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

    1-   Prepare you Quinoa.{"\n"}
    2-   Let simmer for 15 minutes In boiling water.{"\n"}
    3-   Rinse the tomates,red trunip,Cucumber chops it roughly and pour them into Salad bowl.{"\n"}
    4-   Once quinoa is done , add it to the salad bowl.{"\n"}
    5-   Add the white cheese.{"\n"}
    6-   in a small bowl whisk oil,lemon juice and dried mint in a small bowl until dressing is combined .{"\n"}
    7-   dressed the salad and stir  well.{"\n"}
    8-  top with boilled egg (diced) and serve.{"\n"}


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
export default QuinoaOvoVeggiesBowl;
