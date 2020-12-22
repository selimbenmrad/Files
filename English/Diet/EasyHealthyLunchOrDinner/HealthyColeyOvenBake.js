import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const HealthyColeyOvenBake= () => {
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
        1:  4 firm white fish fillets.{"\n"}
        2:  Zucchini (slice).{"\n"}
        3:  Olive oil.{"\n"}
        4:  Cherry tomatoes.{"\n"}
        5:  Green bean.{"\n"}
        6:  Salt.{"\n"}
        7:  Chopped flat-leaf parsley.{"\n"}

      <Text style={styles.title}>
        Preparation:{"\n"}
      </Text>

        1: Heat the oven to 200°C.{"\n"}
        2: Put the fish and courgettes into a large baking dish.{"\n"}
        1: Drizzle with half  the oil. Cook for 5 minutes.{"\n"}
        3: Add the cherry tomatoes and green beans to the dish.{"\n"}
        4: Season to taste with salt and drizzle with the remaining oil.{"\n"}
        5: Cook for a further 15 minutes.{"\n"}
        6:Sprinkle with the parsley and serve immediately.{"\n"}

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

export default HealthyColeyOvenBake;
