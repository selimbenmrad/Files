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


class LentilsStew extends Component{

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
         Lentils Stew{"\n"}
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



          1- 100 g (1 cup) lentils .{"\n"}
          2- small (1/3 cup) onion.{"\n"}
           3- 6 tomatoes.{"\n"}
           4- 2 cup of baby spinach .{"\n"}
          5- 2 tbsps of extra virgin olive oil .{"\n"}
          6- 1 teaspoon of curcumin , salt and pepper to taste.{"\n"}






              </Text>

                         <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/28,width: screenWidth*4/4}}>

                         <Text style={this.props.DietPortrait.texttitle}>
                        Preparation {"\n"}{"\n"}
                           </Text>

                         </View>

              <Text style={this.props.DietPortrait.text}>
             1-Blend the onion, tomatoes, spinach using the blender (or you chop them finely).{"\n"}
             2- Heat the oil in a saucepan over medium heat.{"\n"}
             3- Add the tomato mixture into the  saucepan and cook for about 5 minutes and stirring.{"\n"}
             4- Add the 2 cups of water, curcumin, salt , pepper and the lentils into the saucepan.{"\n"}
             5- Bring to a boil, then cover, and let simmer on medium -heat, stirring occasionally (Add more water if necessary to lentils be cooked).{"\n"}
             6- Let cook  until lentils are tender. And the liquid absorbed.{"\n"}
             7- Remove from the heat and serve hot alone or with a slice of whole wheat bread as desired.{"\n"}
 sause.{"\n"}

       


        








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
Lentils Stew{"\n"}
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

            1- 100 g (1 cup) lentils.{"\n"}
            2- small (1/3 cup) onion.{"\n"}
             3- 6 tomatoes.{"\n"}
             4- 2 cup of baby spinach .{"\n"}
            5- 2 tbsps of extra virgin olive oil .{"\n"}
            6- 1 teaspoon of curcumin , salt and pepper to taste.{"\n"}


</Text>

           <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/19,width: screenWidth*4/4}}>

           <Text style={this.props.DietLandscape.texttitle}>
          Preparation {"\n"}{"\n"}
             </Text>

           </View>

<Text style={this.props.DietLandscape.text}>
     1-  Blend the onion, tomatoes, spinach using the blender (or you chop them finely).{"\n"}
     2- Heat the oil in a saucepan over medium heat.{"\n"}
     3- Add the tomato mixture into the  saucepan and cook for about 5 minutes and stirring.{"\n"}
     4- Add the 2 cups of water, curcumin, salt , pepper and the lentils into the saucepan.{"\n"}
     5- Bring to a boil, then cover, and let simmer on medium -heat, stirring occasionally (Add more water if necessary to lentils be cooked).{"\n"}
     6- Let cook  until lentils are tender. And the liquid absorbed.{"\n"}
     7- Remove from the heat and serve hot alone or with a slice of whole wheat bread as desired.{"\n"}


       











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


       export default connect(mapStateToProps) (LentilsStew);