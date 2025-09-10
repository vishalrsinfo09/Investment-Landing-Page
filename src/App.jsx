import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge
} from "react-bootstrap"
import {
  TrendingUp,
  Shield,
  Smartphone,
  BarChart3,
  Zap,
  Users,
  Download,
  CheckCircle,
  Star,
  Award,
  Globe,
  ArrowRight,
  Users2
} from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"
import ScreenshotsCarousel from "./component/screenshot"
import MyNavbar from "./component/navbar"

function App() {
  const features = [
    {
      icon: <TrendingUp className="text-primary" size={40} />,
      title: "Smart Portfolio Tracking",
      description:
        "Monitor your investments in real-time with advanced analytics and performance insights.",
      color: "primary"
    },
    {
      icon: <BarChart3 className="text-primary" size={40} />,
      title: "Real-Time Market Data",
      description:
        "Stay updated with live market prices, news, and trends across global markets.",
      color: "success"
    },
    {
      icon: <Shield className="text-primary" size={40} />,
      title: "Bank-Level Security",
      description:
        "Your investments are protected with enterprise-grade security and encryption.",
      color: "info"
    },
    // {
    //   icon: <Zap className="text-primary" size={40} />,
    //   title: "AI-Powered Insights",
    //   description:
    //     "Get personalized investment recommendations powered by machine learning algorithms.",
    //   color: "warning"
    // },
    // {
    //   icon: <Smartphone className="text-primary" size={40} />,
    //   title: "Mobile Trading",
    //   description:
    //     "Trade on-the-go with our intuitive mobile interface designed for quick decisions.",
    //   color: "danger"
    // },
    // {
    //   icon: <Users className="text-primary" size={40} />,
    //   title: "Expert Community",
    //   description:
    //     "Connect with professional traders and learn from experienced investors.",
    //   color: "purple"
    // }
  ]

  return (
    <div className="App">

      {/* Navigation */}
      <MyNavbar />

      {/* Hero Section */}
      <section className="hero-section py-3 py-md-5" style={{ marginTop: "60px" }}>
        <Container>
          <Row className="align-items-center min-vh-90 g-4">
            <Col lg={6} className="text-center text-lg-start">
              <Badge bg="success" className="mb-2 mb-md-3 px-2 px-md-3 py-1 py-md-2 fs-6 fs-md-5 badge-pulse">
                {/* <Star className="me-1" size={16} /> */}
                #1 Investment App 2025
              </Badge>

              <h1 className="display-4 display-md-3 fw-bold text-white mb-2 mb-md-3 hero-title">
                Invest Smarter with
                <span className="text-gradient"> MNYMKT</span>
              </h1>
              <div className='text-left'>
                <p className="lead text-light mb-2 mb-md-3 hero-subtitle">
                  🚀 Your gateway to intelligent investing
                </p>
                <p className="fs-6 fs-md-5 text-light opacity-90 mb-3 mb-md-4">
                  Transform your financial future with our AI-powered investment
                  platform. Track portfolios, analyze markets, and make informed
                  decisions with professional-grade tools designed for everyone.
                </p>
              </div>
              <div className="d-flex flex-column flex-sm-row gap-2 gap-md-3 mb-3 mb-md-4">
                <Button
                  variant="light"
                  size="md"
                  className="px-3 px-md-5 py-2 py-md-3 fw-bold btn-hero-primary d-flex align-items-center justify-content-center"
                >
                  <Download className="me-1 me-md-2" size={16} />
                  Download for Android
                  <ArrowRight className="ms-1 ms-md-2" size={14} />
                </Button>

                {/* <Button
                  variant="outline-light"
                  size="lg"
                  className="px-5 py-3 fw-semibold btn-hero-secondary d-flex align-items-center justify-content-center"
                >
                  <PlayCircle className="me-2" size={20} />
                  Watch Demo
                </Button> */}

              </div>
              <div className="d-none d-sm-flex flex-wrap align-items-center justify-content-center justify-content-lg-start text-light">
                <CheckCircle className="text-success me-1 me-md-2" size={16} />
                <span className="me-2 me-md-4 small">Free to download</span>
                <CheckCircle className="text-success me-1 me-md-2" size={16} />
                <span className="me-2 me-md-4 small">No hidden fees</span>
                <CheckCircle className="text-success me-1 me-md-2" size={16} />
                <span className="small">Bank-level security</span>
              </div>

            </Col>
            <Col lg={6} className="text-center mt-4 mt-lg-0">
              <div className="hero-image-container">
                <img
                  src="https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Investment Dashboard"
                  className="img-fluid hero-image"
                />
                <div className="floating-wrapper">
                  <div className="floating-card floating-card-1">
                    <div className="d-flex align-items-center">
                      <TrendingUp className="text-success me-1 me-md-2" size={18} />
                      <div>
                        <div className="fw-bold text-success small">+24.5%</div>
                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>Portfolio Growth</small>
                      </div>
                    </div>
                  </div>
                  <div className="floating-card floating-card-2">
                    <div className="d-flex align-items-center">
                      <Award className="text-warning me-1 me-md-2" size={18} />
                      <div>
                        <div className="fw-bold small">500K+</div>
                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>Active Users</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 about-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Badge
                bg="info"
                className="mb-3 px-3 py-2 d-inline-flex align-items-center"
              >
                <Globe className="me-1" size={16} />
                About MNYMKT
              </Badge>

              <h2 className="display-5 fw-bold mb-4 section-title">
                Built for Modern Investors
              </h2>
              <p className="fs-5 text-dark mb-4">
                MNYMKT combines cutting-edge technology with intuitive design
                to make investing accessible to everyone. Whether you're a
                seasoned trader or just starting your investment journey, our
                platform provides the tools and insights you need to succeed.
              </p>
              <p className="text-muted mb-4">
                Join over{" "}
                <strong className="text-primary">500,000 users</strong> who
                trust MNYMKT to manage their portfolios and achieve their
                financial goals. With real-time data, AI-powered
                recommendations, and bank-level security, your investments are
                in good hands.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div className="me-4">
                  <div className="h4 fw-bold text-primary mb-0">4.9★</div>
                  <small className="text-muted">App Store Rating</small>
                </div>
                <div className="me-4">
                  <div className="h4 fw-bold text-success mb-0">$2.5B+</div>
                  <small className="text-muted">Assets Managed</small>
                </div>
                <div>
                  <div className="h4 fw-bold text-info mb-0">150+</div>
                  <small className="text-muted">Countries</small>
                </div>
              </div>
              <Button
                variant="primary"
                size="lg"
                className="fw-semibold btn-cta d-flex align-items-center justify-content-center"
              >
                Start Investing Today
                <ArrowRight className="ms-2" size={16} />
              </Button>

            </Col>
            <Col lg={6}>
              <div className="about-image-container">
                <img
                  src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Financial Analytics"
                  className="img-fluid about-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-4 py-md-5 features-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-4 mb-md-5">
              <Badge bg="primary" className="mb-2 mb-md-3 px-2 px-md-3 py-1 py-md-2 d-inline-flex align-items-center">
                <Zap className="me-1" size={14} />
                Features
              </Badge>

              <h2 className="display-6 display-md-5 fw-bold mb-2 mb-md-3 section-title">
                Powerful Features for Smart Investing
              </h2>
              <p className="lead text-muted mb-3 mb-md-4 fw-bold">
                Everything you need to take control of your financial future,
                all in one app
              </p>
            </Col>
          </Row>
          <Row className="g-3 g-md-4">
            {features.map((feature, index) => (
              <Col key={index} sm={6} lg={4}>
                <Card
                  className={`h-100 feature-card feature-card-${feature.color} border-0`}
                >
                  <Card.Body className="text-center p-3 p-md-4 position-relative">
                    <div
                      className={`feature-icon-bg bg-${feature.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                      style={{ width: "60px", height: "60px" }}
                    >
                      {React.cloneElement(feature.icon, { size: 30 })}
                    </div>
                    <Card.Title className="h6 h5-md fw-bold mb-2 mb-md-3">
                      {feature.title}
                    </Card.Title>
                    <Card.Text className="text-muted small">
                      {feature.description}
                    </Card.Text>
                    <div className={`feature-glow bg-${feature.color}`}></div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-4 py-md-5 my-3 my-md-5 screenshots-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-4 mb-md-5">
              <Badge
                bg="warning"
                className="mb-2 mb-md-3 px-2 px-md-3 py-1 py-md-2 d-inline-flex align-items-center"
              >
                <Smartphone className="me-1" size={14} />
                Screenshots
              </Badge>

              <h2 className="display-6 display-md-5 fw-bold mb-2 mb-md-3 text-white hero-title">
                See MNYMKT in Action
              </h2>
              <p className="lead fw-bold text-muted mb-0">
                Explore the intuitive interface designed for both beginners and
                professionals
              </p>
            </Col>
          </Row>

          <ScreenshotsCarousel />

        </Container>
      </section>

      {/* Download Section */}
      <section className="py-5 download-section text-white">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">

              {/* ICON + HEADING ek saath */}
              <div className="d-flex align-items-center justify-content-center mb-4 flex-nowrap text-center hero-heading">
                <Download className="me-2 text-white hero-title" size={28} />
                <h2 className="fw-bold m-0 hero-title">
                  Ready to Start Investing?
                </h2>
              </div>

              <p className="lead mb-5 opacity-90">
                Download MNYMKT today and take the first step towards
                financial freedom
              </p>

              <div className="text-center">
                <Button
                  variant="light"
                  size="lg"
                  className="fw-bold text-primary me-3 mb-3 btn-download-main d-inline-flex align-items-center"
                >
                  {/* <Download className="me-2" size={20} /> */}
                  Download for Android
                  {/* <ArrowRight className="ms-2" size={20} /> */}
                </Button>
              </div>

              <div className="mt-5">
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                  <div className="d-flex align-items-center">
                    <CheckCircle className="text-success me-2" size={20} />
                    <span>Available on Android</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Star className="text-warning me-2" size={20} />
                    <span>4.9★ Rating</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Users className="text-info me-2" size={20} />
                    <span>500K+ Downloads</span>
                  </div>
                </div>
                <small className="text-white-50 d-block mt-3">
                  iOS version coming soon • Free to download • No subscription
                  required
                </small>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer-section text-white py-4 py-md-5">
        <Container>
          <Row className="g-4">
            <Col md={6} lg={3} className="mb-3 mb-lg-0">
              <div className="d-flex align-items-center">
                <img
                  src="/Logo.png"
                  alt="App Icon"
                  className="me-2 navbar-logo"
                  style={{
                    height: "35px",
                    width: "auto",
                    maxHeight: "50px"
                  }}
                />
                <span className="fw-bold fs-5 fs-md-4">MNYMKT</span>
              </div>
              <p className="text-light opacity-75 mt-2 mt-md-3 mb-0 small">
                The future of intelligent investing is here. Join millions of
                users worldwide.
              </p>
            </Col>

            <Col md={6} lg={3} className="mb-3 mb-lg-0">
              <h6 className="fw-bold mb-2 mb-md-3">Quick Links</h6>
              <div className="d-flex flex-column">
                <a
                  href="#features"
                  className="text-light opacity-75 text-decoration-none mb-1 mb-md-2 footer-link small"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-light opacity-75 text-decoration-none mb-1 mb-md-2 footer-link small"
                >
                  About
                </a>
                <a
                  href="#screenshots"
                  className="text-light opacity-75 text-decoration-none mb-1 mb-md-2 footer-link small"
                >
                  Screenshots
                </a>
              </div>
            </Col>

            <Col md={6} lg={3} className="mb-3 mb-lg-0">
              <h6 className="fw-bold mb-2 mb-md-3">Legal</h6>
              <div className="d-flex flex-column">
                <a
                  href="/terms-and-conditions"
                  className="text-light opacity-75 text-decoration-none mb-1 mb-md-2 footer-link small"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/privacy-policy"
                  className="text-light opacity-75 text-decoration-none mb-1 mb-md-2 footer-link small"
                >
                  Privacy Policy
                </a>
                <a
                  href="/risk-disclosure"
                  className="text-light opacity-75 text-decoration-none mb-1 mb-md-2 footer-link small"
                >
                  Risk Disclosure
                </a>
                <a
                  href="/refund-policy"
                  className="text-light opacity-75 text-decoration-none mb-1 mb-md-2 footer-link small"
                >
                  Refund Policy
                </a>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <h6 className="fw-bold mb-2 mb-md-3">Contact</h6>
              <p className="text-light opacity-75 mb-1 mb-md-2 small">
                support@MNYMKT.com
              </p>
              <p className="text-light opacity-75 mb-1 mb-md-2 small">+91-XXXXX-XXXXX</p>
              <p className="text-light opacity-75 mb-0 small">Available 24/7</p>
            </Col>
          </Row>

          <hr className="my-3 my-md-4 opacity-25" />

          <Row className="align-items-center">
            <Col md={8} className="text-center text-md-start mb-2 mb-md-0">
              <small className="text-light opacity-50">
                © 2025 MNYMKT. All rights reserved. |
                <a href="/terms-and-conditions" className="text-light opacity-75 text-decoration-none mx-1">
                  Terms & Conditions
                </a> |
                <a href="/privacy-policy" className="text-light opacity-75 text-decoration-none ms-1">
                  Privacy Policy
                </a>
              </small>
            </Col>
            {/* <Col md={4} className="text-center text-md-end">
              <small className="text-light opacity-50">
                Made with ❤️ for smart investors
              </small>
            </Col> */}
          </Row>
        </Container>
      </footer>

    </div>
  )
}

export default App
