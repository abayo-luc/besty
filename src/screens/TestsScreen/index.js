import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Container from '../../components/Container';
import styles from './styles';
import ListItem from './components/ListItem';
const data = [{ id: 'it-1' }, { id: 'it-2' }, { id: 'it-3' }, { id: 'it-4' }];
const TestScreen = ({ navigation }) => {
	const [query, setQuery] = useState('');
	const _handleNavigation = id => navigation.navigate('Quiz', { quizId: id });
	return (
		<Container containerStyles={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<ListItem {...item} onNavigate={() => _handleNavigation(item.id)} />
				)}
				keyExtractor={item => item.id}
				contentContainerStyle={styles.listContainer}
				ListHeaderComponent={
					<Searchbar
						placeholder='Search ...'
						onChangeText={setQuery}
						value={query}
					/>
				}
				ListHeaderComponentStyle={styles.searchContainer}
			/>
		</Container>
	);
};

export default TestScreen;
