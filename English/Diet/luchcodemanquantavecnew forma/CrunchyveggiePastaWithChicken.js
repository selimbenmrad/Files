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


class CrunchyVeggiePastaWithGrilledChicken extends Component{

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
         Crunchy Veggie Pasta With Grilled Chicken{"\n"}
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



          1- 100 g whole-wheat bow-tie pasta (300 g after cooking) .{"\n"}
          2- 1 small onion.{"\n"}
          3- 6 cups baby spinach, chopped.{"\n"}
          4- 4 cloves garlic, minced.{"\n"}
          5- 1 fennel bulb, diced.{"\n"}
          6- 3 carrots, diced.{"\n"}
          7- 200 g chicken breast, diced .{"\n"}
          8- 50 g almond.{"\n"}
          9- 2 tbsp of extra-virgin olive oil.{"\n"}
         10- 1 teaspoon of curcumin and  pinch of salt and pepper to tase .{"\n"}


              </Text>

                         <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/28,width: screenWidth*4/4}}>

                         <Text style={this.props.DietPortrait.texttitle}>
                        Preparation {"\n"}{"\n"}
                           </Text>

                         </View>

              <Text style={this.props.DietPortrait.text}>
             1- Cook pasta according to packet instructions (Pasta cooked properly should be al dente—a little chewy),Drain and set aside.{"\n"}
             2- While the pasta is cooking, prepare the vegetables. In a large frying pan, heat oil over medium heat.{"\n"}
             3- Add spinach and onions and cook (4 min).{"\n"}
             4- Add fennal, carrots, salt, curcumin and pepper; stir and let it cook until fennel lightly browned (5 minutes).{"\n"}
             5- add the pasta and Stir with other ingredients (2 min),then remove from heat. {"\n"}
             6- Heat the oil in a medium skillet over medium-high heat.{"\n"}
             7- Season the pieces of the chicken breasts with salt and pepper.Cook until firm to the touch, (5 min).{"\n"}
             8- combine Sauteed vegtable, pasta and the chicken and pour them transfer into plate.{"\n"}
             9- topping the plate with almond and enjoy it.{"\n"}



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
Crunchy Veggie Pasta With Grilled Chicken{"\n"}
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

            1- 100 g whole-wheat bow-tie pasta (300 g after cooking) .{"\n"}
            2- 1 small onion.{"\n"}
            3- 6 cups baby spinach, chopped.{"\n"}
            4- 4 cloves garlic, minced.{"\n"}
            5- 1 fennel bulb, diced.{"\n"}
            6- 3 carrots, diced.{"\n"}
            7- 200 g chicken breast, diced .{"\n"}
            8- 50 g almond.{"\n"}
            9- 2 tbsp of extra-virgin olive oil.{"\n"}
           10- 1 teaspoon of curcumin and  pinch of salt and pepper to tase .{"\n"}


</Text> 

           <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/19,width: screenWidth*4/4}}>

           <Text style={this.props.DietLandscape.texttitle}>
          Preparation {"\n"}{"\n"}
             </Text>

           </View>

<Text style={this.props.DietLandscape.text}>
     1- Cook pasta according to packet instructions (Pasta cooked properly should be al dente—a little chewy),Drain and set aside.{"\n"}
     2- While the pasta is cooking, prepare the vegetables. In a large frying pan, heat oil over medium heat.{"\n"}
     3- Add spinach and onions and cook (4 min).{"\n"}
     4- Add fennal, carrots, salt, curcumin and pepper; stir and let it cook until fennel lightly browned (5 minutes).{"\n"}
     5- add the pasta and Stir with other ingredients (2 min),then remove from heat. {"\n"}
     6- Heat the oil in a medium skillet over medium-high heat.{"\n"}
     7- Season the pieces of the chicken breasts with salt and pepper.Cook until firm to the touch, (5 min).{"\n"}
     8- combine Sauteed vegtable, pasta and the chicken and pour them transfer into plate.{"\n"}
     9- topping the plate with almond and enjoy it.{"\n"}




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


       export default connect(mapStateToProps) (CrunchyVeggiePastaWithGrilledChicken);