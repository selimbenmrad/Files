import * as React from 'react';
import { ImageBackground, StyleSheet, Text, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';




function HealthyDrinks({ navigation }){

  return (

    <ScrollView style={styles.container}>

    <Card  image={{uri : "https://cdn.pixabay.com/photo/2016/05/26/19/49/strawberry-smoothie-1418212_960_720.jpg"}}>
      <Button title="Watermelon Smoothie"  onPress={() => navigation.navigate('Watermelon Smoothie')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
    </Card>
    <Card  image={{uri : "https://cdn.pixabay.com/photo/2017/10/04/12/10/peppermint-2816012_1280.jpg"}}>
      <Button title="Mint Flavored Tea"  onPress={() => navigation.navigate('Mint Flavored Tea')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
    </Card>
    <Card  image={{uri : "https://images.pexels.com/photos/405238/pexels-photo-405238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}>
      <Button title="Draining Herbal Tea"  onPress={() => navigation.navigate('Draining Herbal Tea')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
    </Card>
    <Card  image={{uri : "https://media.istockphoto.com/photos/thyme-tea-picture-id454953825?b=1&k=6&m=454953825&s=170667a&w=0&h=bGPSrBBhv0DEbGxmT-y3PLc64tpH3Y54ShJYlsu7cJE="}}>
      <Button title="Thyme Tea"  onPress={() => navigation.navigate('Thyme Tea')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
    </Card>
    <Card  image={{uri : "https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_1280.jpg"}}>
      <Button title="Chamomile Tea"  onPress={() => navigation.navigate('Chamomile Tea')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
    </Card>
    <Card  image={{uri : "https://cdn.pixabay.com/photo/2016/08/26/20/40/carrot-juice-1623079_1280.jpg"}}>
      <Button title="Carrot Juice"  onPress={() => navigation.navigate('Carrot Juice')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
    </Card>
    <Card  image={{uri : "https://i.pinimg.com/originals/b3/a3/86/b3a38601ba16e878d2f0c68745961402.png"}}>
      <Button title="Energizing Smoothie With Organic Spirulina"  onPress={() => navigation.navigate('Energizing Smoothie With Organic Spirulina')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
    </Card>
    <Card  image={{uri : "https://media.istockphoto.com/photos/detox-young-barley-chlorella-superfood-picture-id496680677?b=1&k=6&m=496680677&s=170667a&w=0&h=KRnPv7dLnU2zQP5ifMMQdRHvPZO-LYn_iKKpVj4bBow="}}>
      <Button title="Chlorella Green Dream"  onPress={() => navigation.navigate('Chlorella Green Dream')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
    </Card>

    <Card  image={{uri : "https://t4.ftcdn.net/jpg/00/82/94/67/240_F_82946711_3qMaoY8Bbci4tW9GPzD3lNKPiYYw3qow.jpg"}}>
      <Button title="Overnight Oats"  onPress={() => navigation.navigate('Overnight Oats')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
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




export default HealthyDrinks;
