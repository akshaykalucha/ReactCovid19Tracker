import React, { Component } from 'react';
import { Cards, Charts, CountryPicker } from '.'
import styles from './RootMain.module.css'
import { fetchData } from './apiCalls/index'
import CovidImage from '../images/covidimage.png'



export class RootMain extends Component {

    state ={
        data : {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country)
        
        this.setState({ data: fetchedData, country: country })
    }

    render() {

        const { data, country } = this.state

        return (
            <div className={styles.container}>
            <img src={CovidImage} className={styles.image} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        )
    }
}

export default RootMain
