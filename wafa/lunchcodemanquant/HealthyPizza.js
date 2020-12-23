import * as React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView  } from "react-native";

function HealthyPizza(){
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

        1- 350g whole wheat flour .{"\n"}
        2- 2 eggs ( one for the dough and the other for the topping (optional)) ( we encourage the use of pasture-raised egg) .{"\n"}
        3- 1 cup (200ml) warm milk ( or warm water) .{"\n"}
        4- 1 Tablespoon active dry yeast.{"\n"}
        5- 3 Tablespoons extra-virgin olive oil, divided.{"\n"}
        6- 1/2 teaspoons table or fine sea salt .{"\n"}
        7- 400g tomatoes.{"\n"}
        8- 1 small onion.{"\n"}
        9- 3 cloves garlic.{"\n"}
       10- 1/2 teaspoons curcumin. {"\n"}
       11- 100 g mozzarella cheese. {"\n"}
       12- 1/3 cup olive ( for the topping, optional) .{"\n"}
       13- 1/3 chopped parsley ( for the topping, optional). {"\n"}
       14- 1/2 cup cherry tomatoes (for the topping, optional). {"\n"} 





















        <Text style={styles.title}>
          Preparation:{"\n"}
        </Text>



        1- In a large bowl: mix the flour with 1 egg and 2 tbsp of olive oil, salt until combined. {"\n"}
        2- Add the yeast and cup of warm milk and knead with a dough hook or by hands until the dough is smooth, soft, and just a little bit sticky. Then knead for about 3 to 5 more minutes. {"\n"}
        3- Roll into a ball and rub a little oil around the dough. {"\n"}
        4- Place into a bowl and cover with plastic wrap. Let rest for 20 to 30 min or until the dough puffs up a bit. {"\n"}
        5- Meanwhile, prepare the pizza sauce: mix the tomatoes, garlic, onion, salt, pepper, and curcumin using the blender. {"\n"}
        6- Heat 1 tbsp of olive oil in the pan. {"\n"}
        7- Pour the tomato mixture into the pan and let it simmer in high heat (10min), stir. {"\n"}
        8- Preheat the oven to 260°c. Line the base of the pizza pan tin with baking paper. {"\n"}
        9- Place dough onto the pizza pan and roll out the dough with a rolling pin or toss until 3 cm thick and 30cm wide. {"\n"}
       10- Spread sauce over the dough and add the mozzarella cheese. {"\n"}
       11- Bake for 15 to 20 minutes, or until golden brown and bubbly. {"\n"}
       12- Remove from oven and top with parsley, olive tuna, cherry tomato, slices of boiled egg, and slices of bell pepper. Slice and serve. {"\n"}


















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

export default HealthyPizza;
