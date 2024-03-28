import React, { useEffect, useState } from 'react';
import '../Plastic/Plastic.css';
import { Link } from 'react-router-dom';
import { CurrencyRupee } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';


const Plastic = () => {
   
    const [plastic, setPlastic] = useState([]);
    const [prices, setPrices] = useState({});

    useEffect(() =>{
        axios.get('http://192.168.29.47:5000/api/products/6 ')
        .then((response)=>{
           console.log("plastic.data",response.data)
           setPlastic(response.data)
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const incrementPrice = (id) => {
        setPrices(prevPrices => ({
            ...prevPrices,
            [id]: prevPrices[id] + 1
        }));
    };

    const decrementPrice = (id) => {
        if (prices[id] > 0) {
            setPrices(prevPrices => ({
                ...prevPrices,
                [id]: prevPrices[id] - 1
            }));
        }
    };

    return (
        <div className='product_plastic' style={{ marginTop: "60px" }}>
            <div className='plastic-submain-body'>
                <div className='row'>
                    {plastic.map(item => (
                        <div className='col-4' key={item.id}>
                            <img className='plastic_section' src={" "} alt="" />
                            <div className='plastic_section-part'>
                                {item.name}
                            </div>
                            <div className='plastic_third'>
                                kg-<CurrencyRupee /> {item.price}
                            </div>
                            <div className="plastic-container">
                                <FontAwesomeIcon onClick={() => incrementPrice(item.id)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
                                <span className="price">{prices[item.id]}</span>
                                <FontAwesomeIcon onClick={() => decrementPrice(item.id)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
            <Link to='/free'>     <button className='next_butto'>NEXT</button></Link>

            </div>
        </div>
    );
}

export default Plastic;
