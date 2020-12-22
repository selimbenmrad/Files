import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";
function FavaBeans(){
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
        1-  1 tbsp Oil {"\n"}
        2-  1 Small Onion diced {"\n"}
        3-  1 Tomato diced {"\n"}
        4-  2 400g Tinned Fava Beans {"\n"}
        5-  4 Garlic Cloves crushed{"\n"}
        6-  2 tsp ground Cumin{"\n"}
        7-  1 tsp sweet smoked paprika{"\n"}
        8-  Juice of 1 small Lemon{"\n"}
        9-  Salt and Pepper to taste{"\n"}
        10-  Parsley Leaves to garnish{"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>

        1-  In a medium sized pot over medium heat, heat the oil and add the onions. {"\n"}
        2-  Cook for 10 minutes or until golden brown.{"\n"}
        3-  Turn the heat down slightly, and add the tomatoes and garlic. {"\n"}
        4-  Cook for a further 7 - 10 minutes.{"\n"}
        5-  Drain the the liquid from the tin and wash the beans.{"\n"}
        6-  Transfer to the pot with 500 ml water.{"\n"}
        7-  Bring to the boil and add the cumin, salt and pepper.{"\n"}
        8-  Turn the heat off and mash some of the beans using a fork.{"\n"}
        9-  Stir in the lemon juice.{"\n"}
        10- Dress the beans with a good quality olive oil.{"\n"}
        11- Garnish with Parsley.{"\n"}
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

  export default FavaBeans;
