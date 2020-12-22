import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function ScrambledEggsWithLegumes(){
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
        1-  4 eggs(We highly recommend that the eggs are pasture raised) {"\n"}
        2-  1 tomato {"\n"}
        3-  one table spoon of parsley{"\n"}
        4-  2 handful of spinach(Your favorite type){"\n"}
        5-  Optionally a handful of cheese.{"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>

        1-  Wash the spinach and the parsley.{"\n"}
        2-  Cut the spinach the parsley in small pieces.{"\n"}
        3-  Mix all the ingredient well together.{"\n"}
        4-  Put on gas while mixing until the eggs are hard.{"\n"} {"\n"}

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



export default ScrambledEggsWithLegumes;
