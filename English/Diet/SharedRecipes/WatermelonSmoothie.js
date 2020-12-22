import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function WatermelonSmoothie(){
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
      1-  2 glasses of Milk (vegetable milk works great) {"\n"}
      2-  1 Medium Bannana {"\n"}
      3-  300g of Watermelon ( A piece of Watermelon as big as a bannana){"\n"}
      4-  1 tea spoon of Chia seeds ( Optional but contains a lot of nutrients){"\n"}



        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


      -  In a food proccesor or similar device, mix all ingredients together.{"\n"}

                                                                  </Text>

                                                                  </ScrollView>
                                                                    </SafeAreaView>

                                                                  );
                                                                  }

                                                                  const styles = StyleSheet.create({

                                                                    bold: {fontWeight: 'bold'},
                                                                   container: {

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


export default WatermelonSmoothie;
