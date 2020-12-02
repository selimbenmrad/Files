import * as React from 'react';
import { ImageBackground, StyleSheet, Text, ScrollView, View } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Introduction from "./Introduction";
import DatesOats from "./EasyHealthyBreakfast/DatesOats";
import GreenSmoothieBowl from "./EasyHealthyBreakfast/GreenSmoothieBowl";

import AlmondsOvernightOats from "./EasyHealthyBreakfast/AlmondsOvernightOats";
import Porridge from "./EasyHealthyBreakfast/Porridge";
import BananaOatmealPancakes from "./EasyHealthyBreakfast/BananaOatmealPancakes";
import JoyfulLentilsSalad from "./EasyHealthyLunchOrDinner/JoyfulLentilsSalad";
import TomatinaSalad from "./EasyHealthyLunchOrDinner/TomatinaSalad";
import ColdCucumberSoupWithFlaxSeeds from "./EasyHealthyBreakfast/ColdCucumberSoupWithFlaxSeeds";
import WatermelonSmoothie from "./SharedRecipes/WatermelonSmoothie";
import ScrambledEggsWithLegumes from "./SharedRecipes/ScrambledEggsWithLegumes";
import HealthyDrinks from "./HealthyDrinks/HealthyDrinks";
import MintFlavoredTea from "./HealthyDrinks/MintFlavoredTea";
import DrainingHerbalTea from "./HealthyDrinks/DrainingHerbalTea";
import ChamomileTea from "./HealthyDrinks/ChamomileTea";
import ThymeTea from "./HealthyDrinks/ThymeTea";
import CarrotJuice from "./HealthyDrinks/CarrotJuice";
import EnergizingSmoothieWithOrganicSpirulina from "./HealthyDrinks/EnergizingSmoothieWithOrganicSpirulina";
import ChlorellaGreenDream from "./HealthyDrinks/ChlorellaGreenDream";
import OvernightOats from "./HealthyDrinks/OvernightOats";
import EasyHealthyLunchOrDinner from "./EasyHealthyLunchOrDinner/EasyHealthyLunchOrDinner";
import EasyHealthyBreakfast from "./EasyHealthyBreakfast/EasyHealthyBreakfast";
import ScrambledEggsWithSpinach from './SharedRecipes/ScrambledEggsWithSpinach';
import CarotSalad from './EasyHealthyLunchOrDinner/CarotSalad';
import CucumberSalad from "./EasyHealthyLunchOrDinner/CucumberSalad";
import SauteedVegetables from "./EasyHealthyLunchOrDinner/SauteedVegetables";
import BuddhaBowlVitaminizedWinter from './EasyHealthyLunchOrDinner/BuddhaBowlVitaminizedWinter';
import VegetableSoup from "./EasyHealthyLunchOrDinner/VegetableSoup";
import LentilSoup from "./EasyHealthyLunchOrDinner/LentilSoup";
import Hrira from './EasyHealthyLunchOrDinner/Hrira';
import NicoiseSalad from "./EasyHealthyLunchOrDinner/NicoiseSalad";
import HealthyQuinoaSalad from './EasyHealthyLunchOrDinner/HealthyQuinoaSalad';
import BuddhaBowGrilledChickenQuinoa from "./EasyHealthyLunchOrDinner/BuddhaBowGrilledChickenQuinoa";
import HealthyColeyOvenBake from "./EasyHealthyLunchOrDinner/HealthyColeyOvenBake";
import Desserts from "./Desserts/Desserts";
import FruitSalad from "./SharedRecipes/FruitSalad";
import ChocolatePeanutButterCups from "./Desserts/ChocolatePeanutButterCups";

import FavaBeans from "./EasyHealthyLunchOrDinner/FavaBeans";
import GermanPatatoSalad from "./EasyHealthyLunchOrDinner/GermanPatatoSalad";
import KidneyBeanSalad from "./EasyHealthyLunchOrDinner/KidneyBeanSalad";
import VegetarianBurger from "./EasyHealthyLunchOrDinner/VegetarianBurger";
import DetoxPowerBowl from "./EasyHealthyLunchOrDinner/DetoxPowerBowl";
import VeganButternutSquashAndChickpeaSoup from "./EasyHealthyLunchOrDinner/VeganButternutSquashAndChickpeaSoup";
import CreamyThaiSweetPotatoesAndLentils from "./EasyHealthyLunchOrDinner/CreamyThaiSweetPotatoesAndLentils";
import ChiaSeedAndFruitPudding from "./Desserts/ChiaSeedAndFruitPudding";
import BasicEnergyBalls from "./Desserts/BasicEnergyBalls";
import PotetoesSalad from "./EasyHealthyLunchOrDinner/PotetoesSalad";
import AppelYogoCompote from "./EasyHealthyBreakfast/AppelYogoCompote";
import PearAlmoundDrink from "./HealthyDrinks/PearAlmoundDrink";
import BananaPearCocktail from "./HealthyDrinks/BananaPearCocktail";
import PomegranateCheeseSalad from "./EasyHealthyLunchOrDinner/PomegranateCheeseSalad";
import Yogranate from "./EasyHealthyBreakfast/Yogranate";
import GreenBeansTunaSalad from "./EasyHealthyLunchOrDinner/GreenBeansTunaSalad";
import RapidoSalad from "./EasyHealthyLunchOrDinner/RapidoSalad";
import VegetoMelangy from "./EasyHealthyLunchOrDinner/VegetoMelangy";
import PomegranateMix from "./SharedRecipes/PomegranateMix";
import MushroomEggs  from "./EasyHealthyBreakfast/MushroomEggs";
import OmegaBowl  from "./EasyHealthyBreakfast/OmegaBowl";
import PancakeLactovegeterain from "./EasyHealthyBreakfast/PancakeLactovegeterain";
import AutumnVeggieSalad from "./EasyHealthyLunchOrDinner/AutumnVeggieSalad";
import TheTurnipearSalad from "./EasyHealthyLunchOrDinner/TheTurnipearSalad";
import DarkChocolateFruitsSalad from "./SharedRecipes/DarkChocolateFruitsSalad";
import SaladRicottaCheeseToast from "./SharedRecipes/SaladRicottaCheeseToast";
import DriedApricotAndPomegranateToast from "./EasyHealthyBreakfast/DriedApricotAndPomegranateToast";
import GrilledVeggiesAndPotatoesToestShape from "./EasyHealthyLunchOrDinner/GrilledVeggiesAndPotatoesToestShape";

function DietMainPage({ navigation }){
 

 

const ImgIntroduction="https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
const ImgBreackfast="https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg"
const ImgDinner="https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_960_720.jpg"
const ImgDesserts="https://cdn.pixabay.com/photo/2015/01/30/10/35/glass-617387_960_720.jpg"
const ImgDrinks="https://cdn.pixabay.com/photo/2017/04/23/09/44/smoothies-2253423_960_720.jpg"



 const card=[{imgcard:ImgIntroduction,titlecard:"Introduction"},{imgcard:ImgBreackfast,titlecard:"Breakfast"},{imgcard:ImgDinner,titlecard:"Dinner"},{imgcard:ImgDesserts,titlecard:"Desserts"},{imgcard:ImgDrinks,titlecard:"Drinks"},]
 
 const LengthOfCard=card.length


 
  return (

    <ScrollView style={styles.container}>
     

     


{
 card.map((item,index)=>{

  if ( index <(LengthOfCard/2)-1) {

    return(
 
      <View style={{flex:1,flexDirection:'row'}}>
      <Card  image={{uri :item.imgcard}}>
      <Button title={item.titlecard}    onPress={() => navigation.navigate('Introduction')}buttonStyle={{backgroundColor: '#20b2aa'}}/>
      </Card>
      </View>
      )
    
 }




 }) 
}









  </ScrollView>





  );
}
// styles for diet main page
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


// this creates the navigation for DietMainPage from react navigation

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function DietStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Diet Page" component={DietMainPage} />
      <Stack.Screen name="Dark Chocolate Fruits Salad" component={DarkChocolateFruitsSalad} options={{  headerTintColor: 'white',  headerStyle: { backgroundColor: '#A1C522'  } }} />
      <Stack.Screen name="Scrambled Eggs With Spinach" component={ScrambledEggsWithSpinach} />
      <Stack.Screen name="Dates Oats" component={DatesOats} />
      <Stack.Screen name="Scrambled Eggs With Legumes" component={ScrambledEggsWithLegumes} />
      <Stack.Screen name="Joyful Lentils Salad" component={JoyfulLentilsSalad} />
      <Stack.Screen name="Tomatina Salad" component={TomatinaSalad} />
      <Stack.Screen name="Watermelon Smoothie" component={WatermelonSmoothie} />
      <Stack.Screen name="Healthy Drinks" component={HealthyDrinks} />
      <Stack.Screen name="Mint Flavored Tea" component={MintFlavoredTea} />
      <Stack.Screen name="Draining Herbal Tea" component={DrainingHerbalTea} />
      <Stack.Screen name="Thyme Tea" component={ThymeTea} />
      <Stack.Screen name="Overnight Oats" component={OvernightOats} />
      <Stack.Screen name="Carrot Juice" component={CarrotJuice} />
      <Stack.Screen name="Energizing Smoothie With Organic Spirulina" component={EnergizingSmoothieWithOrganicSpirulina} />
      <Stack.Screen name="Chamomile Tea" component={ChamomileTea} />
      <Stack.Screen name="Chlorella Green Dream" component={ChlorellaGreenDream} />
      <Stack.Screen name="Easy Healthy Lunch Or Dinner" component={EasyHealthyLunchOrDinner} />
      <Stack.Screen name="Easy Healthy Breakfast" component={EasyHealthyBreakfast} />
      <Stack.Screen name="Green Smoothie Bowl" component={GreenSmoothieBowl} />
      <Stack.Screen name="Almonds Overnight Oats" component={AlmondsOvernightOats} />
      <Stack.Screen name="Porridge" component={Porridge} />
      <Stack.Screen name="Banana Oatmeal Pancakes" component={BananaOatmealPancakes} />
      <Stack.Screen name="Cold Cucumber Soup With Flax Seeds" component={ColdCucumberSoupWithFlaxSeeds} />
      <Stack.Screen name="Hrira" component={Hrira} />
      <Stack.Screen name="Nicoise Salad" component={NicoiseSalad} />
      <Stack.Screen name="Carot Salad" component={CarotSalad} />
      <Stack.Screen name="Buddha Bowl Vitaminized Winter" component={BuddhaBowlVitaminizedWinter} />
      <Stack.Screen name="Vegetable Soup" component={VegetableSoup} />
      <Stack.Screen name="Lentil Soup" component={LentilSoup} />
      <Stack.Screen name="Vegan Butternut Squash And Chickpea Soup" component={VeganButternutSquashAndChickpeaSoup} />
      <Stack.Screen name="Cucumber Salad" component={CucumberSalad} />
      <Stack.Screen name="German Patato Salad" component={GermanPatatoSalad} />
      <Stack.Screen name="Sauteed Vegetables" component={SauteedVegetables} />
      <Stack.Screen name="Kidney Bean Salad" component={KidneyBeanSalad} />
      <Stack.Screen name="Detox Power Bowl" component={DetoxPowerBowl} />
      <Stack.Screen name="Vegetarian Burger" component={VegetarianBurger} />
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Desserts" component={Desserts} />
      <Stack.Screen name="Fruit Salad" component={FruitSalad} />
      <Stack.Screen name="Fava Beans" component={FavaBeans} />
      <Stack.Screen name="Chia Seed And Fruit Pudding" component={ChiaSeedAndFruitPudding} />
      <Stack.Screen name="Basic Energy Balls" component={BasicEnergyBalls} />
      <Stack.Screen name="Buddha Bow Grilled Chicken Quinoa" component={BuddhaBowGrilledChickenQuinoa} />
      <Stack.Screen name="Healthy Coley Oven Bake" component={HealthyColeyOvenBake} />
      <Stack.Screen name="Healthy Quinoa Salad" component={HealthyQuinoaSalad} />
      <Stack.Screen name="Creamy Thai Sweet Potatoes And Lentils" component={CreamyThaiSweetPotatoesAndLentils} />
      <Stack.Screen name="Potetoes Salad" component={PotetoesSalad} />
      <Stack.Screen name="Appel Yogo Compote" component={AppelYogoCompote} />
      <Stack.Screen name="Yogranate" component={Yogranate} />
      <Stack.Screen name="Banana Pear Cocktail" component={BananaPearCocktail} />
      <Stack.Screen name="Pear Almound Drink" component={PearAlmoundDrink} />
      <Stack.Screen name="Pomegranate Cheese Salad" component={PomegranateCheeseSalad} />
      <Stack.Screen name="Green Beans Tuna Salad" component={GreenBeansTunaSalad} />
      <Stack.Screen name="Vegeto Melangy " component={VegetoMelangy} />
      <Stack.Screen name="Rapido Salad" component={RapidoSalad} />
      <Stack.Screen name="Omega Bowl" component={OmegaBowl} />
      <Stack.Screen name="Mushroom Eggs" component={MushroomEggs} />
      <Stack.Screen name="Pancake Lactovegeterain" component={PancakeLactovegeterain} />
      <Stack.Screen name="Pomegranate Mix" component={PomegranateMix} />
      <Stack.Screen name="Autumn Veggie Salad" component={AutumnVeggieSalad} />
      <Stack.Screen name="The Turnipear Salad" component={TheTurnipearSalad} />
      <Stack.Screen name="Dried Apricot And Pomegranate Toast" component={DriedApricotAndPomegranateToast} />
      <Stack.Screen name="Salad Ricotta Cheese Toast" component={SaladRicottaCheeseToast} />
   
      <Stack.Screen name="Chocolate Peanut Butter Cups" component={ChocolatePeanutButterCups} />
      <Stack.Screen name="Grilled Veggies And Potatoes Toest Shape" component={GrilledVeggiesAndPotatoesToestShape} />

    </Stack.Navigator>


  );
}
export default DietStack;
