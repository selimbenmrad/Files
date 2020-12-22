import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function StuffedPotatoes(){
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

        1- 3 potatoes, peeled {"\n"}
        2- 2 tbsps of white cheese low fat .{"\n"}
        3- 1 egg (for ecological reasons we suggest choosing pasture raised eggs).{"\n"}
        5- 2 cup of shredded fresh pupkin.{"\n"}
        6- 200 g of lean beef mince(for ecological reasons we suggest that is issued from sustainable farms) .{"\n"}
        7- 1 cup of parselay, chopped.{"\n"}
        7- 1 tbsp of extra-virgin olive oil.{"\n"}
        8- 1/2 teaspoon of curcumin and  pinch of salt and pepper to tase.{"\n"}
        9- 8 lettuce leaves.{"\n"}
         
















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1-  Preheat oven to 260 C and lightly grease a glass oven tray.{"\n"}
        2-  Halve the potatoes lengthways along the center and use a knife to scoop out some of the flesh to make "boats"{"\n"}
        3-  Brush or rub with a little bit oil the outside of potatoes.{"\n"}
        4-  Heat the olive oil in a large saucepan over a medium heat.{"\n"}
        5-  Add the onion,the shredded pumpkin,curcumin, salt and black pepper .{"\n"}
        6-  Add the mince and  and cook for 5 min, stirring occasionally, until the mince is browned and the onions softened, then remove from the heat  and pour them into the bowl.{"\n"}
        7-  Add  the egg , white cheese and the chopped parsley to the bowl  and mix .{"\n"}
        8-  Fill  the potatoes  with mince mixture until all  potatoes are filled.{"\n"}
        9-  Bake for 20 minutes until potatoes become soft and slightly golden brown.{"\n"}
        10- Serve with lettuce and enjoy.{"\n"}










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

export default StuffedPotatoes;
