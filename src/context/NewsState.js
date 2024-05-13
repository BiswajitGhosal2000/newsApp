import React, { useState } from 'react';
import NewsContext from './NewsContext';
require('dotenv').config();



const apiKey = process.env.REACT_APP_NEWS_API_KEY;
const country = process.env.COUNTRY;
const pageSize = process.env.PAGE_SIZE;

function NewsState(props) {
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('general');


    const fetchArticles = async () => {
        // setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            return parsedData;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchMoreData = async (category) => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            return parsedData;
        } catch (error) {
            console.error('Error fetching more data:', error);
        }
    };

    return (
        <NewsContext.Provider value={{ fetchArticles, fetchMoreData, setCategory }}>
            {props.children}
        </NewsContext.Provider>
    );
};

export default NewsState;
