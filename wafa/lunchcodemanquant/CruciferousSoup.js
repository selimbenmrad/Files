import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function CruciferousSoup(){
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
        1-  1/4 head of green cabbage.{"\n"}
        2-  1/4 medium cauliflower.{"\n"}
        3-  1 potato, diced.{"\n"}
        4-  1 cup of green Beans.{"\n"}
        5-  1/4 parsely, chopped.{"\n"}
        6-  1 small  onion, chopped.{"\n"}
        7-  1 tbsp of olive oilve.{"\n"}
        8-  3 cups of Water.{"\n"}
        9-  2 eggs.{"\n"}
        10- pinch of salt and pepper.{"\n"}

       <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>

        1- In a saucepan over medium heat, soften the onion in the oil. {"\n"}
        2- Add the cabbage and persaly and stir (10 min).{"\n"}
        3- Add 3 cups of water  to the saucepan and bring to a boil .{"\n"}
        4- Add the potato, green beans, salt and pepper .{"\n"}
        5- Cover and  cook it  until the vegetables are tender.{"\n"}
        6- Remove from the heat and pour it in blander and mix .{"\n"}
        7- Crack 2 eggs into mixture and Return them to the heat to cook again for 3 min, stir.{"\n"}
        8- Pour into dish and decorate with some pistachio (optional)and serve.{"\n"}
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



export default CruciferousSoup;
