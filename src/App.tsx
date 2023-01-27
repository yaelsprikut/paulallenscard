import React, { useState, useEffect } from 'react'
import './Newsboard.css'
require('./scripts/dashboard')
// import styled from 'styled-components';
import Card from './components/Card'
import { getTopHeadlines } from './scripts/client'
var TinyURL = require('tinyurl');

const shortenUrl = async (url: string) => {
const response = await TinyURL.shorten(url);
// console.log("RESPONSE: ", response)
return response;
}

interface Props {}

interface State {
    articles: any
}

const COLOUR_ARRAY = [
    'pink',
    'purple',
    'cyan',
    'amber',
    'blue',
    'red',
    'indigo',
    'orange',
    'green',
]

class App extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            articles: null,
        }
    }
    async componentDidMount() {
        const articleData = await getTopHeadlines()
        articleData.articles.forEach(async(article: any) => {
          if(article.urlToImage) {
            const shortt = await shortenUrl(article.urlToImage)
            article.backupImage = article.urlToImage.includes("cloudfront") ? shortt : shortt
          }
        })
        this.setState({ articles: articleData.articles })
    }
    render() {
        const showCard = [] as any
        if (!this.state.articles) return <div>loading....</div>
        this.state.articles &&
            this.state.articles.forEach((article: any, i: number) => {
                showCard.push(
                    <Card
                        color={COLOUR_ARRAY[i % COLOUR_ARRAY.length]}
                        headline={article.title}
                        img={article.urlToImage || article.backupImage}
                        url={article.url}
                        source={article.source.name}
                    />
                )
            })
        return (
            <div
                className="dashboard display-animation"
                style={{ margin: '0 auto', width: '1130px' }}
            >
                {showCard}
            </div>
        )
    }
}

export default App
