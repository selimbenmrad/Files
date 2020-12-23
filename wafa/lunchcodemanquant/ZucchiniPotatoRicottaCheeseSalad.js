import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function  ZucchiniPotatoRicottaCheeseSalad(){
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

        1- 1 zucchini.{"\n"}
        2- 2 medium potatoes.{"\n"}
        3- 100g ricotta cheese.{"\n"}
        4- 2 tbsps of chia see ( optional).{"\n"}
        5- 1 tbsp of extra virgin olive oil.{"\n"}














        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Pell and dice the potatoes and the zucchini and boil them in water until be tender.{"\n"}
        2- Strain out them off the water and put them in a bowl.{"\n"}
        3- Add the ricotta cheese and the Chia seeds and combine all together.{"\n"}
        4- Drizzle with olive oil and serve .{"\n"}









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

export default ZucchiniPotatoRicottaCheeseSalad;
