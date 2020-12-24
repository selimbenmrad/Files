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


class BackedPotatoWedges extends Component{

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
                         source={{ uri: 'https://t3.ftcdn.net/jpg/01/08/47/30/240_F_108473068_wstdi5XO8CwGyl3z43GXTXp1QC5zaY8M.jpg' }}
                         style={{ width: screenWidth*4/4, height:screenHeight *8/24 ,opacity:5,}}
                       />


              <Separator />


                  <View style={{flex: 1, flexDirection: 'row',marginLeft:10,}}>
                  <View style={{flex: 4, }}>

              <Text style={this.props.DietPortrait.Title}>
              Backed Potato wedges {"\n"}
                  <Text style={this.props.DietPortrait.texte}>
              {"\n"}  10 minutes {"\n"}
                  </Text>
                    </Text>


                    </View>
                    <View style={{flex: 2, justifyContent:'flex-start',}}>
                      <Image
                    source={{ uri: 'https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true' }}
                    style={{ width: screenWidth*2/12, height:screenHeight*2/17 ,opacity:5,}}
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

        1-  3 medium potatoes.{"\n"}
        2-  2 tbsp of olive oil.{"\n"}
        3-  1 tsp of curcumin powder.{"\n"}
        4-  1 tsp of rosemary powder.{"\n"}
        5-  ½  tsp of salt and pepper.{"\n"}
              </Text>

                         <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/28,width: screenWidth*4/4}}>

                         <Text style={this.props.DietPortrait.texttitle}>
                        Preparation {"\n"}{"\n"}
                           </Text>

                         </View>

              <Text style={this.props.DietPortrait.text}>
        1- Preheat the oven to 260°C. Line large baking sheets with parchment paper; set aside.{"\n"}
        2- Cut each potato in half lengthways, then cut each half in half lengthways again, and then cut each half in half lengthways again until you have 8 wedges each potato.{"\n"}
        3- In a small jug, combine the olive  oil, curcumin powder,  rosemary powder,  salt, and pepper.{"\n"}
        4- Pour the oil mixture over the potatoes and toss together to coat evenly.{"\n"}
        5- Arrange potato wedges in a single layer on a large baking tray.{"\n"}
        6- Bake for 30 minutes,until golden, crisp and cooked through when tested with a fork.{"\n"}
        7- serve with slices of  fresh carrots and feta cheese pieces .{"\n"}




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
                         source={{ uri: 'https://t3.ftcdn.net/jpg/01/08/47/30/240_F_108473068_wstdi5XO8CwGyl3z43GXTXp1QC5zaY8M.jpg' }}
                         style={{ width: screenWidth*4/10, height:screenHeight,opacity:5, borderRadius:15}}
                       />

  </View>
  <View style={{flex:3, }}>
  <ScrollView style={this.props.DietLandscape.scrollView}>


<Separator />


    <View style={{flex: 1, flexDirection: 'row',marginLeft:10,}}>
<Text>
<Text style={this.props.DietLandscape.Title}>
Backed Potato Wedges{"\n"}
    <Text style={this.props.DietLandscape.texte}>
{"\n"}  10 minutes {"\n"}
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

        1-  3 medium potatoes.{"\n"}
        2-  2 tbsp of olive oil.{"\n"}
        3-  1 tsp of curcumin powder.{"\n"}
        4-  1 tsp of rosemary powder.{"\n"}
        5-  ½  tsp of salt and pepper.{"\n"}

</Text>

           <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/19,width: screenWidth*4/4}}>

           <Text style={this.props.DietLandscape.texttitle}>
          Preparation {"\n"}{"\n"}
             </Text>

           </View>

<Text style={this.props.DietLandscape.text}>
        1- Preheat the oven to 260°C. Line large baking sheets with parchment paper; set aside.{"\n"}
        2- Cut each potato in half lengthways, then cut each half in half lengthways again, and then cut each half in half lengthways again until you have 8 wedges each potato.{"\n"}
        3- In a small jug, combine the olive  oil, curcumin powder,  rosemary powder,  salt, and pepper.{"\n"}
        4- Pour the oil mixture over the potatoes and toss together to coat evenly.{"\n"}
        5- Arrange potato wedges in a single layer on a large baking tray.{"\n"}
        6- Bake for 30 minutes,until golden, crisp and cooked through when tested with a fork.{"\n"}
        7- serve with slices of  fresh carrots and feta cheese pieces .{"\n"}


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


       export default connect(mapStateToProps) (BackedPotatoWedges);
