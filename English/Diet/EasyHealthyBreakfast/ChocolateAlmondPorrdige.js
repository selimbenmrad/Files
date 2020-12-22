import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function ChocolateAlmondPorrdige(){
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

        1- 6 tbsp (60g) of almond meal.{"\n"}
        2- 2 tbsp (20g) of ground coconut.{"\n"}
        3- 1/2 (100ml) cup of milk (almond milk preferably ) .{"\n"}
        4- 1 egg.{"\n"}
        5- 3 tbsp (30 g) dark chocolate chips( more then 70% Cacoa ).{"\n"}
















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- In a saucepan, combine the almon meal, ground cocnuts, chocolate chips, milk, 1 egg. {"\n"}
        2- Bring to a boil, then reduce heat to low, stirring frequently and simmer until the liquid has been absorbed. {"\n"}
        3- Pour into bowls, decorate with same chocoloate chips and serve. {"\n"}









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

export default ChocolateAlmondPorrdige;
