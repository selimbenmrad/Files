import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function VegetoMelangy(){
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

        1- 2 tomatoes.{"\n"}
        2- 100 g of Pumpkin.{"\n"}
        3- 2 green piments.{"\n"}
        4- 1 carrot.{"\n"}
        5- 1 small onion.{"\n"}
        6- 1 cup of whater (200 ml).{"\n"}
        7- 2 tbsp of olive oil .{"\n"}
        8- 1 tbsp of  curcumin.{"\n"}
        9- pinch of salt and pepper .{"\n"}
       10- 2 boiled eggs (optional ).{"\n"}










        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- wash and cut  en pieces the tomatoes,piment, and the carrot .{"\n"}
        2- wash and peeled the Pumpkin and onion then cut it in pieces.{"\n"}
        3- heat the oilve oil in a large skillet over  medium heat .{"\n"}
        4- add the vegetable and cook for 4 min .{"\n"}
        5- add the  water and the curcumin and  pinch of salt and pepper.{"\n"}
        6- let's cook in high heat until the vegtable are tender and water is gone.{"\n"}
        7- serve it with boiled egg .{"\n"}







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

export default VegetoMelangy;
