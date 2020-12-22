import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function LentilsStew(){
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

        1- 100 g (1 cup) lentils .{"\n"}
        2- small (1/3 cup) onion.{"\n"}
        3- 6 tomatoes.{"\n"}
        4- 2 cup of baby spinach .{"\n"}
        5- 2 tbsps of extra virgin olive oil .{"\n"}
        6- 1 teaspoon of curcumin , salt and pepper to taste.{"\n"}




























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Blend the onion, tomatoes, spinach using the blender (or you chop them finely).{"\n"}
        2- Heat the oil in a saucepan over medium heat.{"\n"}
        3- Add the tomato mixture into the  saucepan and cook for about 5 minutes and stirring.{"\n"}
        4- Add the 2 cups of water, curcumin, salt , pepper and the lentils into the saucepan.{"\n"}
        5- Bring to a boil, then cover, and let simmer on medium -heat, stirring occasionally (Add more water if necessary to lentils be cooked).{"\n"}
        6- let cook  until lentils are tender. And the liquid absorbed.{"\n"}
        7- remove from the heat and serve hot alone or with a slice of whole wheat bread as desired.{"\n"}



















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

export default LentilsStew;
