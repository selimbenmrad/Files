import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function FruitSalad(){
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
1-  200 grams strawberries{"\n"}
2-  2 bananas{"\n"}
3-  2 peaches{"\n"}
4-  4 apricots{"\n"}
5-  1 apple{"\n"}
6-  1 orange{"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        Cut all the ingredients into small cubes then mix them

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
export default FruitSalad;
