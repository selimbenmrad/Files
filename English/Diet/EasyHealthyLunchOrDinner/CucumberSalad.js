import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function CucumberSalad(){
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
        1-  2 Cucumbers {"\n"}
        2-  2 Fresh Tomatoes {"\n"}
        3-  a handful of capers {"\n"}
        4-  1/4 of a red onion{"\n"}
        5-  2 table spoons of olive oil{"\n"}
        6-  1 tea spoon of ground pepper.{"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>
        1-  Remove the seeds from the Cucumber.{"\n"}
        2-  Cut the vegetables in small cubes .{"\n"}
        3-  Cut the parsley in small pieces.{"\n"}
        4-  Add the capers and the parsley.{"\n"}
        5-  Add olive oil and peppers.{"\n"}
        6-  Mix well and rest in the fridge for an hour.{"\n"}

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

export default CucumberSalad;
