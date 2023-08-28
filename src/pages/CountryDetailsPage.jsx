import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CountryDetails() {
    const { alpha3Code } = useParams();
    const [countryInfo, setCountryInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const countryApi = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`;

    useEffect(() => {
        fetch(countryApi)
            .then((res) => res.json())
            .then((data) => {
                setCountryInfo(data);
                console.log(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [countryApi]);

    return (
        <>

            {!isLoading ? 
            
            <div className="container">
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
                <h1>{countryInfo.name.common}</h1>

                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>{countryInfo.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{countryInfo.area} km<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {countryInfo.borders?.length > 0 ? (
                                        <ul>
                                            {countryInfo.borders.map((border) => (
                                                <li key={border}>
                                                    <Link to={`/${border}`}>{border}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>This country doesn't border with other countries.</p>
                                    )}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            :
            <p>Loading...</p>
        }
        </>
    );
}

export default CountryDetails;