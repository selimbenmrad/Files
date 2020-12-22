import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PeanutButterOvernightOatsWithChiaSeeds(){
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

        1- 6 tbsps of rolled Oats.{"\n"}
        2- 2 tbsps of Peanut Butter.{"\n"}
        3- 2 tbsps of chia seeds.{"\n"}
        4- 1 Pear,sliced.{"\n"}
        5- 1 cup (200 ml) milk low fat (Encourraged to use vegetable milk).{"\n"}
        6- 1 tbsp Pure Honey.{"\n"}
       


























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Whisk together all ingredients  in a medium-sized mixing bowl.{"\n"}
        2- Pour them into a jar with a tight-fitting lid.{"\n"}
        3- Place in the refrigerator overnight and enjoy the next day for breakfast.{"\n"}






















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

export default PeanutButterOvernightOatsWithChiaSeeds;
