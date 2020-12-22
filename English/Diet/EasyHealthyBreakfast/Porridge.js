import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function Porridge(){
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
          1-   1 cup oats, rolled, regular, dry {"\n"}
          2-   2 ½ cups Water, municipal {"\n"}
          3-   1 teaspoon Salt, table {"\n"}
          4-   1 tablespoon Sugars, granulated {"\n"}
          5-   2 Bananas, raw{"\n"}
          6-   1 pinch Spices, cinnamon, ground{"\n"}
          7-   ½ cup Milk, reduced fat, fluid, 2% milkfat, with added vitamin A  {"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


         1- In a saucepan, combine the oats, water, salt, sugar, bananas and cinnamon. {"\n"}
         2- Bring to a boil, then reduce heat to low, and simmer until the liquid has been absorbed. {"\n"}
         3- stirring frequently. Pour into bowls, and top each with a splash of cold milk. {"\n"}


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

export default Porridge;
