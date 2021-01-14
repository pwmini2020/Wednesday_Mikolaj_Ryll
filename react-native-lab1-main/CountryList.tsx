import React, { useState, useEffect } from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	Image,
	TouchableOpacity,
	RefreshControl,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CountryList = ({ navigation }) => {
	const [isLoading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);
	const [searchText, setSearchText] = useState("");

	const onRefresh = () =>
	{
		if(searchText.length >=3)
		{
			setLoading(true);
			fetch('https://restcountries.eu/rest/v2/name/'+searchText)
			.then((response) => {if(response.ok) return response.json(); else return [];})
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
		}
		else
		{
			setLoading(true);
			fetch('https://restcountries.eu/rest/v2/all')
			.then((response) => response.json())
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
		}
	  }

	const onChangeText = (text) => {
		if(text.length >=3)
		{
			setLoading(true);
			fetch('https://restcountries.eu/rest/v2/name/'+text)
			.then((response) => {if(response.ok) return response.json(); else return [];})
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
		}
		else if(searchText.length >=3)
		{
			setLoading(true);
			fetch('https://restcountries.eu/rest/v2/all')
			.then((response) => response.json())
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
		}
		setSearchText(text);
	}

	const renderListItem = ({ item }) => (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('Details', {item});
			}}
			style={styles.item}
		>
			<Text style={styles.title}>{item.name}</Text>
			<Image
				style={styles.flag}
				source={{
					uri: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
				}}
			/>
		</TouchableOpacity>
	);

	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((response) => response.json())
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<TextInput onChangeText={onChangeText}
						placeholder ="Search..."
						value={searchText}/>
			{isLoading ? (
				<Text>Loading...</Text>
			) : (
				<View>
					<Text>Found {countries.length} countries</Text>
					<FlatList
						data={countries.slice(0, countries.length)}
						renderItem={renderListItem}
						keyExtractor={(item) => item.name}
						refreshControl={
							<RefreshControl
							refreshing={isLoading}
              				onRefresh={onRefresh}
							/>
						}
					/>
				</View>
			)}
		</SafeAreaView>
	);
};

export default CountryList;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
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
		height: 64,
		width: 64,
	},
});
