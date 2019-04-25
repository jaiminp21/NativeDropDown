import React, {Component} from 'react';
import { Text, View , TouchableOpacity, StyleSheet} from 'react-native';

export default class OptionTamplete extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item,
            accName,
            balance,
            containerStyle,
            textAccStyle,
            textBalStyle,
        };
    }

    render() {
        return (
            <View style = {this.state.containerStyle}>
                <Text style = {this.state.textAccStyle}>
                    {this.state.accName}
                </Text>
                <Text style = {this.state.textBalStyle}>
                    {this.state.balance}
                </Text>
            </View>
        )
    }
}