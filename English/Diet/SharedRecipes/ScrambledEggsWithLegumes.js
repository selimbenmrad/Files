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
        4-  1 green pepper(Your favorite type){"\n"}
        5-  3 table spoons of cheese (we recommend real cheese or a vegan alternative){"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>

1- empty the tomato and peppers from their seeds.{"\n"}
2- wash the tomatoes, peppers, and parsley with water.{"\n"}
3- In a bowl, cut the tomatoes, peppers, and parsley into small pieces.{"\n"}
4- add the eggs and cheese to the bowl, then mix.{"\n"}
5- put 3 tablespoons of oil in a casserole (preferably olive or coconut oils because they are not harmful to your health), and then cook while stirring until the eggs are hard.  {"\n"}


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
