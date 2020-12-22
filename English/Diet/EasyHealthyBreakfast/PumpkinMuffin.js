import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PumpkinMuffin(){
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

        1- 1 and 1//2 cups shredded fresh pumpkin.{"\n"}
        2- 1 cup of oatmeal flour .{"\n"}
        3- 3 tbsp of Pur Honey.{"\n"}
        4- 3 eggs.{"\n"}
        5- 5 tbsps of ground nuts.{"\n"}
        












        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Preheat an oven to 200 degrees C.{"\n"}
        2- Grease 12 muffin cups, or line the cups with paper muffin liners.{"\n"}
        3- Crack the eggs and separate the whites from the yolks. {"\n"}
        4- beat  the whites eggs at a low speed until they’re foamy, and then increase the speed until the beaten eggs form soft peaks.{"\n"}
        5- Gently fold your remaining ingredients : oatmel, pumpkin, yolks,honey, ground nuts into the whipped egg whites.{"\n"}
        6- Divide the batter evenly in the prepared muffin pan.{"\n"}
        7- Bake in the preheated oven until  until a toothpick inserted in the center comes out clean (15min).{"\n"}
        8- Cool the muffin pan on a wire rack for 5 minutes before removing the muffins from the pan.{"\n"}





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

export default PumpkinMuffin;
