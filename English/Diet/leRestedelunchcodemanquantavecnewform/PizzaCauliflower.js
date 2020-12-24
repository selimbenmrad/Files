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


class PizzaCauliflower extends Component{

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
       Pizza Cauliflower{"\n"}
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



          1- 1 small to medium sized head of cauliflower.{"\n"}
          2- 1 egg.{"\n"}
          3- 1 cup  of tomato sauce .{"\n"}
          4- 1 cup of mozzarella cheese.{"\n"}
          5- 1/2 white cheese ( low fat).{"\n"}
          6- 1 tbsp of olive oil.{"\n"}
          7- 1/2 box of tuna .{"\n"}
          8- sea salt and pepper, to taste .{"\n"}
          9- garnish : chopped parsely, olive .{"\n"}





              </Text>

                         <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/28,width: screenWidth*4/4}}>

                         <Text style={this.props.DietPortrait.texttitle}>
                        Preparation {"\n"}{"\n"}
                           </Text>

                         </View>

              <Text style={this.props.DietPortrait.text}>
             1- Preheat oven to 360 degrees c.{"\n"}
             2- Remove the stems from the cauliflower and cut into chunks, Place the cauliflower into a food processor and pulse it until it resembles the texture of rice.{"\n"}
             3- place it in a kitchen towel and squeeze all the liquid out of it. Be sure to squeeze as much liquid as humanly possible.{"\n"}
             4- Combine the cauliflower, egg and 1/2 cup  mozzarella cheese, and seasonings. Stir until a dough texture forms.{"\n"}
             5- Spread the cauliflower mixture out onto lightly greased parchment paper or a pizza pan in the shape of a pizza crust.{"\n"}
             6- Bake the crust for approximately 10-15 min (depending on your oven), or until the crust is golden and crispy .{"\n"}
             7- when the crust is golden remove it from the oven and add  tomato sauce  and cheese on the top.{"\n"}
             8- Place the pizza back in the oven , bake for about 2-5 min until the  mozzarelle cheese melts .{"\n"}
             9- Top with tuna , white cheese, parsely and olive, then Slice  and serve warm .{"\n"}


       


        








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
Pizza Cauliflower{"\n"}
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

            1- 1 small to medium sized head of cauliflower .{"\n"}
            2- 1 egg .{"\n"}
            3- 1 cup  of tomato sauce .{"\n"}
            4- 1 cup of mozzarella cheese.{"\n"}
            5- 1/2 white cheese ( low fat).{"\n"}
            6- 1 tbsp of olive oil.{"\n"}
            7- 1/2 box of tuna .{"\n"}
            8- sea salt and pepper, to taste .{"\n"}
            9- garnish : chopped parsely, olive .{"\n"}
</Text>

           <View style={{backgroundColor:"#f5f5f5",height:screenHeight*2/19,width: screenWidth*4/4}}>

           <Text style={this.props.DietLandscape.texttitle}>
          Preparation {"\n"}{"\n"}
             </Text>

           </View>

<Text style={this.props.DietLandscape.text}>
     1-Preheat oven to 360 degrees c.{"\n"}
     2- Remove the stems from the cauliflower and cut into chunks, Place the cauliflower into a food processor and pulse it until it resembles the texture of rice.{"\n"}
     3- place it in a kitchen towel and squeeze all the liquid out of it. Be sure to squeeze as much liquid as humanly possible.{"\n"}
     4- Combine the cauliflower, egg and 1/2 cup  mozzarella cheese, and seasonings. Stir until a dough texture forms.{"\n"}
     5- Spread the cauliflower mixture out onto lightly greased parchment paper or a pizza pan in the shape of a pizza crust.{"\n"}
     6- Bake the crust for approximately 10-15 min (depending on your oven), or until the crust is golden and crispy .{"\n"}
     7- when the crust is golden remove it from the oven and add  tomato sauce  and cheese on the top.{"\n"}
     8- Place the pizza back in the oven , bake for about 2-5 min until the  mozzarelle cheese melts .{"\n"}
     9- Top with tuna , white cheese, parsely and olive, then Slice  and serve warm.{"\n"}

       











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


       export default connect(mapStateToProps) (PizzaCauliflower);