import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

const CountryDetails = ({ route, navigation }) => {
	const { item } = route.params;
	navigation.setOptions({ title: `${item.name} details` });
	return (
		<View>
			<Text>Full name: {item.name}</Text>
			<Text>Capital city: {item.capital}</Text>
			<Text>Region: {item.region}</Text>
			<Text>Native name: {item.nativeName}</Text>
			<Text>Numeric code: {item.numericCode}</Text>
			<Image
				style={styles.flag}
				source={{
					uri: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
				}}
			/>
		</View>
	);
};
export default CountryDetails;

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#00bfff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 24,
	},
	flag: {
		height: 300,
		width: 300,
	},
});
