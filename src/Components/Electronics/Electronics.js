import React, { useState, useEffect } from 'react';
import '../Electronics/Electronics.css';
import { CurrencyRupee } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const Electronics = () => {
    const [electronicsData, setElectronicsData] = useState([]);
    const [prices, setPrices] = useState({});
    const [bike, setBike] = useState([]);
    const [userId, setUserId] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('auth');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserId(decodedToken.id);
        }

        axios.get('http://localhost:5000/api/products/2')
            .then((response) => {
                setElectronicsData(response.data);

                const storedPrices = JSON.parse(localStorage.getItem("prices")) || {};
                setPrices(storedPrices);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("prices", JSON.stringify(prices));
        localStorage.setItem("bike", JSON.stringify(bike));
        localStorage.setItem("userId", JSON.stringify(userId));
    }, [prices, bike, userId]);

    const incrementPrice = (id) => {
        setPrices(prevPrices => ({
            ...prevPrices,
            [id]: (prevPrices[id] || 0) + 1
        }));
        if (!bike.includes(id)) {
            setBike((bike) => [...bike, id]);
        }
    };

    const decrementPrice = (id) => {
        if (prices[id] && prices[id] > 0) {
            setPrices(prevPrices => ({
                ...prevPrices,
                [id]: prevPrices[id] - 1
            }));
        }
    };

    return (
        <div className='product_electronics'>
            <div className='electronics-submain-body'>
                <div className='row'>
                    {electronicsData && electronicsData.length > 0 ? (
                        electronicsData.map(item => (
                            <div className='col-4' key={item.id}>
                                <img className='electronics_section' src={" "} alt="" />
                                <div className='electronics_section-part'>{item.name}</div>
                                <div className='electronics_third'>
                                    piece-<CurrencyRupee /> {item.price}
                                </div>
                                <div className="electronics-container">
                                    <FontAwesomeIcon onClick={() => decrementPrice(item.id)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
                                    <span className="price">{prices[item.id] || 0}</span>
                                    <FontAwesomeIcon onClick={() => incrementPrice(item.id)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
            <div>
                <Link className='' style={{ textDecoration: "none", color: "black" }} to='/free'>
                    <button className='next_butto'>NEXT</button>
                </Link>
            </div>
        </div>
    );
}

export default Electronics;
