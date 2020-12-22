import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";


const CarrotJuice = () => {
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
      1-  1kg Carrots.{"\n"}
      2-  1 Untreated lemon.{"\n"}
      3-  1 Untreated orange .{"\n"}

          <Text style={styles.title}>
            Preparation:{"\n"}
          </Text>

      1-  Peel the carrots and cut them into slices.{"\n"}
      2-  Cook them for 10 minutes in boiling water.{"\n"}
      3-  Drain them and let cool.{"\n"}
      4-  Mix the carrots with the lemon and orange juices.{"\n"}
      5-  Serve very chilled.{"\n"}
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


export default CarrotJuice;
