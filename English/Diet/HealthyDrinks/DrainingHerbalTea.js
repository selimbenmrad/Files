import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";


    const DrainingHerbalTea = () => {
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
              1-  20 g cherry stems.{"\n"}
              2-  6 c. 1/2 teaspoon dried artichoke leaves.{"\n"}
              3-  30 g of burdock roots.{"\n"}
              4-  c. 1/2 teaspoon dried peppermint leaves.{"\n"}

          <Text style={styles.title}>
            Preparation:{"\n"}
          </Text>

          1-  Boil 1L of water for 10 min .{"\n"}
          2-  Add cherry stems and burdock roots to a boil in water.{"\n"}
          3-  Add the artichoke and peppermint leaves.{"\n"}
          4-  Filter.{"\n"}

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


    export default DrainingHerbalTea;
