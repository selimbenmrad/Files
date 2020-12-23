import  * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function HealthyTunaPastaSalad(){
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

        1- 100 g whole-wheat pasta (bow tie) (300 g after cooking) .{"\n"}
        2- 3 tomates , diced {"\n"}
        3- 5 lettuce leaves {"\n"}
        4- 1 medium onions, chopped.{"\n"}
        5- 3 carrotes, diced .{"\n"}
        6- 1 cucumber , diced .{"\n"}
        7- 1 can tuna, drained.{"\n"}
        8- 2 tbsp of extra-virgin olive oil.{"\n"}
        9- pinch of sea salt and pepper, to taste. {"\n"}
  





















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Boil a large, salted pot of water for your pasta.{"\n"}
        2- Cook it al dente according to package directions.Once cooked, rinse them in cold water to cool them, let it drain.{"\n"}
        3- While the pasta is cooking, wash the vegetables, then cut them into cubes and add them to a large bowl.{"\n"}
        4- Add the cooked pasta to the bowl with the other ingredients.{"\n"}
        5- Add the tuna and olive oil to the bowl and Season the pasta salad thoroughly with salt and pepper.Mix, it's ready.{"\n"}

















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

export default HealthyTunaPastaSalad;