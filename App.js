import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Picker, AppRegistry} from 'react-native';
import Option from './src/option'
import OptionList from './src/optionList'
import Select from './src/select'
import updatePosition from './src/updatePosition'

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      canada: '',
      usa: '',

      currencies: [
        { "country": "UK", "currency": "GBP", "currencyLabel":  "Pound" },
        { "country": "EU", "currency": "EUR", "currencyLabel": "Euro" },
        { "country": "USA", "currency": "USD", "currencyLabel": "USD Dollar" },
        { "country": "Canada", "currency": "CD", "currencyLabel":  "Canadian Dollar" },
        { "country": "India", "currency": "RS", "currencyLabel": "Indian Rupee" },
        { "country": "China", "currency": "YEN", "currencyLabel": "Yen" }
      ],
      currentLabel: "Select your currency",
      currency: ""

    }
  }

  componentDidMount() {
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['SELECT2']);

    updatePosition(this.refs['OPTIONLIST']);
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  _usa(state) {
    this.setState({
      ...this.state,
      usa: state
    });
  }

  _canada(province) {


    this.setState({
      ...this.state,
      canada: province
    });
  }

  pickerChange(index){
    this.state.currencies.map( (v,i)=>{
     if( index === i ){
       this.setState({
       currentLabel: this.state.currencies[index].currencyLabel,
       currency: this.state.currencies[index].currency
      })
     }
    })
   }


  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Select
          width={250}
          ref="SELECT1"
          optionListRef={this._getOptionList.bind(this)}
          defaultValue="Select a Province in Canada ..."
          onSelect={this._canada.bind(this)}>
          <Option>Alberta</Option>
          <Option>British Columbia</Option>
          <Option>Manitoba</Option>
          <Option>New Brunswick</Option>
          <Option>Newfoundland and Labrador</Option>
          <Option>Northwest Territories</Option>
          <Option>Nova Scotia</Option>
          <Option>Nunavut</Option>
          <Option>Ontario</Option>
          <Option>Prince Edward Island</Option>
          <Option>Quebec</Option>
          <Option>Saskatchewan</Option>
          <Option>Yukon</Option>
        </Select>

        <View style={{ height: 10 }}/>

        <Select
          width={250}
          ref="SELECT2"
          optionListRef={this._getOptionList.bind(this)}
          defaultValue="Select a State in USA ..."
          onSelect={this._usa.bind(this)}>
          <option>Alabama</option>
          <option>Alaska</option>
          <option>Arizona</option>
          <option>Arkansas</option>
          <option>California</option>
          <option>Colorado</option>
          <option>Connecticut</option>
          <option>Delaware</option>
          <option>District Of Columbia</option>
          <option>Florida</option>
          <option>Georgia</option>
          <option>Hawaii</option>
          <option>Idaho</option>
          <option>Illinois</option>
          <option>Indiana</option>
          <option>Iowa</option>
          <option>Kansas</option>
          <option>Kentucky</option>
          <option>Louisiana</option>
          <option>Maine</option>
          <option>Maryland</option>
          <option>Massachusetts</option>
          <option>Michigan</option>
          <option>Minnesota</option>
          <option>Mississippi</option>
          <option>Missouri</option>
          <option>Montana</option>
          <option>Nebraska</option>
          <option>Nevada</option>
          <option>New Hampshire</option>
          <option>New Jersey</option>
          <option>New Mexico</option>
          <option>New York</option>
          <option>North Carolina</option>
          <option>North Dakota</option>
          <option>Ohio</option>
          <option>Oklahoma</option>
          <option>Oregon</option>
          <option>Pennsylvania</option>
          <option>Rhode Island</option>
          <option>South Carolina</option>
          <option>South Dakota</option>
          <option>Tennessee</option>
          <option>Texas</option>
          <option>Utah</option>
          <option>Vermont</option>
          <option>Virginia</option>
          <option>Washington</option>
          <option>West Virginia</option>
          <option>Wisconsin</option>
          <option>Wyoming</option>
        </Select>

        <View style={{ height: 20 }}></View>

        <Text>Selected Canada's province: {this.state.canada}</Text>
        <Text>Selected USA's state: {this.state.usa}</Text>
        
        <OptionList ref="OPTIONLIST"/>
    </View>

    /*
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Picker
          style={{height: 30, width: 200, borderWidth: 2, borderColor: '#00008b'}}
          selectedValue={this.state.currency }
          onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}>{
          this.state.currencies.map( (v)=>{
            return <Picker.Item
            style={{height: 70}}
            color = '#00008b'
            label={v.country + "\n" + v.currencyLabel} 
            value={v.currency} />
            })
          }
        </Picker>
        </View>
        */

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
