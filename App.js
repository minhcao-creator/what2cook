import React from 'react';
import { View, StyleSheet } from 'react-native';
import Award from './assets/backgroundIMG.svg';
import BeginScreen from './screens/BeginScreen';
import TakeAPicScreen from './screens/TakeAPicScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen'
import Navigation from './Navigation';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Navigation />
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});