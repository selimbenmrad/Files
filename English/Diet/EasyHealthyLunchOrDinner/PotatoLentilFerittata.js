import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function  PotatoLentilFerittata(){
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

        1- 1 potato ( peled, diced){"\n"}
        2- 1/2 cup of lentil.{"\n"}
        3- 1 cup of red cabbage.{"\n"}
        4- 1 cup of spinach.{"\n"}
        5- 2 tbsp of extra virgin olive oil.{"\n"}
        6- 4 eggs (We highly recommend that the eggs are pasture raised){"\n"}
        7- tbsps of curcumin, pinch of sea salt and pepper.{"\n"}














        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1-  Boiled in water the lentil and the potato until be tender.{"\n"}
        2-  Strain out them off the water and put them in a bowl.{"\n"}
        3-  Crack the eggs Beat it with a whisk until the yolks and whites are completely combined and add it to the bowl .{"\n"}
        4-  Add the cabbage, spinach, curcumin, salt and pepper and combine all together.{"\n"}
        5-  Heat the olive oil in a non-stick over medium-low heat. Swirl the olive oil to completely coat the pan.{"\n"}
        6-  Pour the  egg-vegetable mixture. to the pan and swirling quickly to cover the bottom.{"\n"}
        7-  Adjust the heat if needed so that the bottom doesn't brown too quickly.{"\n"}
        8-  Cook on one side (about 5-7 min over medium heat).{"\n"}
        9-  Flip the frittata on a plate to cook on the other side.{"\n"}
        10- Let it cook  until it is golden on both sides then remove from the heat and serve.{"\n"}









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

export default PotatoLentilFerittata;
