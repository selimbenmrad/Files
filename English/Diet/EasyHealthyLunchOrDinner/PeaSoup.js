import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PeaSoup(){
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
        1-  150 g of peas, fresh or frozen.{"\n"}
        2-  1 small onion, chopped .{"\n"}
        3-  2 tbsps of olive oil .{"\n"}
        4-  1/4 cup of parsley.{"\n"}
        5-  1 artichoke heart.{"\n"}
        6-  1/4 cup of spinach.{"\n"}
        7-  2 cloves of garlic, minced.{"\n"}
        8-  Tsp of curcumin.{"\n"}
        9-  Pinch of salt and pepper, to taste.{"\n"}
       10-  2 cups (500 ml) water .{"\n"}



        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- In a saucepan, heat 2 tbsps of olive oil, then add the onion and garlic and sauté gently until translucent, stirring occasionally.{"\n"}
        2- Add the persely , spinach and diced peas, and stir  about 4 min.{"\n"}
        3- Pour 2 cups of hot water, add the artichoke and season with salt, pepper and curcumin.{"\n"}
        4- Simmer and cook over  medium heat for about 15-20 min, until the peas and artichoke are tender. Then remove from heat.{"\n"} 
        5- Pour the peas soup onto plates and serve hot.{"\n"}



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

export default PeaSoup;