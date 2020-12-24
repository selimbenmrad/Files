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


class CabbagePotatoTunaSalad extends Component{

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
          Cabbage Potato Tuna Salad{"\n"}
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



          1- 1/4  head of purple cabbage.{"\n"}
          2- 1 potato.{"\n"}
          3- 30 g white cheese ( low fat) .{"\n"}
          4- 1 can of tuna, drained.{"\n"}
          5- 6 lettuces leaves .{"\n"}
          6- for Seasoning: 2 tbsp of olive oil, pinch of salt ,1 tbsp of lemon Juice.{"\n"}
          7- some olive  , some grenade to decorate (optional).{"\n"}



              </Text>

                         <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/28,width: screenWidth*4/4}}>

                         <Text style={this.props.DietPortrait.texttitle}>
                        Preparation {"\n"}{"\n"}
                           </Text>

                         </View>

              <Text style={this.props.DietPortrait.text}>
             1- Boil the potato until fork tender, Drain.{"\n"}
             2- Wash the cabbage,lettuce and  cut them in pieces then put them in a bowl.{"\n"}
             3- Add the potatoes,tuna , white cheese  and mix .{"\n"}
             4- In a small bowl, whisk together the oil, lemon juice, salt. pour over salad.{"\n"}
             5- Add some olive and grenade then serve.{"\n"}.





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
Cabbage Potato Tuna Salad{"\n"}
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

            1- 1/4  head of purple cabbage.{"\n"}
            2- 1 potato.{"\n"}
            3- 30 g white cheese ( low fat) .{"\n"}
            4- 1 can of tuna, drained.{"\n"}
            5- 6 lettuces leaves .{"\n"}
            6- for Seasoning: 2 tbsp of olive oil, pinch of salt ,1 tbsp of lemon Juice.{"\n"}
            7- some olive  , some grenade to decorate (optional).{"\n"}

</Text>

           <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/19,width: screenWidth*4/4}}>

           <Text style={this.props.DietLandscape.texttitle}>
          Preparation {"\n"}{"\n"}
             </Text>

           </View>

<Text style={this.props.DietLandscape.text}>
     1- Boil the potato until fork tender, Drain.{"\n"}
     2- Wash the cabbage,lettuce and  cut them in pieces then put them in a bowl.{"\n"}
     3- Add the potatoes,tuna , white cheese  and mix .{"\n"}
     4- In a small bowl, whisk together the oil, lemon juice, salt. pour over salad.{"\n"}
     5- Add some olive and grenade then serve.{"\n"}





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


       export default connect(mapStateToProps) (CabbagePotatoTunaSalad);

