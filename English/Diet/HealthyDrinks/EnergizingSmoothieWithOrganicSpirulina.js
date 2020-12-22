import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const EnergizingSmoothieWithOrganicSpirulina = () => {
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
          1-  1/2 ripe banana.{"\n"}
          2-  25 g of organic coconut powder {"\n"},
          3-  250 ml of water {"\n"}
          4-  2 teaspoons of organic spirulina powder{"\n"}
          5-  1 teaspoon of peanut butter{"\n"}
          6-  1 teaspoon of chia seed {"\n"}
          7-  1/2 teaspoon of cinnamon {"\n"}
          8-  1 teaspoon of raw chocolate {"\n"}
          9-   1 pinch of seeds of your choice {"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

          1-  In a blender put the cut bananas and spirulina.{"\n"}
          2-  Add the peanut butter,chia seeds and cinnamon.{"\n"}
          3-  Mix the coconut powder with the water in order to make the milk.{"\n"}
          4-  Add the mixture into the preparation, mix everything.{"\n"}
          5-  Pour everything into a glass.{"\n"}
          6-  Sprinkle with raw chocolate and seeds of your choice .{"\n"}


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
                           textAlign: "justify",

                         },
                        });



export default EnergizingSmoothieWithOrganicSpirulina;
