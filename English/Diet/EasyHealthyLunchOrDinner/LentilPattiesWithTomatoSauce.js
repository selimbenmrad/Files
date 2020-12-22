import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function LentilPattiesWithTomatoSauce(){
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

        1- 150 g lentils.{"\n"}
        2- 3 tbsp of oatmeal.{"\n"}
        3- 2 carrots.{"\n"}
        4- 1 egg.{"\n"}
        5- 1 tbsp of olive oil.{"\n"}
        6- 6 tomatoes ( for the sauce).{"\n"}
        7- 1 small onion ( for the sauce).{"\n"}
        8- 1 tbsp of olive oil ( for the sauce).{"\n"}
        9- 1/2 cup of celery ( for the sauce).{"\n"}
        10- pinch of salt , pepper , 1 tbsp of curcumin ( for the sauce).{"\n"}

















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1-  Cook  the lentils and the carrot in a pot of salted boiling water (15min).{"\n"}
        2-  Drain at the end of cooking then mix them using blender.{"\n"}
        3-  Add the eggs and the oatmeal to the blender and mix again.{"\n"}
        4-  Heat a drizzle of olive oil in a pan.{"\n"}
        5-  Take small piles of lentil mixture and place them in the pan.{"\n"}
        6-  Cook, 3 to 4 minutes per side,until the patties are golden brown.{"\n"}
        7-  Repeat the operation until all the preparation is used up.{"\n"}
        8-  Meanwhile, mix the tomatoes, celery,onion,salt,pepper and curcumin using the blender.{"\n"}
        9-  Heat 1 tbsp of olive oil in pan.{"\n"}
        10- Pour the tomato mixture into the pan and let it simmer in high heat(10min), stir.{"\n"}
        11- put the lentils patties in a plate and serve it hot with the tomato sause.{"\n"}
















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

export default LentilPattiesWithTomatoSauce;
