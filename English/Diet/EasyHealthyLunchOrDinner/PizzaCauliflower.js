import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function PizzaCauliflower(){
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

        1- 1 small to medium sized head of cauliflower .{"\n"}
        2- 1 egg .{"\n"}
        3- 1 cup  of tomato sauce .{"\n"}
        4- 1 cup of mozzarella cheese.{"\n"}
        5- 1/2 white cheese ( low fat).{"\n"}
        6- 1 tbsp of olive oil.{"\n"}
        7- 1/2 box of tuna .{"\n"}
        8- sea salt and pepper, to taste .{"\n"}
        9- garnish : chopped parsely, olive .{"\n"}




















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- Preheat oven to 360 degrees c.{"\n"}
        2- Remove the stems from the cauliflower and cut into chunks, Place the cauliflower into a food processor and pulse it until it resembles the texture of rice.{"\n"}
        3- place it in a kitchen towel and squeeze all the liquid out of it. Be sure to squeeze as much liquid as humanly possible.{"\n"}
        4- Combine the cauliflower, egg and 1/2 cup  mozzarella cheese, and seasonings. Stir until a dough texture forms.{"\n"}
        5- Spread the cauliflower mixture out onto lightly greased parchment paper or a pizza pan in the shape of a pizza crust.{"\n"}
        6- Bake the crust for approximately 10-15 min (depending on your oven), or until the crust is golden and crispy .{"\n"}
        7- when the crust is golden remove it from the oven and add  tomato sauce  and cheese on the top.{"\n"}
        8- Place the pizza back in the oven , bake for about 2-5 min until the  mozzarelle cheese melts .{"\n"}
        9- Top with tuna , white cheese, parsely and olive, then Slice  and serve warm .{"\n"}


















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

export default PizzaCauliflower;
