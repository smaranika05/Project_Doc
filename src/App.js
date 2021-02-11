import React, { Suspense, lazy } from "react";
<<<<<<< HEAD
​
import { BrowserRouter as Router, Route } from "react-router-dom";
​
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
>>>>>>> 498b6954144aec6a53d2fd116bcb91ef232ebe5d
import { Helmet } from "react-helmet";
import "./App.css";
import Loader from "./Components/Loader/index";
import Card from "./Views/Pakete/Package_contact/Package_contact";
import CookieConsent from "react-cookie-consent";
const BlogPage = lazy(() => import("./Views/Blog_pages/blog_page"));
const Kont = lazy(() => import("./Views/Kontakt/kontakt"));
const Refer = lazy(() => import("./Views/Refer/refer"));
const Blog = lazy(() => import("./Views/Blog/blog"));
const Home = lazy(() => import("./Views/Homepage/homepage"));
const Header = lazy(() => import("./Components/Header/header"));
const Pakt = lazy(() => import("./Views/Pakete/pakete"));
const Footer = lazy(() => import("./Components/footer/footer"));
const Impressum = lazy(() => import("./Views/Impressum/impressum"));
const PrivacyPolicy = lazy(() => import("./Views/PrivacyPolicy/pp"));
<<<<<<< HEAD
​
=======
>>>>>>> 498b6954144aec6a53d2fd116bcb91ef232ebe5d
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Professionelle Webseiten und Homepages für Ärzte/Zahnärzte
          </title>
          <link rel="canonical" href="https://www.praxis-webseite.de/" />
        </Helmet>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/Referenzen" component={Refer} />
        <Route exact path="/Kontakt" component={Kont} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Pakete" component={Pakt} />
        <Route exact path="/impressum" component={Impressum} />
        <Route exact path="/datenschutzerklaerung" component={PrivacyPolicy} />
        <Route exact path="/blog/:blogid" component={BlogPage} />
        <Route exact path="/Pakete#card_section" component={Card} />
<<<<<<< HEAD
​
=======
>>>>>>> 498b6954144aec6a53d2fd116bcb91ef232ebe5d
        <Footer />
        <CookieConsent
          buttonText="Akzeptieren"
          declineButtonText="Decline"
          style={{ background: "black" }}
          buttonStyle={{
            backgroundColor: "#204379",
            color: "white",
            border: "1px solid white",
          }}
          enableDeclineButton
          onDecline={() => {
            alert("Declined!");
          }}
        >
          Diese Website verwendet Cookies, um die Benutzererfahrung zu
          verbessern.
        </CookieConsent>
      </Router>
    </Suspense>
  );
}
// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import FeedbackForm from "./Components/FeedbackForm";
// import PropTypes from "prop-types";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <FeedbackForm env={this.props.env} />
//       </div>
//     );
//   }
// }

// App.propTypes = {
//   env: PropTypes.object.isRequired,
// };

export default App;
