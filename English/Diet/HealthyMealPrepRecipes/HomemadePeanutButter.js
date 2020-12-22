import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function HomemadePeanutButter= () => {
  return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>

        <Text style={styles.text}>

        <Text style={styles.title}>
        Ingredients: {"\n"}
        </Text>
        <Text style={styles.Textetitle}>
          For one person: {"\n"}
        </Text>
        1-  500g dry-roasted unsalted peanuts.{"\n"}
        2-  1 tablespoon honey (optional).{"\n"}
        3-  Utensil:a high powered blender.{"\n"}





      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

       1- Place peanuts and honey into a blender.blend mixture until crumbly, about 30 seconds to 1 minute.{"\n"}
       2- Increase speed and blend about 1 to 2 minutes, scraping down sides of blender with a spatula, until smooth and creamy.{"\n"}
       3- Use spatula to scoop peanut butter into an airtight glass container and keep refrigerated.{"\n"}






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
   fontSize: 23,
   fontWeight: "bold",
     lineHeight: 70,

 },

 text: {
   padding: 25,
   color: "black",
   fontSize: 16,
   fontWeight: "normal",
   textAlign: "justify",
   lineHeight: 30,
 },
 Textetitle: {
   color: "#fa8072",
   fontSize: 17,
   fontWeight: "bold",
     lineHeight: 70,

 },

});


export default HomemadePeanutButter;
