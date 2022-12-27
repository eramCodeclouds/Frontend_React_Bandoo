import { useState, useEffect } from 'react'
import { FaInfo } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaCheck, FaLock } from "react-icons/fa";
import Menus from "../menus/Menus";
import Footer from "../footer/Footer";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import countrydata from '../../countryData.json';

import "./banner.css";
const Banner = () => {

    const [active1, setActive1] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)

    // for phone number country code
    const [value, setValue] = useState()
    //for country 
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');


    const handlecounty = (e) => {
        const getcountryId = e.target.value;
        const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
        setState(getStatedata);
        setCountryid(getcountryId);

        //console.log(getcountryId);

    }
    const handlestate = (e) => {
        const stateid = e.target.value;
        setStateid(stateid);
    }
    // useEffect(() => {
    //     countrydata.forEach(element => {
    //         console.log(countrydata.find(state => element.country_id === '100')?.state_name)
    //     });

    // }, [])
    // function inputHandler() {
    //     alert('ok')
    //     document.getElementById("phone").className = "border";
    // }

    return (
        <>
            <div className="banner m-0 py-0"   >
                <div className="row m-0 banner-row">
                    <div className="banner-content">
                        <div className=" col-md-5 img-fluid" >
                            <img src="../dist/img/logo.png" alt="" />
                        </div>

                        <div className="col-md-5 img-fluid img-right" >
                            <img src="../dist/img/banner.png" alt="" className="justify-content-center" />
                        </div>
                    </div>
                </div>

                <Menus />

                <br />
                <div className="container">
                    <div className="row steps">

                        <div className="col-sm-11 col-md-6 col-lg-6 mx-auto">
                            {/* 70 percent discount card */}
                            <div className="card mt-0 mb-3 ">
                                <div className="media" >
                                    <div className="media-left">
                                        <figure className="image ml-3">
                                            <img src="../dist/img/70-discount-badge.png" alt="percent discount" width='64px' height='64px' />
                                        </figure>
                                    </div>
                                    <div className="media-content mr-3">
                                        <p className="py-0" style={{ color: 'red', fontWeight: 'bold', margin: 0, padding: 0 }}>Your 70% Discount Has Been Applied</p>
                                        <span className="mb-5" style={{ color: 'red', fontWeight: 'bold' }}> LIMITED TIME OFFER: </span>
                                        <span style={{ color: 'grey', fontWeight: 'bold', margin: 0, padding: 0 }}> Bandoo is available at the <br /> price of </span>
                                        <span style={{ textDecoration: 'line-through', color: 'black', fontWeight: 'bold' }}> $59.83 </span>
                                        <span style={{ color: '#4ECE7E', fontWeight: 'bold' }}>
                                            $17.95 </span>
                                        (70% Discount)

                                    </div>
                                </div>
                            </div>
                            {/* 70 percent discount ended */}


                            {/* card 2 - Product */}
                            <div className="card px-3 py-3">
                                <h3 className="mb-3 " style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '17px' }}>
                                    <span className="mr-2 py-2">
                                        <FaWalking />
                                    </span>
                                    Step 1: Select Order quantity
                                </h3>

                                <div className="product-options row" data-name="Quantity">
                                    <div className="col-md-6 mt-3">
                                        <div id="1" className={`option option-quantity is-clickable is-recommended triggerclickdiv  ${active1 && 'is-active'}`} onClick={() => {
                                            setActive1(true)
                                            setActive2(false)
                                            setActive3(false)
                                            setActive4(false)
                                        }}>
                                            <span className="option-badge" style={{ backgroundColor: '#3B57EA' }}>MOST POPULAR</span>
                                            <div className="columns" style={{ display: '-webkit-flex', alignItems: 'center', WebkitAlignItems: 'center' }}>
                                                <div className="column mb-5" style={{ justifyContent: 'center', WebkitJustifyContent: 'center', flexWrap: 'wrap', WebkitFlexWrap: 'wrap' }}>
                                                    <img src="../dist/img/product1.png" style={{ maxWidth: '100%', verticalAlign: "middle", marginTop: 17, maxHeight: "100px" }} />
                                                </div>
                                                <div className="column">
                                                    <p className="product-card m-0 ml-4">4x</p>
                                                    <p style={{ fontSize: 13 }} className="m-0">
                                                        Boxes of Detox Patches (40 Pads)
                                                    </p>
                                                    <p className="is-size-5 m-0 mt-10" style={{ textDecoration: 'line-through', color: '#b5b5b5', fontSize: 20 }} data-price="186.53">
                                                        $186.53
                                                    </p>
                                                    <p className="py-0 m-0" style={{ color: "#4ECE7E", fontWeight: "bold", fontSize: 26 }} data-price="55.96">
                                                        $55.96
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div id="1" className={`option option-quantity is-clickable is-recommended triggerclickdiv ${active2 && 'is-active'} `} onClick={() => {
                                            setActive1(false)
                                            setActive2(true)
                                            setActive3(false)
                                            setActive4(false)
                                        }} >
                                            <div className="columns" style={{ display: '-webkit-flex', alignItems: 'center', WebkitAlignItems: 'center' }}>
                                                <div className="column mb-5" style={{ justifyContent: 'center', WebkitJustifyContent: 'center', flexWrap: 'wrap', WebkitFlexWrap: 'wrap' }}>
                                                    <img src="../dist/img/product1.png" style={{ maxWidth: '100%', verticalAlign: "middle", marginTop: 17, maxHeight: "100px" }} />
                                                </div>
                                                <div className="column">
                                                    <p className="product-card m-0 ml-4">3x</p>
                                                    <p style={{ fontSize: 13 }} className="m-0">
                                                        Boxes of Detox Patches (30 Pads)
                                                    </p>
                                                    <p className="is-size-5 m-0 mt-10" style={{ textDecoration: 'line-through', color: '#b5b5b5', fontSize: 20 }} data-price="186.53">
                                                        $153.20
                                                    </p>
                                                    <p className="py-0 m-0" style={{ color: "#4ECE7E", fontWeight: "bold", fontSize: 26 }} data-price="55.96">
                                                        $45.96
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div id="1" className={`option option-quantity is-clickable is-recommended triggerclickdiv ${active3 && 'is-active'} `} onClick={() => {
                                            setActive1(false)
                                            setActive2(false)
                                            setActive3(true)
                                            setActive4(false)
                                        }} >
                                            <div className="columns" style={{ display: '-webkit-flex', alignItems: 'center', WebkitAlignItems: 'center' }}>
                                                <div className="column mb-5" style={{ justifyContent: 'center', WebkitJustifyContent: 'center', flexWrap: 'wrap', WebkitFlexWrap: 'wrap' }}>
                                                    <img src="../dist/img/product2.png" style={{ maxWidth: '100%', verticalAlign: "middle", marginTop: 17, maxHeight: "100px" }} />
                                                </div>
                                                <div className="column">
                                                    <p className="product-card m-0 ml-4">2x</p>
                                                    <p style={{ fontSize: 13 }} className="m-0">
                                                        Boxes of Detox Patches (20 Pads)
                                                    </p>
                                                    <p className="is-size-5 m-0 mt-10" style={{ textDecoration: 'line-through', color: '#b5b5b5', fontSize: 20 }} data-price="186.53">
                                                        $113.20
                                                    </p>
                                                    <p className="py-0 m-0" style={{ color: "#4ECE7E", fontWeight: "bold", fontSize: 26 }} data-price="55.96">
                                                        $33.96
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div id="1" className={`option option-quantity is-clickable is-recommended triggerclickdiv ${active4 && 'is-active'} `} onClick={() => {
                                            setActive1(false)
                                            setActive2(false)
                                            setActive3(false)
                                            setActive4(true)
                                        }} >
                                            <div className="columns" style={{ display: '-webkit-flex', alignItems: 'center', WebkitAlignItems: 'center' }}>
                                                <div className="column mb-5" style={{ justifyContent: 'center', WebkitJustifyContent: 'center', flexWrap: 'wrap', WebkitFlexWrap: 'wrap' }}>
                                                    <img src="../dist/img/product3.png" style={{ maxWidth: '100%', verticalAlign: "middle", marginTop: 17, maxHeight: "100px" }} />
                                                </div>
                                                <div className="column">
                                                    <p className="product-card m-0 ml-4">1x</p>
                                                    <p style={{ fontSize: 13 }} className="m-0">
                                                        Boxes of Detox Patches (10 Pads)
                                                    </p>
                                                    <p className="is-size-5 m-0 mt-10" style={{ textDecoration: 'line-through', color: '#b5b5b5', fontSize: 20 }} data-price="186.53">
                                                        $59.83
                                                    </p>
                                                    <p className="py-0 m-0" style={{ color: "#4ECE7E", fontWeight: "bold", fontSize: 26 }} data-price="55.96">
                                                        $17.95
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* your informations section */}

                        <div className="col-sm-11 col-md-6 col-lg-6 mx-auto ">
                            <div className="card card-right px-3 py-1">
                                <h3 className="mb-1 " style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '16px', color: "#4a4a4a" }}>
                                    <span className="mr-2 py-2">
                                        <FaInfo />
                                    </span>
                                    Step 2: Your Information
                                </h3>

                                <form>
                                    <div className="field stage-1">
                                        <label className="label-form mb-0 mb-0"> Email Address </label>
                                        <div className="control mb-2  has-icons-right">
                                            <input type="email" id="email" name="email" placeholder="Email Address" className="form-control" data-validate="email" data-error-message="Please enter a valid email id!" />
                                            <span className="icon is-small is-right mt-2 ml-5" style={{ fontSize: 7, }}>
                                                <svg className="svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                                                    <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field stage-2">
                                        <label className="label-form mb-0"> First Name </label>
                                        <div className="control mb-2 ">
                                            <input type="text" name="firstName" id="first_name" placeholder="First Name" className="form-control" data-error-message="Please enter your first name!" onkeyup="javascript: this.value = this.value.replace(/[^a-zA-Z\s]/g,'');" />
                                        </div>
                                    </div>
                                    <div className="field stage-2">
                                        <label className="label-form mb-0"> Last Name </label>
                                        <div className="control mb-2 ">
                                            <input type="text" name="lastName" id="last_name" placeholder="Last Name" className="form-control" data-error-message="Please enter your last name!" onkeyup="javascript: this.value = this.value.replace(/[^a-zA-Z\s]/g,'');" />
                                        </div>
                                    </div>
                                    <div className="field stage-2">
                                        <label className="label-form mb-0"> Phone Number </label>
                                        <div className="mb-2 ">
                                            {/* <input data-country="IN" type="tel" name="phone1" placeholder="Phone Number" className="form-control" id="phone_number" data-validate="phone" data-min-length={10} data-max-length={15} maxLength={20} data-error-message="Please enter a valid contact number!" /> */}
                                            <PhoneInput value={value} onChange={setValue} placeholder="Phone Number" id="phonesss" defaultCountry="IN" international
                                                countryCallingCodeEditable={false} />
                                        </div>


                                    </div>
                                    <div className="field stage-2">
                                        <label className="label-form mb-0"> Address Line 1 </label>
                                        <div className="control mb-2 ">
                                            <input type="text" name="shippingAddress1" placeholder="Address Line 1" className="form-control" id="shipping_street_address_1" data-error-message="Please enter your address!" />
                                        </div>
                                    </div>
                                    <div className="field stage-2">
                                        <label className="label-form mb-0"> City </label>
                                        <div className="control mb-2">
                                            <input type="text" name="shippingCity" id="city" placeholder="Your City" className="form-control " data-error-message="Please enter your city!" />
                                        </div>
                                    </div>

                                    {/* <div className="field stage-2">
                                        <label className="label-form mb-0">Country</label>
                                        <div className="select is-fullwidth mb-3">
                                            <select name="shippingCountry" className="form-control" data-error-message="Please select your country!" id="country" data-selected="IN">
                                                <option value="">Select Country</option>
                                                <option value="">India</option>
                                                <option value="">Nepal</option>
                                            </select>
                                        </div>
                                    </div> */}

                                    <div className="field stage-2">
                                        <label className="label-form mb-0">Country</label>
                                        <div className="select is-fullwidth mb-3">
                                            <select name="shippingCountry" className="form-control" data-error-message="Please select your country!" id="country" data-selected="IN" onChange={(e) => handlecounty(e)}>
                                                <option value="">Select Country</option>
                                                {
                                                    countrydata.map((getcountry, index) => (
                                                        <option value={getcountry.country_id} key={index} selected={getcountry.country_id === '101'}>{getcountry.country_name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        {/* <div className="col">
                                            <label className="label-form mb-0">State</label>
                                            <select className="form-control">
                                                <option value="">Select State</option>
                                                <option value="">Kolkata</option>
                                                <option value="">Mumbai</option>
                                            </select>
                                        </div> */}

                                        <div className="col">
                                            <label className="label-form mb-0">State</label>
                                            <select className="form-control" name='states' onChange={(e) => handlestate(e)}>
                                                <option value="">Select State</option>
                                                {
                                                    state.length != 0 ?
                                                        state.map((getstate, index) => (
                                                            <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                                                        ))
                                                        :
                                                        <>
                                                            <option value="1">Andaman and Nicobar Islands</option>
                                                            <option value="2">Andhra Pradesh</option>
                                                            <option value="3">Arunachal Pradesh</option>
                                                            <option value="4">Assam</option>
                                                            <option value="5">Bihar</option>
                                                            <option value="6">Chandigarh</option>
                                                            <option value="7">Dadra and Nagar Haveli</option>
                                                            <option value="8">Daman and Diu</option>
                                                            <option value="9">Delhi</option>
                                                            <option value="10">Goa</option>
                                                            <option value="11">Gujarat</option>
                                                            <option value="12">Haryana</option>
                                                            <option value="13">Himachal Pradesh</option>
                                                            <option value="14">Jammu and Kashmir</option>
                                                            <option value="15">Jharkhand</option>
                                                            <option value="16">Karnataka</option>
                                                            <option value="17">Kenmore</option>
                                                            <option value="18">Kerala</option>
                                                            <option value="19">Lakshadweep</option>
                                                            <option value="20">Madhya Pradesh</option>
                                                            <option value="21">Maharashtra</option>
                                                            <option value="22">Manipur</option>
                                                            <option value="23">Meghalaya</option>
                                                            <option value="24">Mizoram</option>
                                                            <option value="25">Nagaland</option>
                                                            <option value="26">Narora</option>
                                                            <option value="27">Natwar</option>
                                                            <option value="28">Odisha</option>
                                                            <option value="29">Paschim Medinipur</option>
                                                            <option value="30">Pondicherry</option>
                                                            <option value="31">Punjab</option>
                                                            <option value="32">Rajasthan</option>
                                                            <option value="33">Sikkim</option>
                                                            <option value="34">Tamil Nadu</option>
                                                            <option value="35">Telangana</option>
                                                            <option value="36">Tripura</option>
                                                            <option value="37">Uttar Pradesh</option>
                                                            <option value="38">Uttarakhand</option>
                                                            <option value="39">Vaishali</option>
                                                            <option value="40">West Bengal</option>


                                                        </>

                                                }
                                            </select>
                                        </div>

                                        <div className="col">
                                            <label className="label-form mb-0">Zip/Postal Code</label>
                                            <input type="text" className="form-control" placeholder="Enter Zip/postal code" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="bg-white p-3 " style={{ border: '2px solid #e1e1e1' }}>
                                        <p id="order-choose-delivery-text" className="step" style={{ marginTop: 0 }} data-single="Shipping" data-multiple="Choose your delivery">Shipping</p>
                                        <div className="cursor-pointer d-flex align-items-center" id="standard-delivery-template">
                                            <input id="standard-delivery" className="mr-1 cursor-pointer" required defaultChecked="checked" name="product[delivery]" type="radio" defaultValue="[&quot;standard-delivery&quot;,&quot;4.95&quot;,1,&quot;Standard Delivery&quot;,[],&quot;EUR&quot;,null,0,&quot;4.95&quot;,[]]" />
                                            <label className="form-check-label d-block cursor-pointer" style={{ marginBottom: 0 }} htmlFor="standard-delivery">
                                                <span className="float-right ml-1" style={{ fontSize: 15, color: '#000' }}>
                                                    <b style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                                        Standard
                                                    </b>
                                                    <span id="standard-delivery-price" style={{ fontWeight: 'normal' }} data-total-price="4.95"> $4.95</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <h3 className="p-1 " style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '17px' }}>
                                        <span className="pb-2 pt-3 mr-2">
                                            <FaCreditCard />
                                        </span>
                                        Step 3: Payment Methods
                                    </h3>

                                    <button type="button" className="btn btn-warning btn-lg btn-block"><span style={{ fontSize: 17, fontWeight: 'bold' }}>Pay With </span><span style={{ color: 'blue', fontWeight: 'bold' }}>Pay</span><span className="text-info"><b>Pal</b></span></button>
                                    <p className="text-center "><a href="#" className="way-to-pay" style={{ textDecoration: 'none', color: 'black' }}>The safer, easier way to pay</a></p>

                                    <div id="paypal-button-container"></div>
                                    <div className="or mt-1 mb-4">
                                        <span>
                                            OR
                                        </span>
                                    </div>

                                    <div className="payment-methods d-flex flex-wrap" style={{ justifyContent: 'center' }}>
                                        <img className="payment-method-select clickevent active" src="../dist/img/visa.png" width={53} height={33} alt="Visa" data-value="visa" id="visa" />
                                        <img className="payment-method-select clickevent" src="../dist/img/mastercard.png" width={53} height={33} alt="MasterCard" data-value="master" id="master" />
                                        <img className="payment-method-select clickevent" src="../dist/img/amex.png" width={53} height={33} title="amex" data-value="amex" id="amex" />
                                    </div>


                                    <div className="field stage-2">
                                        <p>
                                            <label className="label-form mb-0">Card Number </label>
                                            <input type="tel" id="cc_no" name="creditCardNumber" className="form-control input required" maxLength={16} data-error-message="Please enter a valid credit card number!" placeholder="•••• •••• •••• ••••" />
                                        </p>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputCity" className="mb-0">Expiry Date</label>
                                            <select id="" className="form-control">
                                                <option selected>Month</option>
                                                <option value="01">(01) January</option><option value="02">(02) February</option><option value="03">(03) March</option><option value="04">(04) April</option><option value="05">(05) May</option><option value="06">(06) June</option><option value="07">(07) July</option><option value="08">(08) August</option><option value="09">(09) September</option><option value="10">(10) October</option><option value="11">(11) November</option><option value="12">(12) December</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputCity" className="text-light mb-0">Expiry Date</label>
                                            <select id="" className="form-control">
                                                <option selected>Year</option>
                                                <option value="22">2022</option><option value="23">2023</option><option value="24">2024</option><option value="25">2025</option><option value="26">2026</option><option value="27">2027</option><option value="28">2028</option><option value="29">2029</option><option value="30">2030</option><option value="31">2031</option><option value="32">2032</option><option value="33">2033</option><option value="34">2034</option><option value="35">2035</option><option value="36">2036</option><option value="37">2037</option><option value="38">2038</option><option value="39">2039</option><option value="40">2040</option><option value="41">2041</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputZip" className="mb-0">CVV</label>
                                            <input type="text" className="form-control" id="" placeholder="CVV" />
                                        </div>
                                    </div>
                                </form>
                                <div className="badges has-text-centered">
                                    <hr style={{ backgroundColor: '#dadada !important', height: '1px !important' }} />
                                    <img alt src="../dist/img/secured.png" />
                                    <hr style={{ backgroundColor: '#dadada !important', height: '1px !important' }} />
                                </div>

                                <button type="button" className="btn btn-success btn-lg btn-block"><span style={{ fontSize: 20, fontWeight: 'bold' }}>Order Now</span></button>
                                <hr />

                                <div>
                                    <div className="pb-2 d-newclass" style={{ alignitems: 'top' }}>
                                        <span className="icon is-small is-right m-2" style={{ color: '#0974ca' }}>
                                            <FaCheck className="fas fa-check">
                                            </FaCheck></span>
                                        <p className='mb-0'><b>Natural Remedy:</b> Say 'No' to chemicals! Bandoo contains only pure &amp; specially selected herbs</p>
                                    </div>
                                    <div className="pb-2 d-newclass" style={{ alignitems: "top" }}>
                                        <span className="icon is-small is-right m-2" style={{ color: "#0974ca" }}>
                                            <FaCheck className="fas fa-check">
                                            </FaCheck></span>
                                        <p className='mb-0'><b>Holistic Method:</b> focuses on restoring the body’s natural balance of energy</p>
                                    </div>
                                    <div className="d-newclass" style={{ alignItems: 'top' }}>
                                        <span className="icon is-small is-right m-2" style={{ color: '#0974ca' }}>
                                            <FaCheck className="fas fa-check">
                                            </FaCheck></span>
                                        <p><b>Traditional Wisdom:</b> a combination of techniques learned through generations</p>
                                    </div>
                                    <hr />


                                    <div className="d-newclass m-0" style={{ alignItems: 'top', justifyContent: 'center', WebkitJustifyContent: 'center', WebkitAlignItems: 'top', height: 26, padding: 5 }}>

                                        <p style={{ textShadow: '1px 1px 1px rgb(0 0 0 / 20%)', fontSize: '1rem' }}>
                                            <FaLock style={{ color: '#008900' }} />  <b style={{ color: '#008900', fontWeight: 700 }}>SSL</b>
                                            SECURE PAYMENT
                                        </p>
                                    </div>
                                    <p className="has-text-centered p-0 mb-10" style={{ textShadow: '1px 1px 1px rgb(0 0 0 / 20%)', fontSize: '1rem' }}>
                                        Your Personal Details Are Securely Encrypted With 256-Bit-
                                        <p style={{ textShadow: '1px 1px 1px rgb(0 0 0 / 20%)', fontSize: '1rem' }}>SSL</p>
                                    </p>
                                </div>

                            </div>
                        </div>
                        {/* your information section end */}

                    </div>

                </div>
                <Footer />
            </div>


        </>

    );
}
export default Banner