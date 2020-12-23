import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function CrunchyVeggiePastaWithGrilledChicken(){
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

        1- 100 g whole-wheat bow-tie pasta (300 g after cooking) .{"\n"}
        2- 1 small onion.{"\n"}
        3- 6 cups baby spinach, chopped.{"\n"}
        4- 4 cloves garlic, minced.{"\n"}
        5- 1 fennel bulb, diced.{"\n"}
        6- 3 carrots, diced.{"\n"}
        7- 200 g chicken breast, diced .{"\n"}
        8- 50 g almond.{"\n"}
        8- 2 tbsp of extra-virgin olive oil.{"\n"}
        9- 1 teaspoon of curcumin and  pinch of salt and pepper to tase .{"\n"}





















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Cook pasta according to packet instructions (Pasta cooked properly should be al dente—a little chewy),Drain and set aside.{"\n"}
        2- While the pasta is cooking, prepare the vegetables. In a large frying pan, heat oil over medium heat.{"\n"}
        3- Add spinach and onions and cook (4 min).{"\n"}
        4- Add fennal, carrots, salt, curcumin and pepper; stir and let it cook until fennel lightly browned (5 minutes).{"\n"}
        5- add the pasta and Stir with other ingredients (2 min),then remove from heat. {"\n"}
        6- Heat the oil in a medium skillet over medium-high heat.{"\n"}
        7- Season the pieces of the chicken breasts with salt and pepper.Cook until firm to the touch, (5 min).{"\n"}
        8- combine Sauteed vegtable, pasta and the chicken and pour them transfer into plate.{"\n"}
        9- topping the plate with almond and enjoy it.{"\n"}

















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

export default CrunchyVeggiePastaWithGrilledChicken;
