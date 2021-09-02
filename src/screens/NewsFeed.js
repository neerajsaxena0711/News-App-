import React, { useEffect } from 'react';
import NewsCard from '../Components/NewsCard';
import SearchBar from '../Components/SearchBar'
import { getNews } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import {
    FlatList,
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

const NewsFeed = () => {

    const { news, isLoading } = useSelector(state => state.newsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, []);

    if (!news) {
        return null;
    }

    if (isLoading) {
        return (
            <ActivityIndicator style={styles.spinner} size="large" color="black" />
        )
    } else {
        return (
            <View>
                <SearchBar />
                {
                    news?.articles?.length ? (
                        <FlatList data={news.articles}
                            keyExtractor={(item, index) => 'key' + index}
                            renderItem={({ item }) => {
                                return <NewsCard item={item} />
                            }}
                        />
                    )
                        : (
                            <View>
                                <Text style={styles.nodata}>
                                    No News Available
                                </Text>
                            </View>
                        )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nodata: {
        marginTop: '50%',
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center'
    },
    spinner: {
        flex: 1,
        alignSelf: 'center'
    }
});

export default NewsFeed;