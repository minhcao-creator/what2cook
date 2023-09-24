import React from 'react';
import { View, StyleSheet } from 'react-native';
import Award from './assets/backgroundIMG.svg';
import BeginScreen from './screens/BeginScreen';
import TakeAPicScreen from './screens/TakeAPicScreen';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<TakeAPicScreen />
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});