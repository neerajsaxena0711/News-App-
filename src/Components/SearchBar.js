import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { getNewsBySearch, getNews } from '../redux/actions';

const { width } = Dimensions.get('window');
const SearchBar = () => {

    let searchQuery = '';
    const dispatch = useDispatch();

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }

    const getTwoDates = () => {
        let today = new Date();
        let yesterday = today.setDate(today.getDate() - 1);
        let td = formatDate(today);
        let yd = formatDate(yesterday);
        if (td && yd) {
            dispatch(getNewsBySearch(searchQuery, yd, td));
        }
    }

    const handleChange = (e) => {
        if (e.length > 3) {
            searchQuery = e;
            getTwoDates();
            // dispatch(getNewsBySearch(e));
        } else if (!e) {
            dispatch(getNews());
        }
    }

    return (
        <View style={styles.container}>
            <TextInput clearButtonMode="always" debounce="700" style={styles.searchInput} placeholder="Search News..."
                onChangeText={handleChange} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: width * 0.03,
        height: 50,
        borderRadius: 16,
        justifyContent: 'center'
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
        backgroundColor: 'white'
    }
});

export default SearchBar;