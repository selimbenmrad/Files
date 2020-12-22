import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function BakedCauliflowerPotatoesChicken(){
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

        1- 1 chicken thigh without skin.{"\n"}
        2- 1 potatoes, diced{"\n"}
        3- 2 cups of grean beans .{"\n"}
        4- 1/3 cauliflower.{"\n"}
        5- 50 g white Cheese or Feta.{"\n"}
        6- 1 tablespoon olive oil.{"\n"}
        7- 1 teaspoon of curcumin ,thyme, pinch of salt and pepper.{"\n"}
        8- 2 cups of milk .{"\n"}
        9- some olives, chopped persaly.{"\n"}
















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Preheat oven to 260 degrees C .{"\n"}
        2- wash and cut the cauliflower  into slices about 1cm thick, dice the potatoes,wash the green Beans.{"\n"}
        3- In a small bowl combine the milk,tyme, olive oil, curcumin, salt and pepper.{"\n"}
        3- pour the vegetables and  chicken into glass oven tray and coat with the prepered milk mixture .{"\n"}
        4- bake until tender,golden brown and liquid absorbed.{"\n"}
        5- pour them into dish add the feta cheese, parsely, olive and enjoy the taste.{"\n"}










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

export default BakedCauliflowerPotatoesChicken;
