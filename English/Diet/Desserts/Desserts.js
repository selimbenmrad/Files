import * as React from 'react';
import { ImageBackground, StyleSheet, Text, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';




function Desserts({ navigation }){

  return (

    <ScrollView style={styles.container}>

    <Card  image={{uri : "https://cdn.pixabay.com/photo/2017/05/11/19/44/fruit-2305192_1280.jpg"}}>
      <Button title="Fruit Salad"  onPress={() => navigation.navigate('Fruit Salad')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
    </Card>

          <Card  image={{uri : "https://media.istockphoto.com/photos/healthy-dessert-with-chia-seeds-blueberries-strawberries-raspberries-picture-id1091961300?b=1&k=6&m=1091961300&s=170667a&w=0&h=Ysg2tJ_EEkfxOZGDq7ufcUWfD-_Rn0OPa5CzFWM5coU="}}>
              <Button title="Chia Seed And Fruit Pudding"  onPress={() => navigation.navigate('Chia Seed And Fruit Pudding')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
            </Card>
            <Card  image={{uri : "http://www.ithoughtiknewmama.com/wp-content/uploads/2012/08/NutBalls-GoodGirlGoneGreen.jpg"}}>
                <Button title="Basic Energy Balls"  onPress={() => navigation.navigate('Basic Energy Balls')} buttonStyle={{backgroundColor: '#20b2aa'}}/>
              </Card>
  </ScrollView>




    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "black",
      fontSize: 30,
      fontWeight: "bold"
    }
  });


export default Desserts;
