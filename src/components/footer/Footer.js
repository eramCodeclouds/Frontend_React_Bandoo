import React from 'react'
import './footer.css'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div>


            <footer>
                <div className="footer footer--">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2 ">
                                <img className="footer__logo" src="../dist/img/logo_bw.png" alt="Brand logo" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <h4 className="footer__title">INFO</h4>
                                <ul className="footer__list">
                                    <li className="footer__list-item">
                                        <a href="#">Terms of Service</a>
                                    </li>
                                    <li className="footer__list-item">
                                        <a href="#">Privacy policy</a>
                                    </li>
                                    <li className="footer__list-item">
                                        <a href="#">Shipping policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <h4 className="footer__title">ORDER</h4>
                                <ul className="footer__list">
                                    <li className="footer__list-item">
                                        <a href="https://trybandoo.com/tracking/" target="_blank">Track My Order</a>
                                    </li>
                                    <li className="footer__list-item">
                                        <a href="https://trybandoo.com/faqs/" target="_blank">FAQ</a>
                                    </li>
                                    <li className="footer__list-item">
                                        <a href="https://trybandoo.com/contact/" target="_blank">Contact Us</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <h4 className="footer__title">CUSTOMER SERVICES:</h4>
                                <ul className="footer__list">
                                    <li className="footer__list-item">
                                        <FaPhoneAlt />     <a href="" target="_blank">+1 (888) 860-0565</a>
                                    </li>
                                    <li className="footer__list-item">
                                        <FaEnvelope />  <a href="" target="_blank">support@trybandoo.com</a>
                                    </li>

                                </ul>
                            </div>

                            <div id="disclaimers" className="container text-light" >
                                <p style={{ fontSize: 13 }}><strong>Disclaimer:</strong> Bandoo products are not intended to diagnose, treat, cure, or prevent any specific disease or condition, but rather to provide a complimentary supplement to the professionally assigned treatments. Individual results may vary. Bandoo Patches can't be used on open wounds or bruised skin. <span style={{ cursor: 'pointer' }}>Read more</span></p>
                            </div>


                        </div>

                    </div>
                    <div className="footer__copy">
                        <div className="container">
                            <div className="footer__copy-holder">
                                <p className="footer__copy-text">® 2022 Bandoo All rights reserved.</p>
                                <img className="footer__payments-img" src="../dist/img/ico-cards.jpeg" alt="Payment methods" />
                            </div>
                        </div>
                    </div>
                </div>




            </footer>

        </div>


    )
}

export default Footer
