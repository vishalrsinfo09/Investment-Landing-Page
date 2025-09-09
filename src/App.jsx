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
  ArrowRight
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
      icon: <Zap className="text-primary" size={40} />,
      title: "AI-Powered Insights",
      description:
        "Get personalized investment recommendations powered by machine learning algorithms.",
      color: "warning"
    },
    {
      icon: <Shield className="text-primary" size={40} />,
      title: "Bank-Level Security",
      description:
        "Your investments are protected with enterprise-grade security and encryption.",
      color: "info"
    },
    {
      icon: <Smartphone className="text-primary" size={40} />,
      title: "Mobile Trading",
      description:
        "Trade on-the-go with our intuitive mobile interface designed for quick decisions.",
      color: "danger"
    },
    {
      icon: <Users className="text-primary" size={40} />,
      title: "Expert Community",
      description:
        "Connect with professional traders and learn from experienced investors.",
      color: "purple"
    }
  ]

  return (
    <div className="App">

      {/* Navigation */}
      <MyNavbar />

      {/* Hero Section */}
      <section className="hero-section py-5" style={{ marginTop: "76px" }}>
        <Container>
          <Row className="align-items-center min-vh-90">
            <Col lg={6}>
              <Badge bg="success" className="mb-3 px-3 py-2 fs-6 badge-pulse">
                {/* <Star className="me-1" size={16} /> */}
                #1 Investment App 2025
              </Badge>

              <h1 className="display-3 fw-bold text-white mb-3 hero-title">
                Invest Smarter with
                <span className="text-gradient"> MNYMKT</span>
              </h1>
              <p className="lead text-light mb-3 hero-subtitle">
                🚀 Your gateway to intelligent investing
              </p>
              <p className="fs-5 text-light opacity-90 mb-4">
                Transform your financial future with our AI-powered investment
                platform. Track portfolios, analyze markets, and make informed
                decisions with professional-grade tools designed for everyone.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
                <Button
                  variant="light"
                  size="lg"
                  className="px-5 py-3 fw-bold btn-hero-primary d-flex align-items-center justify-content-center"
                >
                  <Download className="me-2" size={20} />
                  Download for Android
                  <ArrowRight className="ms-2" size={16} />
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
              <div className="d-none d-md-flex align-items-center text-light">
                <CheckCircle className="text-success me-2" size={18} />
                <span className="me-4">Free to download</span>
                <CheckCircle className="text-success me-2" size={18} />
                <span className="me-4">No hidden fees</span>
                <CheckCircle className="text-success me-2" size={18} />
                <span>Bank-level security</span>
              </div>

            </Col>
            <Col lg={6} className="text-center mt-5 mt-lg-0">
              <div className="hero-image-container">
                <img
                  src="https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Investment Dashboard"
                  className="img-fluid hero-image"
                />
                <div className="floating-wrapper">
                  <div className="floating-card floating-card-1">
                    <div className="d-flex align-items-center">
                      <TrendingUp className="text-success me-2" size={20} />
                      <div>
                        <div className="fw-bold text-success">+24.5%</div>
                        <small className="text-muted">Portfolio Growth</small>
                      </div>
                    </div>
                  </div>
                  <div className="floating-card floating-card-2">
                    <div className="d-flex align-items-center">
                      <Award className="text-warning me-2" size={20} />
                      <div>
                        <div className="fw-bold">500K+</div>
                        <small className="text-muted">Active Users</small>
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
      <section id="features" className="py-1 features-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <Badge bg="primary" className="mb-3 px-3 py-2 d-inline-flex align-items-center">
                <Zap className="me-1" size={16} />
                Features
              </Badge>

              <h2 className="display-5 fw-bold mb-3 section-title">
                Powerful Features for Smart Investing
              </h2>
              <p className="lead text-muted mb-4">
                Everything you need to take control of your financial future,
                all in one app
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col key={index} md={6} lg={4}>
                <Card
                  className={`h-100 feature-card feature-card-${feature.color} border-0`}
                >
                  <Card.Body className="text-center p-4 position-relative">
                    <div
                      className={`feature-icon-bg bg-${feature.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                      style={{ width: "80px", height: "80px" }}
                    >
                      {feature.icon}
                    </div>
                    <Card.Title className="h5 fw-bold mb-3">
                      {feature.title}
                    </Card.Title>
                    <Card.Text className="text-muted">
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
      <section id="screenshots" className="py-5 my-5 screenshots-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <Badge
                bg="warning"
                className="mb-3 px-3 py-2 d-inline-flex align-items-center"
              >
                <Smartphone className="me-1" size={16} />
                Screenshots
              </Badge>

              <h2 className="display-5 fw-bold mb-3 text-white hero-title">
                See MNYMKT in Action
              </h2>
              <p className="lead text-muted">
                Explore the intuitive interface designed for both beginners and
                professionals
              </p>
            </Col>
          </Row>
          <Row>
            <ScreenshotsCarousel />
          </Row>
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
                  className="px-5 py-4 fw-bold text-primary me-3 mb-3 btn-download-main d-inline-flex align-items-center"
                >
                  <Download className="me-2" size={20} />
                  Download for Android
                  <ArrowRight className="ms-2" size={20} />
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
      <footer className="footer-section text-white py-5">
        <Container>
          <Row>
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="d-flex align-items-center">
                <TrendingUp
                  className="me-2 text-primary brand-icon"
                  size={32}
                />
                <span className="fw-bold fs-4">MNYMKT</span>
              </div>
              <p className="text-light opacity-75 mt-3 mb-0">
                The future of intelligent investing is here. Join millions of
                users worldwide.
              </p>
            </Col>
            <Col lg={4} className="mb-4 mb-lg-0">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <div className="d-flex flex-column">
                <a
                  href="#features"
                  className="text-light opacity-75 text-decoration-none mb-2"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-light opacity-75 text-decoration-none mb-2"
                >
                  About
                </a>
                <a
                  href="#screenshots"
                  className="text-light opacity-75 text-decoration-none mb-2"
                >
                  Screenshots
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <h6 className="fw-bold mb-3">Contact</h6>
              <p className="text-light opacity-75 mb-2">
                support@MNYMKT.com
              </p>
              <p className="text-light opacity-75 mb-0">Available 24/7</p>
            </Col>
          </Row>
          <hr className="my-4 opacity-25" />
          <Row className="align-items-center">
            <Col md={6}>
              <small className="text-light opacity-50">
                © 2025 MNYMKT. All rights reserved.
              </small>
            </Col>
            <Col md={6} className="text-md-end mt-3 mt-md-0">
              <small className="text-light opacity-50">
                Made with ❤️ for smart investors
              </small>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default App
