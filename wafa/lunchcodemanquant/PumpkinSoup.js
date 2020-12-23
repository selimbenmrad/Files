import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PumpkinSoup(){
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
        1-  2 cups (400 g) Pumpkin .{"\n"}
        2-  1 carrot (115 g) .{"\n"}
        3-  1/3 leeks , chopped . {"\n"}
        4-  2 table spoons of olive oil.{"\n"}
        5-  2 cloves garlic, minced {"\n"}
        6-  3 cups hot water .{"\n"}
        7-  1 tsp of curcumin .{"\n"}
        8-  Pinch of salt , ground black pepper , to taste .{"\n"}
        9-  Handful of toasted pumpkin seeds (optional) .{"\n"}



        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Heat the oil in a large pot. {"\n"}
        2- Add the leeks , garlic  and carrots and cook over medium-high heat until  leeks golden brown, stirring occasionally.{"\n"}
        3- Add the pumpkin and cook for another 2-3 minutes, stirring occasionally.{"\n"}
        4- Add the water, curcumin, salt, turn heat to high, bring to a boil; cover. {"\n"}
        5- Reduce heat to low and simmer (covered) for about 15-20 min or until  the pumpkin  and carrots  are tender.{"\n"}
        6- Remove from heat and use an immersion blender to puree the soup until smooth.{"\n"}
        7- Serve  hot with  toasted pumpkin seeds, and ground black pepper on top. You can also eat it with some cooked Chickpea vegan protein like seitanr.{"\n"}



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

export default PumpkinSoup;