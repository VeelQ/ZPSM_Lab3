/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React , { Component} from 'react';
 //import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   TouchableOpacity,
   View,
   Button,
   Flexbox,
   
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
  * LTI update could not be added via codemod */
 
 
 export default class App extends Component {
 constructor(){
   super()
   this.state = {
     resultText: "",
     calculationText: ""
     
   }
   this.operations = ['AC','+','-','*','/']
  }
  calculateResult(){
   const text = this.state.resultText
   this.setState({
     calculationText: eval(text)
   })
   this.setState({
     resultText: ''
   })
 
  }
  Validate(){
   const text = this.state.resultText
   switch(text.slice(-1)){
     case '+':  
     case '-': 
     case '*': 
     case '/':
       return false
   }
   return true
  }
 buttonPressed(text){
   
 
   if(text == '='){
     
     return this.Validate() && this.calculateResult()
   }
   this.setState({
     resultText: this.state.resultText+text
   })
 }
 operate(op){
   switch(op){
     case 'AC':
       this.setState({
         resultText: '',
         calculationText: ''
       })
       break
     case '+':  
     case '-': 
     case '*': 
     case '/':
       const lastchar = this.state.resultText.split('').pop()
       if(this.operations.indexOf(lastchar) > 0) return
       if(this.state.resultText == "" ) return
       this.setState({
         resultText: this.state.resultText + op
       })
 
       
   }
   
 
 }
 render() {
   
 
  let rows = []
  let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
  let row = []
  for(let i = 0;i < 4;i++){
   row = []
   for(let j = 0;j < 3;j++){
     row.push(<TouchableOpacity onPress={() =>  this.buttonPressed(nums[i][j])} style={styles.btn}>
       <Text style={styles.btntext}>{nums[i][j]}</Text>
     </TouchableOpacity>) 
   }
   rows.push(<View style={[styles.row ]}>{row}</View>)
  }
  
 
  let ops = []
  for(let i = 0;i < 5;i++){
     ops.push(<TouchableOpacity style={styles.btn} onPress={() => this.operate(this.operations[i])}>
       <Text style={[styles.btntext, styles.white]}>{this.operations[i]}</Text>
     </TouchableOpacity>) 
   
  }
   return (
     <View style={styles.container}>
      <View style={styles.result}>
       <Text style={styles.resultText}>{this.state.resultText}</Text>
      </View>
      <View style={styles.calculation}>
       <Text style={styles.calculationText}>{this.state.calculationText}</Text>
      </View>
      <View style={styles.buttons}>
       <View style={styles.numbers}>
         {rows}
       </View>
       <View style={styles.operations}>
         {ops}
       </View>
      </View>
     </View>
   );
 };
 }
 
 const styles = StyleSheet.create({
  container:{
   flex:1
  },
  resultText: {
   fontSize: 30,
   color: 'orange'
  },
  btn:{
   flex:1,
   alignItems:'center',
   alignSelf:'stretch',
   justifyContent: 'center'
  },
  orange:{
   color:'orange',
  },
  
  btntext:{
   fontSize: 30,
   color:'#Bd7a00',
  },
  calculationText: {
   fontSize: 24,
   color: 'orange'
  },
  row:{
   flexDirection: 'row',
   flex:1,
   justifyContent: 'space-around',
   alignItems:'center'
  },
  result:{
   flex:2,
   backgroundColor: '#4d4d4d',
   justifyContent: 'center',
   alignItems:'flex-end'
 },
 calculation:{
   flex:1,
   backgroundColor: '#3f3f3f',
   justifyContent: 'center',
   alignItems: 'flex-end'
 },
 buttons:{
   flex:7,
   flexDirection: 'row'
 },
 numbers:{
   flex:3,
   backgroundColor: '#2f2f2f'
 },
 operations:{
   flex:1,
   justifyContent: 'space-around',
   alignItems: 'stretch',
   backgroundColor: '#272727'
 },
 });
 
 
 