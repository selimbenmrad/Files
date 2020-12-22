import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function HealthyPastaWithSauceAndCheese(){
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

        1- 100 g whole-wheat Spaghetti (300 g after cooking) .{"\n"}
        2- 6 tomates , chopped.{"\n"}
        3- 5 cloves garlic,minced.{"\n"}
        4- 1 medium onions, chopped.{"\n"}
        5- 2 cups of greens beans.{"\n"}
        6- 50 g mozerrella.{"\n"}
        7- 2 tbsp of extra-virgin olive oil.{"\n"}
        8- 1 teaspoon of curcumin and  pinch of salt and pepper to tase.{"\n"}
        9- garnish: some pistachio (optional).{"\n"}





















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Cook pasta according to packet instructions (Pasta cooked properly should be al dente—a little chewy),Drain and set aside.{"\n"}
        2- While the pasta is cooking, prepare the vegetables.{"\n"}
        3- In a large frying pan, heat oil over medium heat.{"\n"}
        4- Add garlic,onions,tomatoes and Green beans and stir .{"\n"}
        5- Add 1/2 cup of water, salt, curcumin and pepper; and boil for 10-15 min on high heat, until the sauce thickens.{"\n"}
        6- Add the pasta and the cheese and combine with other ingredients,then remove from heat. {"\n"}
        7- Transfer into plate,top the plate with pistachio and enjoy it.{"\n"}

















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

export default HealthyPastaWithSauceAndCheese;
