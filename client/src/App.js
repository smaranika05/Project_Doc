import React, { Suspense, lazy } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Helmet } from "react-helmet";
import "./App.css";
import Loader from "./Components/Loader/index";
import Card from "./Views/Pakete/Package_contact/Package_contact";

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

        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
