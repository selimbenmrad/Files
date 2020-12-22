import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function OvernightOats(){
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

        1- 8 tbsps of rolled Oats {"\n"}
        2- 1 banana,sliced.{"\n"}
        3- 1 cup (200 ml) milk low fat (Encourraged to use vegetable milk).{"\n"}
        4- 1 tbsp Pure Honeyn (optionel).{"\n"}
        5- for garnish: hundful of pistachio and 1 mandarin.{"\n"}


























        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Whisk together all ingredients (except the mandarin) in a medium-sized mixing bowl.{"\n"}
        2- Pour them into a jar with a tight-fitting lid.{"\n"}
        3- Close and refrigerate overnight before eat it  with  mandarin .{"\n"}






















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

export default OvernightOats;
