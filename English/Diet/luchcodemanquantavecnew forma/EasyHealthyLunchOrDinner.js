import * as React from 'react';
import { ImageBackground, StyleSheet, Text, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';




function EasyHealthyLunchOrDinner({ navigation }){

  return (

    <ScrollView style={styles.container}>

        <Card  image={{uri : "https://cdn.pixabay.com/photo/2020/06/12/07/29/food-5289498_1280.jpg"}}>
          <Button title="Cucumber Salad"  onPress={() => navigation.navigate('Cucumber Salad')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://cdn.pixabay.com/photo/2020/06/16/06/54/nicoise-salad-5304461_1280.jpg"}}>
          <Button title=" Nicoise Salad ( Green Beans Salad)"  onPress={() => navigation.navigate('Nicoise Salad')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://cdn.pixabay.com/photo/2020/06/12/07/29/food-5289497_1280.jpg"}}>
          <Button title="Hrira "  onPress={() => navigation.navigate('Hrira')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://cdn.pixabay.com/photo/2020/06/12/07/31/carrot-5289502_1280.jpg"}}>
          <Button title="Carot Salad "  onPress={() => navigation.navigate("Carot Salad")}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>
        <Card  image={{uri : "https://github.com/selimbenmrad/Files/blob/master/tomate1.jpg?raw=true"}}>
          <Button title="Tomatina Salad"  onPress={() => navigation.navigate("Tomatina Salad")}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>
        <Card  image={{uri : "https://github.com/selimbenmrad/Files/blob/master/carrot.jpg?raw=true"}}>
          <Button title="Joyful Lentils Salad"  onPress={() => navigation.navigate("Joyful Lentils Salad")}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>


        <Card  image={{uri : "https://cdn.pixabay.com/photo/2020/06/12/07/30/eggs-5289499_960_720.jpg"}}>
          <Button title="Scrambled eggs with legumes"  onPress={() => navigation.navigate('Scrambled Eggs With Legumes')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://cdn.pixabay.com/photo/2020/06/12/07/30/spinach-5289500_960_720.jpg"}}>
          <Button title="Scrambled eggs with Spinach"  onPress={() => navigation.navigate('Scrambled Eggs With Spinach')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>
        <Card  image={{uri : "https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.jpg"}}>
          <Button title="Buddha Bowl Vitaminized Winter"  onPress={() => navigation.navigate('Buddha Bowl Vitaminized Winter')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>
        <Card  image={{uri : "https://media.istockphoto.com/photos/vegetable-soup-picture-id1092632852?b=1&k=6&m=1092632852&s=170667a&w=0&h=qfOKWo9CgT9WtmFQnjbCY_4kGzt_m-t2Es9tMNinZlo="}}>
          <Button title="Vegetable Soup"  onPress={() => navigation.navigate('Vegetable Soup')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://cdn.pixabay.com/photo/2013/02/18/17/03/fava-beans-82798_1280.jpg"}}>
          <Button title="Fava Beans"  onPress={() => navigation.navigate('Fava Beans')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>
        <Card  image={{uri : "https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}}>
          <Button title="German Patato Salad"  onPress={() => navigation.navigate('German Patato Salad')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

        <Card  image={{uri : "https://images.pexels.com/photos/4409250/pexels-photo-4409250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}>
          <Button title="Kidney Bean Salad"  onPress={() => navigation.navigate('Kidney Bean Salad')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
        </Card>

          <Card  image={{uri : "https://i1.wp.com/www.2sharemyjoy.com/wp-content/uploads/2018/04/20180319_164607-e1524502948277.jpg?resize=3024%2C4032&ssl=1"}}>
            <Button title="Detox Power Bowl"  onPress={() => navigation.navigate('Detox Power Bowl')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
          </Card>

          <Card  image={{uri : "https://cdn.pixabay.com/photo/2017/01/26/18/37/burger-2011303_1280.jpg"}}>
            <Button title="Vegetarian Burger"  onPress={() => navigation.navigate('Vegetarian Burger')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
          </Card>
          <Card  image={{uri : "https://media.istockphoto.com/photos/healthy-buddha-bowl-lunch-with-grilled-chicken-quinoa-spinach-avocado-picture-id920931456?s=2048x2048"}}>
            <Button title="Buddha Bow Grilled Chicken Quinoa"  onPress={() => navigation.navigate('Buddha Bow Grilled Chicken Quinoa')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
          </Card>
          <Card  image={{uri : "https://images.eatsmarter.com/sites/default/files/styles/576x432/public/healthy-coley-oven-bake-482025.jpg"}}>
            <Button title="Healthy Coley Oven Bake"  onPress={() => navigation.navigate('Healthy Coley Oven Bake')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
          </Card>
          <Card  image={{uri : "https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}>
            <Button title="Healthy Quinoa Salad"  onPress={() => navigation.navigate('Healthy Quinoa Salad')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
          </Card>

          <Card  image={{uri : "http://dagzhsfg97k4.cloudfront.net/wp-content/uploads/2012/03/lentils2.jpg"}}>
            <Button title="Creamy Thai Sweet Potatoes And Lentils"  onPress={() => navigation.navigate('Creamy Thai Sweet Potatoes And Lentils')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
          </Card>

          <Card  image={{uri : "https://media.istockphoto.com/photos/vegetarian-chili-posole-picture-id524528916?b=1&k=6&m=524528916&s=170667a&w=0&h=JxTGpdrI6ttK_mbqtSr2Dx1L3DBMGI-KQfSqkJqaNc4="}}>
            <Button title="Vegan Butternut Squash And Chickpea Soup"  onPress={() => navigation.navigate('Vegan Butternut Squash And Chickpea Soup')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
          </Card>
          <Card  image={{uri : "https://cdn.pixabay.com/photo/2018/10/10/22/28/lentil-soup-3738547_1280.jpg"}}>
            <Button title="Lentil Soup"  onPress={() => navigation.navigate('Lentil Soup')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
          </Card>
          <Card  image={{uri : "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}>
            <Button title="Sauteed Vegetables"  onPress={() => navigation.navigate('Sauteed Vegetables')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
          </Card>
          <Card  image={{uri : "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}>
            <Button title="Potato Lentil Ferittata"  onPress={() => navigation.navigate('Potato Lentil Ferittata')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
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




export default EasyHealthyLunchOrDinner;
