import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function GreenSmoothieBowl(){
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
       1-  2 cups frozen Fruit and Veggie Fruit 'n Greens {"\n"}
       2-  1/2 cup coconut milk {"\n"}
       3-  1/4 avocado, peeled and pitted {"\n"}
       4-  2 teaspoons granola {"\n"}
       5-  1 tablespoon sliced almonds {"\n"}
       6-  2 teaspoons chia seeds {"\n"}
       7-  1/4 cup frozen DOLE Blueberries, partially thawed{"\n"}
       8-  1 kiwi fruit, peeled and sliced {"\n"}
       9-  2 teaspoons agave nectar or honey {"\n"}

        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>

        1-  Combine frozen fruit blend, coconut milk, and avocado in blender. {"\n"}
        2-  Cover; blend until smooth, scraping down sides as needed. {"\n"}
        3-  Top smoothie bowls with granola, almonds, chia, and fruit. Drizzle with agave nectar. {"\n"}
        4-  TIP: Use a small cookie cutter to cut fun shapes out of sliced kiwi. {"\n"}

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

export default GreenSmoothieBowl;
