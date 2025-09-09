import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="terms-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="terms-title">Terms and Conditions</h1>
                        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

                        <div className="terms-content">
                            <section>
                                <h2>1. Acceptance of Terms</h2>
                                <p>By accessing and using this investment platform, you accept and agree to be bound by the terms and provision of this agreement.</p>
                            </section>

                            <section>
                                <h2>2. Investment Disclaimer</h2>
                                <p>All investments involve risk and may result in partial or total loss of your investment. Past performance does not guarantee future results.</p>
                            </section>

                            <section>
                                <h2>3. User Responsibilities</h2>
                                <ul>
                                    <li>Provide accurate and complete information</li>
                                    <li>Maintain the security of your account credentials</li>
                                    <li>Comply with all applicable laws and regulations</li>
                                    <li>Not engage in fraudulent or illegal activities</li>
                                </ul>
                            </section>

                            <section>
                                <h2>4. Privacy and Data Protection</h2>
                                <p>Your personal information will be handled in accordance with our Privacy Policy. We implement appropriate security measures to protect your data.</p>
                            </section>

                            <section>
                                <h2>5. Service Availability</h2>
                                <p>We strive to maintain service availability but do not guarantee uninterrupted access. Maintenance windows may occur with prior notice.</p>
                            </section>

                            <section>
                                <h2>6. Limitation of Liability</h2>
                                <p>Our liability is limited to the maximum extent permitted by law. We are not responsible for any indirect, incidental, or consequential damages.</p>
                            </section>

                            <section>
                                <h2>7. Contact Information</h2>
                                <p>For questions regarding these terms, please contact us at support@yourdomain.com</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
