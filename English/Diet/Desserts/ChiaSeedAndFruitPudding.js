import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";


const ChiaSeedAndFruitPudding= () => {
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

      1-  3 plain soy yogurts or not.{"\n"}
      2-  20 cl of coconut cream (or vegetable milk).{"\n"}
      3-  20g chia seeds (link at the bottom of the recipe).{"\n"}
      4-  30 g of agave syrup (link at the bottom of the recipe).{"\n"}
      5-  1 mango.{"\n"}
      6-  Blueberries.{"\n"}
      7-  A grenade.{"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

      1-  In a salad bowl, mix the yogurts, coconut cream.{"\n"}
      2-  Add the chia seeds and agave syrup.{"\n"}
      3-  Let stand in the refrigerator for 1 hour.{"\n"}
      4-  Meanwhile, cut the mango into very small cubes.{"\n"}
      5-  You can of course put the fruits you want.{"\n"}
      6-  After an hour, the chia seeds should have swelled.{"\n"}
      7-  Place this mixture in verrines, then add the fruit.{"\n"}
      8-  Reserve again in the refrigerator.{"\n"}
      9-  Storage: in the refrigerator for a maximum of 4 days.{"\n"}


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

export default ChiaSeedAndFruitPudding;
