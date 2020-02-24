import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Searchbar, ProgressBar, useTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import Container from '../../components/Container';
import { fetchTests } from '../../store/actions/test.actions';
import styles from './styles';
import ListItem from './components/ListItem';

const TestScreen = ({ navigation, fetchData, isFetching, tests }) => {
	const { colors } = useTheme();
	const [query, setQuery] = useState('');
	const _handleNavigation = id => navigation.navigate('Quiz', { quizId: id });
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<Container containerStyles={styles.container}>
			{isFetching && <ProgressBar indeterminate color={colors.accent} />}
			<FlatList
				data={Object.values(tests)}
				renderItem={({ item }) => (
					<ListItem {...item} onNavigate={() => _handleNavigation(item.id)} />
				)}
				keyExtractor={item => `test-${item.id}`}
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

const mapStateToProps = ({ tests }) => ({
	...tests
});
export default connect(mapStateToProps, { fetchData: fetchTests })(TestScreen);
