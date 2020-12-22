import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

const image = { uri: "https://images.pexels.com/photos/4113888/pexels-photo-4113888.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"};

  const Introduction = () => {
      return (
        <SafeAreaView style={styles.container}>
         <ImageBackground source={image} style={styles.image}>
           <ScrollView style={styles.scrollView}>

          <Text style={styles.text}>

          <Text style={styles.title}>
          Introduction: {"\n"}
          </Text>

        Although we do not recommend a specific diet, we believe choosing food consciously is very important.
        As there is an old saying " we are what we eat", we highly encourage our app users to be more mindful of the quality of food they are consuming. {"\n"}
{"\n"}
        As general guidance, we encourage a diet consisting of food rich in nutrients, like fruits vegetables, and quality animal products.
        we also recommend a diet low in sugar, salt, and saturated fat, as those ingredients have been shown to be harmful to our health.
        .{"\n"} {"\n"}
        In this section, we will provide many recipes that we judge are high in nutrients and healthy.
        </Text>

        </ScrollView>
        </ImageBackground>
          </SafeAreaView>

        );
        }

        const styles = StyleSheet.create({

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
           justifyContent: "center",
           opacity: 0.75,
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
           fontSize: 17,
          fontFamily: "serif",
           textAlign: "justify",
           lineHeight: 30,
           fontWeight: "bold",
         },
        });

export default Introduction;
