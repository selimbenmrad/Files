import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";


const ChamomileTea = () => {
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
          1-  4 teaspoons dried chamomile.{"\n"}
          2-  Hot water .{"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

            1: Bring water to a boil in the kettle on high heat.{"\n"}
            2: Rinse the teapot with1/2 cup of hot water.{"\n"}
            3: Add 2 teaspoons of chamomile for cup water.{"\n"}
            4: Place 4 teaspoons of chamomile into the jug.{"\n"}
            4: Pour in 2 cups of boiling water from the kettle.{"\n"}
            5: Put the lid back on and let the tea brew for 10 min.{"\n"}
            6: Pour the brewed tea into tea cups.{"\n"}
            7: You may serve the tea with honey or lemon juice.{"\n"}
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

export default ChamomileTea;
