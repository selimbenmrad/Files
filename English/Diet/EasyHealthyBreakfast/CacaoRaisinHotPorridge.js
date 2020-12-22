import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function CacaoRaisinHotPorridge(){
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

        1- 6 tbsp (70g) of Oatmeal.{"\n"}
        2- 200 ml milk reduced fat ,with added vitamin A .{"\n"}
        3- 1 tbsp unsweetened cacao powder  .{"\n"}
        4- 1 tbsp of Pur honey.{"\n"}
        5- handful (30g) of dried raisin.{"\n"}
        6- Garnishing : apple and some dried raisin.{"\n"}
























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- In a saucepan, combine the ingredients except the apple . {"\n"}
        2- Bring to a boil, then reduce heat to low, stirring frequently and simmer until the liquid has been absorbed. {"\n"}
        3- Pour into bowls, and topping with  some dried raisin and sliced apple.{"\n"}






















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

export default CacaoRaisinHotPorridge;
