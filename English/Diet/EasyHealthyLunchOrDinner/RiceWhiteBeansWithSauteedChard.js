import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function RiceWhiteBeansWithSauteedChard(){
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

        1- 1 cup  (200g) brown or basmati rice , rinsed and drained.{"\n"}
        2- 1/2 cup (100g) white beans (overnight soked),rinsed and drained.{"\n"}
        3- 5 cloves  garlic, minced.{"\n"}
        4- 3 cups of Swiss chard leaves, chopped.{"\n"}
        5- 1  cup of  parsely, chopped.{"\n"}
        6- 2 tbsps of extra-virgin olive oil.{"\n"}
        7- 1/2 teaspoon of curcuim.{"\n"}
        8- pinch of   sea salt and pepper , to taste{"\n"}
        9- Handful of almond (optionel).{"\n"}






















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Place water and rice in saucepan, Bring to simmer on medium high and cook until the rice are tendre (10 min), then drain, fluff and set aside.{"\n"}
        2- strain out the white beans of the water( after it have been soaked in water overnight).{"\n"}
        3- Fill the saucepan with  fresh water twice the amount of beans and bring to tho boil (15min).{"\n"}
        4- While the beans is cooking,heat oil over medium heat in a large frying pan.{"\n"}
        5- Add chard leaves, garlic , parsely,salt,curcumin, and 2 tablespoons water , stir .{"\n"}
        6- Cover and let them sauteed until the leaves have wilted down and softened, (1 to 3 min).{"\n"}
        7- when the white beans are tendre and well cooked, drained and add it into fryingpan. {"\n"}
        8- add  and mix it with  beans and  sauteed chard  then romove the from the heat (2min). {"\n"}
        9- pour the mixture into a dish and drizzle it with olive oil.{"\n"}
        10- Garnish with some  almond and serve.{"\n"}

        

















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

export default RiceWhiteBeansWithSauteedChard;
