import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function Hrira(){
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
        1- 50g chickpeas.{"\n"}
        2- 50g lentils.{"\n"}
        3- 250 g fresh tomato.{"\n"}
        4- a handful of parsley.{"\n"}
        5- 20g of Celery.{"\n"}
        6- 100g of onion.{"\n"}
        7- 2 tablespoon olive oil.{"\n"}
        8- 1 teaspoon of gigember.{"\n"}
        9- tongs of saffron.{"\n"}
        10- water (depends on the desired texture, but should looks like a velout).{"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1-  Put all the ingredients together to bowl for 30 minutes with water.{"\n"}
        2-  Then put in the blender, to obtain a velout.{"\n"}
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
export default Hrira;
