import React from "react";
import etsy from "./data/etsy";
import Listing from "./components/Listing"
import "./App.css"

export default function App() {
  return (
    <>
      <Listing items={etsy} />
    </>
  )
}