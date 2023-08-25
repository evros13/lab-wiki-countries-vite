import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function HomePage() {

    const [countries, setCountries] = useState([])
    const apiUrl = "https://ih-countries-api.herokuapp.com/countries"


    useEffect(() => {
        fetch(apiUrl)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCountries(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function toLowerCase(str) {
        return str.toLowerCase()
    }

    if (countries.length === 0) {
        return <img className="loading" src="./../public/loadinggif.gif" alt="Loading" />
    }
    
    return (
        <>
            <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
                <div className="list-group">
                 {   countries.map((country) => (
                        <div key={country.alpha3Code}>
                            <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}> <img style={{height: "15px"}} src={`https://flagpedia.net/data/flags/icon/72x54/${toLowerCase(country.alpha2Code)}.png`} alt="" />
                                {country.name.common}</Link>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default HomePage;
