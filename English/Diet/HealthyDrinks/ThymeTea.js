import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

    const ThymeTea = () => {
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
              1-   Dried thyme (1 level tablespoon per person).{"\n"}
              2-   Water.{"\n"}
              3-   Honey.{"\n"}
              4-   Lemon (optional){"\n"}

          <Text style={styles.title}>
            Preparation:{"\n"}
          </Text>

              1-  Boil the water, then pour it over the thyme.{"\n"}
              2-  Cover and let steep for 10.{"\n"}
              3-  Filter and add honey and lemon.{"\n"}

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


    export default ThymeTea;
