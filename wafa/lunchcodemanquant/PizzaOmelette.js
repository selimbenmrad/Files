import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PizzaOmelette(){
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

        1- 3 eggs .{"\n"}
        2- salt and pepper .{"\n"}
        3- 15 g  (1 tbsp) of shredded white cheese ( Sicilin Cheese).{"\n"}
        4- 30g (2tbsp) of shredded mozzarella cheese .{"\n"}
        5- 1 tbsp of olive oil
        6- 2 tbsp of tomato sauce .{"\n"}
        7- garnish : chopped parsely, olive , chopped green capsicum.{"\n"}



















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Beat the eggs  with a whisk until the yolks and whites are completely combined. Season the eggs with salt and pepper.{"\n"}
        2- Heat the olive oil in a non-stick or cast iron skillet over medium-low heat. Swirl the olive oil to completely coat the pan. Then turn the heat down to low. {"\n"}
        3- Add the eggs to the pan  and the Sicilien Cheese, swirling quickly to cover the bottom. Adjust the heat if needed so that the bottom doesn't brown too quickly.{"\n"}
        4- When the omelet is almost set, spoon the warmed tomato sauce over all of it. Cover the tomato sauce with the shredded mozzarella cheese. Cook for 30 seconds, until the bottom is just about to brown.{"\n"}
        5- Cook until the cheese is melted and everything is heated through{"\n"}
        6- serve with a little chopped parsley, slice of green capsicum  and some olives. {"\n"}
















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

export default PizzaOmelette;
