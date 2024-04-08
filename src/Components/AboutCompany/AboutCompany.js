import React, { useEffect, useState } from 'react'
import '../AboutCompany/AboutCompany.css'
import pic from '../../images/pickup.png'
import logout from '../../images/logout .png'
import dustbin from '../../images/recyclebackground.jpg'
import carousel from '../../images/carousel-img2.jpg'
import moneyman from '../../images/Money_man.png'
import doorstep from '../../images/Doorstep.png'
import friends from '../../images/Friends.png'
import earth from '../../images/Go_green.png'
import pickuptime from '../../images/Pickup_time.png'
import truck from '../../images/Truck.png'
import receive from '../../images/Recieve_money.png'
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import shobha from "../../images/carousel-img3.jpeg";
import bhavitha from '../../images/carousel-img4.jpeg'
const AboutCompany = () => {
    const [showFullText, setShowFullText] = useState({});
    const handleClick = (id) => {
        setShowFullText((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    const contentData = [
        {
            id: 1,
            title: "Amit",
            image: moneyman,
            text:
                "Extremely prompt service very polite customer and interhelper and the collection team was though helpful and very neat.",
        },
        { id: 2, 
            title: "Ria", 
            image: moneyman, 
            text: "Hassel free good experience with EcoClan.Home pickup service is very convenient and a great initative.",
    },
        {
            id: 3,
            title: "Kriti",
            image: moneyman,
            text:"Extremely prompt service very polite customer and interhelper and the collection team was though helpful and very neat.",

        },
        {
            id: 4,
            title: "Rahul",
            image: moneyman,
            text:
                "Hassel free good experience with EcoClan.Home pickup service is very convenient and a great initative.",
        },
        {
            id: 5,
            title: "Sana",
            image: moneyman,
            text:
            "Extremely prompt service very polite customer and interhelper and the collection team was though helpful and very neat.",
        },
        {
            id: 6,
            title: "Raju",
            image: moneyman,
            text:
            "Hassel free good experience with EcoClan.Home pickup service is very convenient and a great initative.",
        },
    ];




    return (
        <div className='Aboutcompany-main'>
            <div className='Aboutcompany-submain'>
                <div className='row Aboutcompany'>
                    <div className='col-2'>
                        <Link to='/SchePickup'> <img className='pic' src={pic} alt=" "></img></Link>
                    </div>
                    <div className='col-8'>
                        <p style={{ fontSize: "25px", fontWeight: "700", paddingTop: "9px" }}>EcoClan</p>
                    </div>
                    <div className='col-2'>
                        <Link to='/login'>    <img className='logouted' src={logout} alt=" "></img></Link>
                    </div>

                </div>
                <div className='abouted'>
                    <div className='row'>
                        <div className='col-12'>
                            <img className='dustbin' src={dustbin}></img>
                        </div>
                        <div className='col-12 pt-3 '>
                            <h3 className=' text-success company-about' style={{ fontWeight: "600" }}>About Company</h3>
                            <p className='about-para' style={{ textAlign: "start", marginLeft: "20px", fontSize: "16px", fontWeight: "400" }}>The "EcoClan" is a team of service providers who have to set out to assist individuals in getting better deals for there scrap. They ensure that the scrap is recycled and reused to its best. This platform helps in processing waste for efficient use.</p>
                        </div>
                        <div className='col-12 text-success'>
                            <h3 className='intiative' style={{ fontWeight: "600" }}>Our Initiatives</h3>
                        </div>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}

                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img className='dustbinn' src={carousel} /></SwiperSlide>
                            <SwiperSlide><img className='dustbinn' src={shobha} /></SwiperSlide>
                            <SwiperSlide><img className='dustbinn' src={bhavitha} /></SwiperSlide>



                        </Swiper>


                    </div>
                    <div className='container-fluid'>
                        <div className='row whyus'>
                            <div className='col-12'>
                                <h3 className='text-dark' style={{ fontWeight: "600" }}>Why Us?</h3>
                            </div>
                            <div className='col-6'>
                                <img className='doorstep' src={moneyman}></img>
                                <h6 className='text-dark pt-2 expection'>EXPECTIONAL RATE</h6>
                                <p className='recycled'>We provide the best value for your scrap from our network of recyclers.</p>

                            </div>
                            <div className='col-6'>
                                <img className='doorstep' src={doorstep}></img>
                                <h6 className='text-dark pt-2 conveinence'>CONVENIENCE</h6>
                                <p className='doorsteped'>A Doorstep pickup according to user's convenient date.</p>
                            </div>


                            <div className='col-6'>
                                <img className='doorstepp' src={friends}></img>
                                <h6 className='text-dark pt-2 trusted'>TRUST</h6>
                                <p className='pt-3 trained'>Trained and verified pickup staff with swapeco smart weighing scale.</p>
                            </div>
                            <div className='col-6'>
                                <img className='doorstep' src={earth}></img>
                                <h6 className='text-dark pt-2 trustedd'>ENVIRONMENTALLY-SAFE</h6>
                                <p className='scraped'>We ensure responsible recycling on your scrap items.</p>
                            </div>

                        </div>
                    </div>
                    <div className='row' style={{ fontWeight: "600" }}>
                        <div className='col-12 mt-2'>
                            <h3 className='operated' style={{ fontWeight: "600" }}>How We Operate?</h3>
                        </div>
                        <div className='col-4'>
                            <img className='truck' src={pickuptime}></img>
                            <p className='pickupscrolls' >Schedule a pickup</p>
                        </div>
                        <div className='col-4'>
                            <img className='trucks' src={truck}></img>
                            <p className='pickupscroll' >Pickup at your address</p>
                        </div>
                        <div className='col-4'>
                            <img className='trucked' src={receive}></img>
                            <p className='pickupscrolled'>Receive Payment</p>
                        </div>

                    </div>




                    <div className='row bg-white mt-2'>
                        <div className='col-12'>
                            <h3 className='testniomals' style={{ fontWeight: "600" }}>Testinomals</h3>
                        </div>
                    </div>




                    <div className='row mt-2'>
                        {contentData.map((contentItem) => (
                            <div className='col-6 about-column mb-3'>
                                <div class="card about-head">
                                    <div className='card-header d-flex'>
                                        <img className='rounded-circle' src={contentItem.image} />
                                        <p className='pt-4 about-amit'>{contentItem.title}</p>
                                    </div>
                                    <div class="card-body-about"style={{height:"230px"}} >
                                        <p>
                                            {showFullText[contentItem.id]
                                                ? contentItem.text
                                                : `${contentItem.text.slice(0, 60)}...`}
                                        </p>
                                        {showFullText[contentItem.id] ? (
                                            <a  className='btn text-success' onClick={() => handleClick(contentItem.id)}>
                                                Read less
                                            </a>
                                        ) : (
                                            <a className='btn text-success' onClick={() => handleClick(contentItem.id)}>
                                              <p > Read more</p> 
                                            </a>
                                        )}
                                    </div>
                                    </div>

                                </div>
                        ))}

                        
                    </div>

                    {/* <div className='row mt-2'>
                        <div className='col-6 about-column'>
                            <div class="card about-head">
                                <div className='card-header d-flex'>
                                    <img className='rounded-circle' src={moneyman} />
                                    <p className='pt-4 about-amit'>Irfan</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Extremely prompt service very polite customer and interhelper and the collection team was though helpful and very neat.Really appreciate the work put in.</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-6 about-second'>
                            <div class="card about-body">
                                <div className='card-header d-flex'>
                                    <img className='rounded-circle' src={moneyman} />
                                    <p className='pt-4 about-shan'>Kriti</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text-hasel">Hassel free good experience with EcoClan.Home pickup service is very convenient and a great initative to save the environment. will surely recommend to others.</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='row mt-2'>
                        <div className='col-6 about-column'>
                            <div class="card about-head">
                                <div className='card-header d-flex'>
                                    <img className='rounded-circle' src={moneyman} />
                                    <p className='pt-4  about-amit'>Vijay</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Extremely prompt service very polite customer and interhelper and the collection team was though helpful and very neat.Really appreciate the work put in.</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-6 about-second'>
                            <div class="card about-body" >
                                <div className='card-header d-flex'>
                                    <img className='rounded-circle' src={moneyman} />
                                    <p className='pt-4 about-shan'>Reema</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text-hasel">Hassel free good experience with EcoClan.Home pickup service is very convenient and a great initative to save the environment. will surely recommend to others.</p>
                                </div>

                            </div>
                        </div>
                    </div> */}








                </div>

                <div className='row aboutcompany-box '>
                    <div className='col-2'>
                        <Link to='/giveaway'>       <img className='gifts' src={hand}></img></Link>
                    </div>
                    <div className='col-2'>
                        <Link to='/dashboard'>   <img className='gifts' src={globe}></img></Link>
                    </div>
                    <div className='col-3'>
                        <Link to='/AboutCompany'>    <img className='gifts' src={home}></img></Link>
                    </div>
                    <div className='col-2'>
                        <Link to='/rewards'>    <img className='gifts' src={gift}></img></Link>
                    </div>
                    <div className='col-2'>

                        <Link to='/user'>   <img className='gifts' src={user}></img></Link>
                    </div>

                </div>








            </div>

        </div>
    )
}

export default AboutCompany

