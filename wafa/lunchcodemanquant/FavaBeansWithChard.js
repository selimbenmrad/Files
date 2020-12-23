import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function FavaBeansWithChard(){
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
        1-  300g dry Fava Beans.{"\n"}
        2-  2 tsp ground Cumin.{"\n"}
        3-  Juice of 1 small Lemon.{"\n"}
        4-  2 tbsps of olive oil.{"\n"}
        5-  Salt and Pepper to taste. {"\n"}
        6-  8 Chard Leaves. {"\n"}


        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>

        
        1- Soak the dried fava beans in cold water overnight.{"\n"}
        2- Drain and remove shells .{"\n"}
        3- Place shelled beans in a medium saucepan and cover with  cold water.{"\n"}
        4- Add with salt,pepper and lemon juice and bring mixture to a boil.{"\n"}
        5- Cook in stocks until the fava beans become tender about 45 min to one hour, then drain.{"\n"}
        6- Dress the beans with olive oil and sprinkle cumin .{"\n"}
        7- serve with chard leaves.{"\n"}
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

  export default FavaBeansWithChard;
