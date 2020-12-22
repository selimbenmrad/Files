import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";


const DarckChocolatMandarins= () => {
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
        1- 1- 3 mandarins. {"\n"}
        2- 50 g of dark chocolate (at least 70% cocoa solids). {"\n"}
        3- Grated coconut. {"\n"




      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

      1- Peel the mandarins. Separate the quarters. {"\n"}
      2- Put the dark chocolate to melt in a bain-marie gently. {"\n"}
      3- Once the chocolate is melted and very smooth; dip half of your mandarins in the chocolate. {"\n"}
      4- Then place your fruit on baking paper. {"\n"}
      5- Sprinkle quarters of your mandarins with coconut. {"\n"}
      6- Let cool well and place your chocolate mandarin quarters on a presentation plate, enjoy. {"\n"}

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

export default DarckChocolatMandarins;
