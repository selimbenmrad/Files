import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function HomemadeAlmondMilk= () => {
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
        1-  1 cup raw almonds (soaked overnight in cool water or 1-2 hours in very hot water).{"\n"}
        2-  4 cups filtered water .{"\n"}
        3-  Utensil:a high powered blender.{"\n"}





      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

       1- 1-Drain the soaked almonds and rinse them well. (Discard the soaking water.).{"\n"}
       2- Combine all of the almonds and fresh water in a high-speed blender and blend until creamy and smooth.{"\n"}
       3 -Strain the almond milk through a nut-milk bag or cheese cloth, squeezing well to extract the extra liquid.{"\n"}
       4- Store the almond milk in an airtight container in the fridge for up to 4 days. (Though best when fresh. Shake well before drinking, as it tends to separate.).{"\n"}






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


export default HomemadeAlmondMilk;
