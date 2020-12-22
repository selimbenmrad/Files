import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PancakeLactovegeterain(){
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

        1- 80 g ( 8 tbsp) of oatmeal.{"\n"}
        2- 50 g of ground almound.{"\n"}
        3- 2 banana (180 g).{"\n"}
        4- 1 cup (200 ml) of semi-skimmed milk.{"\n"}
        5- 1 tbsp of olive oil.{"\n"}
        6- for garnish: raisin, almound , honey
        6- Utensil:blender.{"\n"}









        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


          1- mix the oatmeal, milk,banana and  ground almound using the blender until you get a smooth paste.{"\n"}
          2- Heat 1 tbsp of olive oil in a crepe maker and form 3 small thick pancakes. {"\n"}
          3- Cook them on both sides for about 3 minutes.{"\n"}
          4- Repeat with the rest of the dough.{"\n"}
          5- Form 2 equal piles of pancakes and garnish the tops with raisin and almound,honey then serve. {"\n"}















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

export default PancakeLactovegeterain;
