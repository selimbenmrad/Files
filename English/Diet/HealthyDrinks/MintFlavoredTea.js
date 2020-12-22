import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

    const MintFlavoredTea = () => {
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

            1-   1bunch of fresh mint.{"\n"}
            2-   50cl Water.{"\n"}
            3-   A little honey.{"\n"}


          <Text style={styles.title}>
            Preparation:{"\n"}
          </Text>

            1-  Bring the water to a boil in a saucepan.{"\n"}
            2-  Pour in a quarter of the boiling water.{"\n"}
            3-  Add a little honey.{"\n"},
            4-  Pour the rest of the boiling water over it.{"\n"}
            5-  Stir with a spoon and let steep for 5 min.{"\n"}
            6-  Serve very hot.{"\n"}


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



    export default MintFlavoredTea;
