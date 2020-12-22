import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function  HealthyPotatoOmelette(){
  return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>

        <Text style={styles.text}>

        <Text style={styles.title}>
        Ingredients: {"\n"}
        </Text>
        <Text style={styles.Textetitle}>
          For one person: {"\n"}
        </Text>

        1- 1 potato(350g).{"\n"}
        2- 1 tomato.{"\n"}
        3- 1  bell pepper.{"\n"}
        4- 1 small onion.{"\n"}
        5- 3 tbsp of extra virgin olive oil.{"\n"}
        6- 4 eggs (We highly recommend that the eggs are pasture raised).{"\n"}
        7- pinch of sea salt and pepper , to taste.{"\n"}














        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Peel the potatoes and vegetables and cut them in thinly slice. {"\n"}
        2- Heat 2tbsp of the olive oil in a non-stick frying pan, over medium heat.{"\n"}
        3- Add the potato and  vegetables lices, reduce heat to low and cover.{"\n"}
        4- Cook for 20-30 mins, stir every 10 mins, until the potato slices, have cooked through.{"\n"}
        5- Crack the eggs into a large mixing bowl, season and whisk.{"\n"}
        6- Once the potatoes and onion have finished cooking add them to the eggs.{"\n"}
        7- Add the remaining 1tbsp of oil to the same pan used to cook the onions and then pour the egg mixture into the pan.{"\n"}
        8- Cook over medium heat  until the bottom of the omelette is lightly golden, set and coming away from the sides.{"\n"}
        9- Carefully place a large plate over the top of the pan then flip the pan and the plate together.{"\n"}
        10-Return the pan to the heat and slide the tortilla back into your pan to cook the second side.{"\n"}
        11-Cook for a further 2-3 mins until the bottom is also lightly golden then serve.{"\n"}









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
        fontSize: 27,
        fontWeight: "bold",
          lineHeight: 70,

      },

      text: {
        padding: 25,
        color: "black",
        fontSize: 18,
        fontWeight: "normal",
        textAlign: "justify",
        lineHeight: 30,
      },
      Textetitle: {
        color: "#fa8072",
        fontSize: 22,
        fontWeight: "bold",
          lineHeight: 70,

      },


               });

export default HealthyPotatoOmelette;
