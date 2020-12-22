import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function  HealthyBolognese(){
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

        1- 100 g whole-wheat pasta (300 g after cooking).{"\n"}
        2- 8 chopped tomates (or 500 g crushed tomatoes).{"\n"}
        3- 5 cloves garlic,minced.{"\n"}
        4- 1 medium onions, chopped.{"\n"}
        5- 2 cup of shredded fresh pupkin.{"\n"}
        6- 200 g of lean beef mince.{"\n"}
        7- 1 tbsp of extra-virgin olive oil.{"\n"}
        8- 1 teaspoon of curcumin and  pinch of salt and pepper to tase.{"\n"}
         














        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>


        1- Place the wholemeal pasta in a deep saucepan full of salted boiling water and cook according to packet instructions, then drain.{"\n"}
        2- Heat the olive oil in a large saucepan over a medium heat.{"\n"}
        3- Add the mince and the onion and fry for 5 min, stirring occasionally, until the mince is browned and the onions softened.{"\n"}
        4- Add the shredded pumpkin,tomatoes,curcumin, salt and black pepper and cup of water.{"\n"}
        5- Stir well and bring to the boil, Cover with a lid, reduce the heat to simmer for 15-20 min, until the sauce has thickened.{"\n"}
        6- Pour the pasta into dish, spoon Bolognese sauce over it and sprinkle with parsley(optional) and enjoy.{"\n"}
       







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

export default HealthyBolognese;
