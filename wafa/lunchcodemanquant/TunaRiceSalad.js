import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function TunaRiceSalad(){
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

        1- 200 g fresh tuna steaks, 3cm thick. {"\n"}
        2- 1 cup (200g) brown or basmati rice, rinsed and drained. {"\n"}
        3- 2 cup of water (for 1 cup of rice we need 2 cups of water). {"\n"}
        4- 1 medium cucumber. {"\n"}
        5- 1 cup cherry tomatoes. {"\n"}
        6- 2 bell pepper. {"\n"}
        7- 1/2 cup olives. {"\n"}
        8- 3 tbsp of extra-virgin olive oil. {"\n"}
        9- 1 tsp cumin. {"\n"}
        10- Pinch of salt and pepper, to taste. {"\n"}

















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>

        1- In a large pot, bring the water to a boil over high heat. {"\n"}
        2- Once boiling, stir in the rice with a pinch of salt and reduce the heat to medium. {"\n"}
        3- Cover and cook, stirring occasionally, cook until the liquid is absorbed and the rice is tender about 20 min. {"\n"}
        4- Cut the cucumber and bell pepper into pieces and add it to the rice, add cherry tomatoes, olives and tbsp of olive oil, and mix. {"\n"}
        5- Place tuna in a glass dish. Prepare the Seasoning by whisking together 1tbsp olive oil, cumin, pepper, and salt. Pour it over fish and turn to coat. {"\n"}
        6- Warm 1 tbsp of olive oil in a skillet over medium-high heat. {"\n"}.
        7-Place tuna and Cover with lid. Cook, turning once, just until tuna begins to flake easily when tested with a fork, about 7 min. {"\n"}
        8- Place hot tuna and rice salad on the serving dish and enjoy. {"\n"}



















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

export default TunaRiceSalad;
