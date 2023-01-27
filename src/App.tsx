import React, { useState, useEffect } from 'react'
import './Newsboard.css'
require('./scripts/dashboard')
// import styled from 'styled-components';
import Card from './components/Card'
import { getTopHeadlines } from './scripts/client'
var TinyURL = require('tinyurl')
import * as constants from './constants/dropdown-options'

const shortenUrl = async (url: string) => {
    const response = await TinyURL.shorten(url)
    // console.log("RESPONSE: ", response)
    return response
}

interface Props {}

interface State {
    articles: any
    country: any
}

class App extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.change = this.change.bind(this)
        this.state = {
            articles: null,
            country: null,
        }
    }
    async componentDidMount() {
        const articleData = await getTopHeadlines('ca')
        articleData.articles.forEach(async (article: any) => {
            if (article.urlToImage) {
                const shortt = await shortenUrl(article.urlToImage)
                article.backupImage = article.urlToImage.includes('cloudfront')
                    ? shortt
                    : shortt
            }
        })
        this.setState({ articles: articleData.articles })
    }

    async change(e: any) {
        const articleData = await getTopHeadlines(e.target.value)
        articleData.articles.forEach(async (article: any) => {
            if (article.urlToImage) {
                const shortt = await shortenUrl(article.urlToImage)
                article.backupImage = article.urlToImage.includes('cloudfront')
                    ? shortt
                    : shortt
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
                        color={
                            constants.COLOUR_ARRAY[
                                i % constants.COLOUR_ARRAY.length
                            ]
                        }
                        headline={article.title}
                        img={article.urlToImage || article.backupImage}
                        url={article.url}
                        source={article.source.name}
                    />
                )
            })
        function getCountryName(countryCode: string) {
            if (constants.isoCountries.hasOwnProperty(countryCode)) {
                // @ts-ignore
                return constants.isoCountries[countryCode]
            } else {
                return countryCode
            }
        }
        const dropdownCountry = () => {
            const options = [] as any
            constants.COUNTRIES.forEach(code => {
                options.push(
                    <option value={code}>{getCountryName(code)}</option>
                )
            })
            return (
                <select
                    name="pets"
                    id="pet-select"
                    onChange={e => this.change(e)}
                >
                    <option value="">--Please choose an option--</option>
                    {options}
                </select>
            )
        }
        return (
            <>
                <div>
                    <br />
                    <label>Choose a country:&nbsp;</label>
                    {dropdownCountry()}
                </div>
                <div
                    className="dashboard display-animation"
                    style={{ margin: '0 auto', width: '1130px' }}
                >
                    {showCard}
                </div>
            </>
        )
    }
}

export default App
