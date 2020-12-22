import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function RiceAndLentilsWithAvocadoSauce(){
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

        1- 1 cup  (200g) brown or basmati rice , rinsed and drained.{"\n"}
        2- 1/2 cup (100g) regular brown or green lentils,rinsed and drained.{"\n"}
        3- 1 small onion.{"\n"}
        4- 1 cup cabbage( red or green) chopped.{"\n"}
        5- 1 avocado.{"\n"}
        6- 3 tbsp of cottage Cheese {"\n"}
        7- 2 tbsp of extra-virgin olive oil.{"\n"}
        8- 1 cup chopped parsely (optionel) .{"\n"}
        9-  some olives (optionel).{"\n"}
        





















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- In a large  pot,  bring the water to a boil over high heat.{"\n"}
        2- Once boiling, stir in the rice  and the lentils  with  a pinch of salt  and reduce the heat to medium.{"\n"}
        3- Cover and cook, stirring occasionally , cook until the liquid is absorbed and the rice and lentils are tender, about 20 min.{"\n"}
        4- Meanwhile, warm 2 tbsps of olive oil in a skillet over medium-high heat.{"\n"}
        5- Add the onions and cabbage . Stir to combine, and let it cook until onion lightly browned, then remove it from the heat.{"\n"}
        6- When the lentils and rice are done cooking, drain off any excess water (if there is any)  and mix it with  onion and cabbage .{"\n"}
        7- Prepare the avocado sauce: mix 1 avocado with 3 tbsps of cottage cheese and 1 tbsp of olive oil.{"\n"}
        8- Transfer the rice and lentil mixture to a large serving platter or bowl. {"\n"}
        9- Top with the avocado sauce, parsley and some olives then serve.{"\n"}
        

















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

export default RiceAndLentilsWithAvocadoSauce;
