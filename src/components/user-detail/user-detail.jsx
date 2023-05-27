import React, { useEffect, useState } from "react";
export function UserDetail() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);
    const [accessToken, setAccessToken] = useState('');
    useEffect(() => {
      const getAccessToken = async () => {
        try {
          const response = await fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'api-token': 'NJ89zvRjsQFeqoUSv2CBu-fc2S46K_VIvOkP4RZnIKNQtp0yZAV8nYfKfVP_DjKEQfM',
              'user-email': 'jeanescobar2@hotmail.com'
            }
          });
          const data = await response.json();
          const auth_token = data.auth_token;
          setAccessToken(auth_token);
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      };
  
      getAccessToken();
    }, []);
    useEffect(() => {
      const getCountries = async () => {
        try {
          const response = await fetch('https://www.universal-tutorial.com/api/countries', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Accept': 'application/json'
            }
          });
          const data = await response.json();
          setCountries(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching countries:', error);
        }
      };
      if (accessToken !== '') {
        getCountries();
      }
    }, [accessToken]);
    useEffect(() => {
      const getStates = async () => {
        try {
          const response = await fetch(`https://www.universal-tutorial.com/api/states/${selectedCountry}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Accept': 'application/json'
            }
          });
          const data = await response.json();
          setStates(data);
        } catch (error) {
          console.error(`Error fetching states for country ${selectedCountry}:`, error);
        }
      };
      if (selectedCountry !== '') {
        getStates();
      }
    }, [accessToken, selectedCountry]);
    useEffect(() => {
      const getCities = async () => {
        try {
          const response = await fetch(`https://www.universal-tutorial.com/api/cities/${selectedState}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Accept': 'application/json'
            }
          });
          const data = await response.json();
          setCities(data);
        } catch (error) {
          console.error(`Error fetching cities for state ${selectedState}:`, error);
        }
      };
  
      if (selectedState !== '') {
        getCities();
      }
    }, [accessToken, selectedState]);
    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
      setSelectedState('');
      setCities([]);
    };
    const handleStateChange = (event) => {
      setSelectedState(event.target.value);
    };
    return (
        <div className="user_detail">
            <p>Detalles</p>
            <label htmlFor="username">
                <p>Nombre de Usuario</p>
                <input type="text" id="username" name="username" />
            </label>
            <label htmlFor="email">
                <p>Correo</p>
                <input type="text" id="email" name="email" />
            </label>
            <div>
                <label htmlFor="firstname">
                    <p>Nombre</p>
                    <input type="text" id="firstname" name="firstname" />
                </label>
                <label htmlFor="lastname">
                    <p>Apellido</p>
                    <input type="text" id="lastname" name="lastname" />
                </label>
            </div>
            <div>
                <label htmlFor="birthday">
                    <p>Fecha de nacimiento</p>
                    <input type="date" name="birthday" id="birthday" />
                </label>
                <label htmlFor="phone">
                    <p>Telefono</p>
                    <input type="number" id="phone" name="phone" />
                </label>
            </div>
            <div>
                <label htmlFor="country">
                    <p>Pais</p>
                    <select name="country" id="country" value={selectedCountry} onChange={handleCountryChange}>
                        <option value="">Pais</option>
                        {countries.map((country) => (
                            <option key={country.country_name} value={country.country_name}>
                                {country.country_name}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="city">
                    <p>Estado</p>
                    <select name="state" id="state" value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
                        <option value="">Estado</option>
                        {states.map((state) => (
                            <option key={state.state_name} value={state.state_name}>
                                {state.state_name}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="">
                    <p>Ciudad</p>
                    <select name="city" id="city" disabled={!selectedState}>
                        <option value="">Ciudad</option>
                        {cities.map((city) => (
                            <option key={city.city_name} value={city.city_name}>
                                {city.city_name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <label id="confirm_email" htmlFor="confirm_email">
                <input type="checkbox" name="confirm_email" id="confirm_email" /><p>Enviar correo de confirmacion</p>
            </label>
            <button>Guardar</button>
        </div>
    );
}