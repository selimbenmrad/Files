import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function StuffedPeppers(){
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

        1-  4 large bell peppers (halved, seeds removed).{"\n"}
        2-  100 g  red Quinoa (1 cup dry) .{"\n"}
        3-  200 g ricotta cheese.{"\n"}
        4-  1 egg.{"\n"}
        5-  1/2 cup chopped persaly .{"\n"}
        6-  pinch of salt  pepper , to taste.{"\n"}
        7-  1 tbsp of olive oil.{"\n"}
















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Add quinoa  to a saucepan and bring to a boil over high heat. until all  quinoa is fluffy (15 min), then strain.{"\n"}
        2- Preheat oven to 260 C and lightly grease a glass oven tray.{"\n"}
        3- Add cooked quinoa to a mixing bowl and add  the ricotta cheese , egg, parsaly. Mix to thoroughly combine then adding salt, pepper.{"\n"}
        4- Slice off the tops of the peppers. Remove the seeds.{"\n"}
        5- Brush or rub with a littele bit oil the outside of peppers.{"\n"}
        6- Generously stuff peppers with quinoa mixture until all peppers are full.{"\n"}
        7- Bake for 20 minutes  until peppers are soft and slightly golden brown.{"\n"}
        8- Serve and enjoy.{"\n"}










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

export default StuffedPeppers;
