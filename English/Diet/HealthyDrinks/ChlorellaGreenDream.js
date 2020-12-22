import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const ChlorellaGreenDream = () => {
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

        1:  3g pack Sun chlorella granules.{"\n"}
        2:  TBSP mango .{"\n"}
        3:  TBSP pineapple .{"\n"}
        4:  oz orange juice.{"\n"}
        5:  oz agave agave nectar .{"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

          1-  In a blender add all ingredients with ice.{"\n"}
          2-  Garnish with strawberries or pineapple.{"\n"}
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


export default ChlorellaGreenDream;
