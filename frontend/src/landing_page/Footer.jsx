import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container mt-3 p-2">
                <div className="row mt-5 pe-5">
                    {/* Logo and Social Media Section */}
                    <div className="col-lg-3 col-md-4 col-sm-6 offset-lg-1 footer-section">
                        <img
                            src="media/images/logo.svg"
                            alt="logo"
                            className="footer-logo"
                        />
                        <p className="fw-light lh-md mt-3 footer-copyright">
                            &copy;2010 - 2025, Zerodha Broking Ltd.
                            <br />
                            All rights reserved.
                        </p>

                        {/* Social Media Icons */}
                        <div className="footer-social-icons">
                            <i className="fa fa-facebook-official fa-lg me-3 pe-1 footer-social-icon" aria-hidden="true"></i>
                            <i className="fa fa-instagram fa-lg me-3 footer-social-icon" aria-hidden="true"></i>
                            <i className="fa fa-linkedin fa-lg me-3 footer-social-icon" aria-hidden="true"></i>
                        </div>

                        <hr style={{ width: '85%' }} />

                        <div className="footer-social-icons">
                            <i className="fa fa-youtube-play fa-lg me-3 footer-social-icon" aria-hidden="true"></i>
                            <i className="fa fa-whatsapp fa-lg me-3 footer-social-icon" aria-hidden="true"></i>
                            <i className="fa fa-telegram fa-lg me-3 footer-social-icon" aria-hidden="true"></i>
                        </div>
                    </div>

                    {/* Account Section */}
                    <div className="col-lg-2 col-md-4 col-sm-6 footer-section" style={{ lineHeight: '2.3rem' }}>
                        <h5 className="footer-heading">Account</h5>
                        <a className="fw-light footer-link" href="#">Open demat account</a><br />
                        <a className="fw-light footer-link" href="#">Minor demat account</a><br />
                        <a className="fw-light footer-link" href="#">NRI demat account</a><br />
                        <a className="fw-light footer-link" href="#">Commodity</a><br />
                        <a className="fw-light footer-link" href="#">Dematerialisation</a><br />
                        <a className="fw-light footer-link" href="#">Fund transfer</a><br />
                        <a className="fw-light footer-link" href="#">MTF</a><br />
                        <a className="fw-light footer-link" href="#">Referral program</a><br />
                    </div>

                    {/* Support Section */}
                    <div className="col-lg-2 col-md-4 col-sm-6 footer-section" style={{ lineHeight: '2.3rem' }}>
                        <h5 className="footer-heading">Support</h5>
                        <a className="fw-light footer-link" href="#">Contact us</a><br />
                        <a className="fw-light footer-link" href="#">Support portal</a><br />
                        <a className="fw-light footer-link" href="#">How to file a complaint?</a><br />
                        <a className="fw-light footer-link" href="#">Status of your complaints</a><br />
                        <a className="fw-light footer-link" href="#">Bulletin</a><br />
                        <a className="fw-light footer-link" href="#">Circular</a><br />
                        <a className="fw-light footer-link" href="#">Z-Connect blog</a><br />
                        <a className="fw-light footer-link" href="#">Downloads</a><br />
                    </div>

                    {/* Company Section */}
                    <div className="col-lg-2 col-md-4 col-sm-6 footer-section" style={{ lineHeight: '2.3rem' }}>
                        <h5 className="footer-heading">Company</h5>
                        <a className="fw-light footer-link" href="#">About</a><br />
                        <a className="fw-light footer-link" href="#">Philosophy</a><br />
                        <a className="fw-light footer-link" href="#">Press & media</a><br />
                        <a className="fw-light footer-link" href="#">Careers</a><br />
                        <a className="fw-light footer-link" href="#">Zerodha Cares (CSR)</a><br />
                        <a className="fw-light footer-link" href="#">Zerodha.tech</a><br />
                        <a className="fw-light footer-link" href="#">Open source</a><br />
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-lg-2 col-md-4 col-sm-6 footer-section" style={{ lineHeight: '2.3rem' }}>
                        <h5 className="footer-heading">Quick Links</h5>
                        <a className="fw-light footer-link" href="#">Upcoming IPOs</a><br />
                        <a className="fw-light footer-link" href="#">Brokerage charges</a><br />
                        <a className="fw-light footer-link" href="#">Market holidays</a><br />
                        <a className="fw-light footer-link" href="#">Economic calendar</a><br />
                        <a className="fw-light footer-link" href="#">Calculators</a><br />
                        <a className="fw-light footer-link" href="#">Markets</a><br />
                        <a className="fw-light footer-link" href="#">Sectors</a><br />
                    </div>
                </div>
                {/* Disclaimer Section */}
                <div className="mt-5 text-muted footer-disclaimer">
                    <div className="col-10 offset-1">
                        <p>
                            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
                            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
                            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
                            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
                            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
                            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
                            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
                            India. For any complaints pertaining to securities broking please
                            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
                            Please ensure you carefully read the Risk Disclosure Document as
                            prescribed by SEBI | ICF
                        </p>
                    </div>
                    <div className="col-10 offset-1">
                        <p>
                            Procedure to file a complaint on SEBI SCORES: Register on SCORES
                            portal. Mandatory details for filing complaints on SCORES: Name,
                            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                            Communication, Speedy redressal of the grievances
                        </p>
                    </div>
                    <div className="col-10 offset-1">
                        <p>
                            Smart Online Dispute Resolution | Grievances Redressal Mechanism
                        </p>
                    </div>
                    <div className="col-10 offset-1">
                        <p>
                            Investments in securities market are subject to market risks; read
                            all the related documents carefully before investing.
                        </p>
                    </div>
                    <div className="col-10 offset-1">
                        <p>
                            Attention investors: 1) Stock brokers can accept securities as
                            margins from clients only by way of pledge in the depository system
                            w.e.f September 01, 2020. 2) Update your e-mail and phone number
                            with your stock broker / depository participant and receive OTP
                            directly from depository on your e-mail and/or mobile number to
                            create pledge. 3) Check your securities / MF / bonds in the
                            consolidated account statement issued by NSDL/CDSL every month.
                        </p>
                    </div>
                    <div className="col-10 offset-1">
                        <p>
                            "Prevent unauthorised transactions in your account. Update your
                            mobile numbers/email IDs with your stock brokers. Receive
                            information of your transactions directly from Exchange on your
                            mobile/email at the end of the day. Issued in the interest of
                            investors. KYC is one time exercise while dealing in securities
                            markets - once KYC is done through a SEBI registered intermediary
                            (broker, DP, Mutual Fund etc.), you need not undergo the same
                            process again when you approach another intermediary." Dear
                            Investor, if you are subscribing to an IPO, there is no need to
                            issue a cheque. Please write the Bank account number and sign the
                            IPO application form to authorize your bank to make payment in case
                            of allotment. In case of non allotment the funds will remain in your
                            bank account. As a business we don't give stock tips, and have not
                            authorized anyone to trade on behalf of others. If you find anyone
                            claiming to be part of Zerodha and offering such services, please
                            create a ticket here.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-9 offset-1 mb-3">
                        <a href="" className="footer-link2 me-4">NSE</a>
                        <a href="" className="footer-link2 me-4">BSE</a>
                        <a href="" className="footer-link2 me-4">MCX</a>
                        <a href="" className="footer-link2 me-4">Terms & conditions</a>
                        <a href="" className="footer-link2 me-4">Policies & procedures </a>
                        <a href="" className="footer-link2 me-4">Privacy policy</a>
                        <a href="" className="footer-link2 me-4">Disclosure</a>
                        <a href="" className="footer-link2 me-4">For investor's attention</a>
                        <a href="" className="footer-link2 me-4">Investor charter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;