import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function WhiteBeansWithSauteedFennal(){
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

        1- 1 fennel bulb, diced.{"\n"}
        2- 200 g white beans soaked in water overnight .{"\n"}
        3- 5 cloves garlic, minced.{"\n"}
        4- 2 tbsp of extra-virgin olive oil.{"\n"}
        5- Handful of black and green olives.{"\n"}






















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Strain out the white beans of the water( after it have been soaked in water overnight).{"\n"}
        2- Fill the saucepan with  fresh water twice the amount of beans and bring to tho boil (15min).{"\n"}
        3- While the beans is cooking,heat oil over medium heat in a large frying pan.{"\n"}
        4- Add fennal, garlic and  salt, stir and let it cook until fennel lightly browned (5 minutes).{"\n"}
        5- When the white beans are tendre and well cooked, drained and add it into fryingpan. {"\n"}
        6- Mix the beans with fennal then romove the from the heat. {"\n"}
        7- Pour the mixture into a dish and drizzle it with olive oil.{"\n"}
        8- Garnish with some olive and serve.{"\n"}

        PS: you could used canned cannellini beans and add it directly in frying pan to be sauteed with the fennel ( skip step 1 and 2).{"\n"}


















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
        fontSize: 27,
        fontWeight: "bold",
          lineHeight: 70,

      },

      text: {
        padding: 25,
        color: "black",
        fontSize: 18,
        fontWeight: "normal",
        textAlign: "justify",
        lineHeight: 30,
      },
      Textetitle: {
        color: "#fa8072",
        fontSize: 22,
        fontWeight: "bold",
          lineHeight: 70,

      },


               });

export default WhiteBeansWithSauteedFennal;