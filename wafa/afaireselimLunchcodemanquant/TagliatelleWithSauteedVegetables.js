import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function TagliatelleWithSauteedVegetables(){
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

        1- 100 g  tagliatelle (300 g after cooking) .{"\n"}
        2- 100 g green beans chopped.{"\n"}
        3- 100 g  of red cabbage, chopped.{"\n"}
        4- 3 clove garlic, minced.{"\n"}
        5- 1 green pepper, thinly sliced.{"\n"}
        6- 4 tomates, Chopped.{"\n"}
        7- 30g (2tbsp) of shredded mozzarella cheese .{"\n"}
        8- 2 tbsp of olive oil.{"\n"}
        9- 1 teaspoon of curcumin and  pinch of salt and pepper to tase.{"\n"}
        10- garnish : chopped parsely, olive , chopped green capsicum , 1 boiled egg (Optional).{"\n"}




















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Cook pasta according to packet instructions. Drain and set aside.{"\n"}
        2- While the pasta is cooking, prepare the vegetables. In a large frying pan, heat oil over medium heat.{"\n"}
        3- Add garlic, green beans, cabbage,tomato and peppers; sauté 5 minutes . {"\n"}
        3- Add curcumin ,salt and pepper and 1/2 cup of Water and Cook over low heat 5 minutes, or until vegetables are tender and liquid absorbed {"\n"}
        4- Pour vegetables and mozzarella over tagliatelle and toss to coat{"\n"}
        5- Garnish  with chopped parsely, olive , chopped green capsicum , boiled egg if desired  and enjoy .{"\n"}

















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

export default TagliatelleWithSauteedVegetables;
