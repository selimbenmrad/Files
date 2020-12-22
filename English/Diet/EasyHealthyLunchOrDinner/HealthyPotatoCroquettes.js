import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function  HealthyPotatoCroquettes(){
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

        1- 4 medium potatoes.{"\n"}
        2- 1 egg.{"\n"}
        3- 100 g Tuna. {"\n"}
        4- 100 g ricotta cheese.{"\n"}
        5- pinch of sea salt, ground black pepper , to taste .{"\n"}
        6- 100 g ground Hazelnut.{"\n"}














        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Preheat oven to 260 degrees C.{"\n"}
        2- Peel the potatoes, chop into pieces and boil in salted water until soft, Drain well.{"\n"}
        3- Using a potato masher or a fork, mash the potatoes thoroughly.{"\n"}
        4- Add the ricotta cheese , salt , pepper,  the egg and tuna , and combine well.{"\n"}
        5- With the hands form the mash mix into a  ball, repeating until all the mash is used.{"\n"}
        6- Roll each of the potato balls  in the ground hazelnut until evenly coated.{"\n"}
        7- Place on a lightly-greased baking tray and bake in the oven until golden brown, around 20 minutes, turning once during cooking.{"\n"}
        8- Serve warm at once as a side-dish with tomatoes and spinach salad.{"\n"}









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

export default HealthyPotatoCroquettes;
