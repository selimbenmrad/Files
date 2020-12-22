import * as React from 'react';
import { ImageBackground, StyleSheet, Text, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';




function EasyHealhyBreakfast({ navigation }){

  return (

    <ScrollView style={styles.container}>

        <Card  image={{uri : "https://cdn.pixabay.com/photo/2020/06/14/15/55/dates-5298397_1280.jpg"}}>
          <Button title="Dates oats"  onPress={() => navigation.navigate('Dates Oats')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>
        <Card  image={{uri : "https://cdn.pixabay.com/photo/2020/06/14/15/55/dates-5298397_1280.jpg"}}>
          <Button title="High Protein Bars"  onPress={() => navigation.navigate('High Protein Bars')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>
        <Card  image={{uri : "https://cdn.pixabay.com/photo/2016/05/26/19/49/strawberry-smoothie-1418212_960_720.jpg"}}>
          <Button title="Watermelon Smoothie"  onPress={() => navigation.navigate('Watermelon Smoothie')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://cdn.pixabay.com/photo/2020/06/12/07/30/eggs-5289499_960_720.jpg"}}>
          <Button title="Scrambled eggs with legumes"  onPress={() => navigation.navigate('Scrambled Eggs With Legumes')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://cdn.pixabay.com/photo/2020/06/12/07/30/spinach-5289500_960_720.jpg"}}>
          <Button title="Scrambled eggs with Spinach"  onPress={() => navigation.navigate('Scrambled Eggs With Spinach')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://cdn.pixabay.com/photo/2017/05/11/19/44/fruit-2305192_1280.jpg"}}>
          <Button title="Fruit Salad"  onPress={() => navigation.navigate('Fruit Salad')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://images.pexels.com/photos/1564585/pexels-photo-1564585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.jpg"}}>
          <Button title="Green Smoothie Bowl"  onPress={() => navigation.navigate('Green Smoothie Bowl')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://media.istockphoto.com/photos/breakfast-with-overnight-oatmeal-picture-id917273350"}}>
          <Button title="Almonds Overnight Oats"  onPress={() => navigation.navigate('Almonds Overnight Oats')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>
        <Card  image={{uri : "https://media.istockphoto.com/photos/bowl-of-homemade-oatmeal-porridge-with-banana-blueberries-and-almonds-picture-id546787366"}}>
          <Button title="Porridge"  onPress={() => navigation.navigate('Porridge')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://media.istockphoto.com/photos/pancakes-with-banana-walnuts-and-honey-picture-id937710936"}}>
          <Button title=" Banana Oatmeal Pancakes"  onPress={() => navigation.navigate('Banana Oatmeal Pancakes')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "http://www.lesfoodies.com/_recipeimage/266784/soupe-froide-au-concombre-aux-graines-lin.jpg"}}>
          <Button title=" Cold Cucumber Soup With Flax Seeds"  onPress={() => navigation.navigate('Cold Cucumber Soup With Flax Seeds')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
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




export default EasyHealhyBreakfast;
