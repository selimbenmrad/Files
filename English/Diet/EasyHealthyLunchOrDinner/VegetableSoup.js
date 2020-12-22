import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function VegetableSoup(){
  return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>

        <Text style={styles.text}>

        <Text style={styles.title}>
        Ingredients: {"\n"}
        <Text style={styles.textetitle}>
          For one person: {"\n"}
        </Text>
        </Text>
        1-  1 onion, chopped {"\n"}
        2-  30 ml (2 tbsp.) Olive oil {"\n"}
        3-  2 carrots, peeled and diced {"\n"}
        4-  2 stalks of celery, diced {"\n"}
        5-  1/2 rutabaga, peeled and diced {"\n"}
        6-  1 can of 796 ml (28 oz) Italian tomatoes, crushed with hands {"\n"}
        7-  1.25 liters (5 cups) chicken broth{ "\n"}
        8-  150 g (1 cup) frozen beans or peas {"\n"}

       <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>

        In a saucepan over medium heat, soften the onion in the oil. {"\n"}
         the carrots, celery and rutabaga.{"\n"}
        Continue cooking for 5 minutes.{"\n"}
        Add the tomatoes and broth. Bring to a boil.{"\n"}
        Cover and simmer 40 minutes or until the vegetables are tender.{"\n"}
        Salt and pepper.{"\n"}
        Add the beans and continue cooking for 2 to 5 minutes.{"\n"}
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
           fontSize: 30,
           fontWeight: "bold",
             lineHeight: 70,

         },

         text: {
           padding: 25,
           color: "black",
           fontSize: 16,
           fontWeight: "normal",
           lineHeight: 30,
         },
        });



export default VegetableSoup;
