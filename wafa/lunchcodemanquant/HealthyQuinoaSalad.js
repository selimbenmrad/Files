import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const HealthyQuinoaSalad= () => {
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
      1-  Spinach (about 3-4 cups) chopped.{"\n"}
      2-  Quinoa (1 cup dry). {"\n"}
      3-  Oranges (I used clementines) .{"\n"}
      4-  1/3 cup almonds chopped or slivered almonds.{"\n"}
      5-  Scallion or green onions.{"\n"}
      6-  Dressing: (optional).{"\n"}
      7-  1/4 cup olive oil.{"\n"}
      8-  Juice from 1/2 a lime.{"\n"},
      9-  Salt/Pepper to taste.{"\n"}
     10-  1/2 tsp onion powder.{"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

    1-   Prepare you Quinoa.{"\n"}
    2-   Let simmer for 15 minutes In boiling water.{"\n"}
    3-   Rinse your spinach, chops it roughly.{"\n"}
    4-   Once quinoa is done let it cool for 10 minutes.{"\n"}
    5-   Add it to the spinach.{"\n"}
    6-   Chops your oranges and almonds.{"\n"}
    7-   The ingredients are placed in a bowl and mixed.{"\n"}
    8-   Prepare dressing, in a small bowl.{"\n"}
    9-   Add all the ingredients to and stir really well.{"\n"}
    10-  Drizzle over the quinoa salad and serve.{"\n"}
    11-  Optional: top with finely chopped green onions.{"\n"}
    12-  Makes about 4 servings.{"\n"}
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
export default HealthyQuinoaSalad;
