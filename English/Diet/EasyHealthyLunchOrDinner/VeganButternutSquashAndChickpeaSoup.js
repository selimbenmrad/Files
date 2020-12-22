import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";


const VeganButternutSquashAndChickpeaSoup= () => {
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
      1-  2 tbsp extra virgin olive oil.{"\n"}
      2-  1 large yellow onion, diced.{"\n"}
      3-  1/2 lbs cubed and peeled butternut squash.{"\n"}
      4-  1/2 cups cooked chickpeas.{"\n"}
      5-  1 tsp cumin.{"\n"}
      6-  1/2 tsp turmeric.{"\n"}
      7-  1/4 tsp cinnamon.{"\n"}
      8-  Pinch cayenne.{"\n"}
      9-  Salt.{"\n"}
     10-  3cups fresh spinach leaves.{"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

    1:  In a large pot, heat up olive oil over medium.{"\n"}
    2:  Add the onion and sauté for about 10 minutes.{"\n"}
    3:  Add the butternut squash and cooked chickpeas.{"\n"}
    4:  Cover with 2 quarts of hot water.{"\n"}
    5:  Stir in the cumin, turmeric, cinnamon.{"\n"}
    6:  Stir in the cayenne, and 1/2 tsp of salt.{"\n"}
    7:  Cover the pot, lid slightly vented.{"\n"}
    8:  Let the soup cook for 20-25 minutes.{"\n"}
    9:  Take the lid off and stir in the fresh spinach leaves.{"\n"}
   10: Let them simmer for 1-2 minutes till softened.{"\n"}
   11: Serve hot.{"\n"}
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



export default VeganButternutSquashAndChickpeaSoup;
