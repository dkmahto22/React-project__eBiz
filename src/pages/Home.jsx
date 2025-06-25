
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentSection from "../components/ContentSection";
import Banner from '../components/Banner';
import { Helmet } from "react-helmet-async";


export default function Home() {
  return (
      <>
      <Helmet>
        <title>Ebizfiling | Corporate Legal Service Under company Law</title>
        <meta name="description" content="Learn more about our mission and team." />
      </Helmet>
      <Header />
      <Banner />
      <ContentSection />
      <Footer />
      </>
  )
}


