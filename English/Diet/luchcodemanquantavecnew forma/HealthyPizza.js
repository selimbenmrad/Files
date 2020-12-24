import React, { Component} from 'react';
import { ImageBackground, Dimensions, StyleSheet, Text,TouchableOpacity, SafeAreaView, ScrollView,Image,View } from "react-native";
import { Button,Badge, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar} from 'react-native-elements';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
const image = { uri: "https://github.com/selimbenmrad/Files/blob/master/backk.jpg?raw=true"};
const Separator = () => (

  <View style={styles.separator} />
);

class BlinkText extends React.Component{

constructor(props){
super(props)
this.state={
  showText: true,
}
setInterval(() => {
  this.setState(previousState =>{
return{showText: !previousState.showText}
  })
}, 1000);


}
render(){
  const {textData}= this.props
  const {showText}= this.state
  return(
  <Text style={styles.Title}>{showText ? textData : ""}</Text>
  )
}





}


class HealthyPizza extends Component{

  constructor(props) {
    super(props);
      this.state = {
                    screenWidth: null,
                     screenHeight: null,
                 };
}

     _onLayout(e) {
                   this.setState({
                     screenWidth: Dimensions.get('window').width,
                     screenHeight: Dimensions.get('window').height
                   })

                 }



                 render() {
                   const { screenHeight, screenWidth } = this.state

  return (
    <SafeAreaView style={this.props.DietPortrait.container} onLayout={this._onLayout.bind(this)}>


        {(() => {
          // if ContainerPortrait ....!!
            if (screenHeight > screenWidth) {
              return (





               <ScrollView style={this.props.DietPortrait.scrollView}>

<Image
                         source={{ uri: 'https://github.com/selimbenmrad/Files/blob/master/omegabowls.jpg?raw=true' }}
                         style={{ width: screenWidth*4/4, height:screenHeight *8/24 ,opacity:5,}}
                       />


              <Separator />


                  <View style={{flex: 1, flexDirection: 'row',marginLeft:10,}}>
                  <View style={{flex: 4, }}>

              <Text style={this.props.DietPortrait.Title}>
         Healthy Pizza{"\n"}
                  <Text style={this.props.DietPortrait.texte}>
              {"\n"}  5 minutes {"\n"}
                  </Text>
                    </Text>


                    </View>
                    <Separator />
<Separator />

<View style={{flex: 2, justifyContent:'flex-start',}}>
  <Image
source={{ uri: 'https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true' }}
style={{ width: screenWidth*2/10, height:screenHeight*2/11 ,opacity:5,}}
/>



</View>

               </View>

               <Separator />


                <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/30,width: screenWidth*4/4}}>

                <Text style={this.props.DietPortrait.texttitle}>
               Ingredients {"\n"}{"\n"}
                  </Text>

                </View>
                       <Text style={this.props.DietPortrait.text}>


                      <Text style={this.props.DietPortrait.textetitle}>
                        For one person {"\n"}{"\n"}
                      </Text>



          1-350g whole wheat flour .{"\n"}
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







              </Text>

                         <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/28,width: screenWidth*4/4}}>

                         <Text style={this.props.DietPortrait.texttitle}>
                        Preparation {"\n"}{"\n"}
                           </Text>

                         </View>

              <Text style={this.props.DietPortrait.text}>
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


                    )
                  }
                  /////////////////////////////////////////////////////////-- else Container-Landscape  ......!!-- //////////////////////////////////////////////////////////////

                  else {
                    return (

<View style={{flex:1, flexDirection:'row'}}>
  <View style={{flex:2, }}>
  <Image
                         source={{ uri: 'https://github.com/selimbenmrad/Files/blob/master/omegabowls.jpg?raw=true' }}
                         style={{ width: screenWidth*4/10, height:screenHeight,opacity:5, borderRadius:15}}
                       />

  </View>
  <View style={{flex:3, }}>
  <ScrollView style={this.props.DietLandscape.scrollView}>


<Separator />


    <View style={{flex: 1, flexDirection: 'row',marginLeft:10,}}>
<Text>
<Text style={this.props.DietLandscape.Title}>
Healthy Pizza{"\n"}
    <Text style={this.props.DietLandscape.texte}>
{"\n"}  5 minutes {"\n"}
    </Text>
      </Text>
      </Text>

 </View>

 <Separator />


  <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/19,width: screenWidth*4/4}}>

  <Text style={this.props.DietLandscape.texttitle}>
 Ingredients {"\n"}{"\n"}
    </Text>

  </View>
         <Text style={this.props.DietLandscape.text}>


        <Text style={this.props.DietLandscape.textetitle}>
          For one person {"\n"}{"\n"}
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




</Text>

           <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/19,width: screenWidth*4/4}}>

           <Text style={this.props.DietLandscape.texttitle}>
          Preparation {"\n"}{"\n"}
             </Text>

           </View>

<Text style={this.props.DietLandscape.text}>
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

  </View>
</View>


              );
                        }
                    })()}
                 </SafeAreaView>
              );
              }

                   }




       const styles = StyleSheet.create({

         container: {
           flex: 1,
           color: "black",
           flexDirection: "column",
           backgroundColor:"#ffffff",
           fontSize: 0,
           paddingTop: 0,
           alignItems: 'center',
           justifyContent: 'center',

         },
         Title: {
           color: "#4682b4",
           fontSize: 20,
           fontFamily:'Castoro-Regular',
           padding: 25,


         },
         title: {
           color: "#4682b4",
           fontSize: 24,
            paddingTop: 40,
            fontFamily:'Castoro-Regular',

         fontFamily:'Castoro-Regular'
         },
         text: {
           padding: 25,
           color: "black",
           fontSize: 19,
           fontWeight: "normal",
           lineHeight: 40,
         },
         texte: {
           padding: 25,
           color: "black",
           fontSize: 23,
           fontWeight: "normal",
           fontFamily:'Castoro-Regular',
         },
         textetitle: {
           padding: 25,
           color: "#4682b4",
           fontSize: 22,
           fontWeight: "normal",
           lineHeight: 30,
           fontFamily:'Castoro-Regular',

         },
         texttitle: {
           color: "#C83747",
           fontSize: 25,
           fontWeight: "normal",
           fontFamily:'Castoro-Regular',
           lineHeight: 30,

         },
         separator: {
           marginVertical: 8,
           borderBottomColor: 'white',
           borderBottomWidth: StyleSheet.hairlineWidth,
         },


       });



       function mapStateToProps (state)  {

           return {
                 DietLandscape: state.DietLandscape,
                 DietPortrait: state.DietPortrait
           }
       };


       export default connect(mapStateToProps) (HealthyPizza);