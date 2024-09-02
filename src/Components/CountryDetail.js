import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(response => response.json())
      .then(data => setCountry(data[0]))
      .catch(error => console.error('Error fetching country details:', error));
  }, [code]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="mt-5">
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.name.common} style={{ width: '200px' }} />
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
    </div>
  );
};

export default CountryDetail;
