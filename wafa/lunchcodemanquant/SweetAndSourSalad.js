import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function  SweetAndSourSalad(){
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

        1- 2 medium sweet potatoes.{"\n"}
        2- 4 carrots {"\n"}
        3- 1 banana , sliced .{"\n"}
        4- 2 tbsps of Flax seeds .{"\n"}
        5- juice of one orange.{"\n"}
        6- hundful of walnuts .{"\n"}





        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Boil in water the  sweet potatoes  and the carrots until be tender .{"\n"}
        2- Strain out them off the water and cut them in pieces and put them in  a bowl.{"\n"}
        3- Add the remaining ingredients, mix all together and enjoy.{"\n"}





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
        fontSize: 23,
        fontWeight: "bold",
          lineHeight: 70,

      },

      text: {
        padding: 25,
        color: "black",
        fontSize: 16,
        fontWeight: "normal",
        textAlign: "justify",
        lineHeight: 30,
      },
      Textetitle: {
        color: "#fa8072",
        fontSize: 17,
        fontWeight: "bold",
          lineHeight: 70,

      },


               });

export default SweetAndSourSalad;
