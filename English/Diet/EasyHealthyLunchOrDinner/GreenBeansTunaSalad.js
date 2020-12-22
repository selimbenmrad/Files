import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function GreenBeansTunaSalad(){
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

        1- 300 g green beans.{"\n"}
        2- 50 g  of muhsroom.{"\n"}
        3- 1 clove garlic.{"\n"}
        4- 1 small  red onion.{"\n"}
        5- 1 box of tuna.{"\n"}
        6- 2 tbsp of olive oil .{"\n"}














        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- boiled in water the  green beans until be tender (10min).{"\n"}
        2- strain out the green beans  of the water.{"\n"}
        3- heat the oilve oil in a large skillet over  medium heat .{"\n"}
        4- add the garlic, onion and the mushroom cook for 4 min  in skillet.{"\n"}
        5- add the greens beans  and cook it toghter for 3 min .{"\n"}
        6- put it all  in a dish and add the tuna and serve .{"\n"}
      







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

export default GreenBeansTunaSalad;
