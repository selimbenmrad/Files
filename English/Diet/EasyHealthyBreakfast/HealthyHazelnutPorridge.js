import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function HealthyHazelnutPorridge(){
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

        1-  100 g tbsp ground roasted hazelnut.{"\n"}
        2-  1 cup (200 ml) hazelnut milk (you can also cook in water).{"\n"}
        3-  3 tbsp oatmeal.{"\n"}
        4-  3 tbsp of ground flax seeds.{"\n"}
        5-  1 tbsp pure honey.{"\n"}
        6-  Toasted hazelnuts for garnish (optional).{"\n"}


























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- In a thick bottom pot, add oatmeal, ground hazelnut, flax seeds and hazelnut milk. Bring to a boil on medium heat.{"\n"}
        2- Add honey Mix well and let it simmer. Stir frequently till cooked (10min).{"\n"}
        3- Pour the porridge in a serving bowl. Sprinkle some chopped hazelnuts on top and enjoy warm.{"\n"}























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

export default HealthyHazelnutPorridge;
