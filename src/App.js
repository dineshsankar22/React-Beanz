import React, { useState, useEffect } from "react";
import "./App.css";
import Beans from "./components/bean";
import Card from "./components/card";
import CoffeeField from "./components/coffee";
import Footer from "./components/footer";
import Header from "./components/header";
import ProfileLeft from "./components/profileleft";
import ProfileRight from "./components/profileright";
import TextField from "./components/textfield";

function App() {
  const [data, setData] = useState(null);

  const getData = () => {
    fetch("http://localhost:4503/aempage/bin/api/content/v3?page=home-page", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        //console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        //console.log(myJson);
        setData(myJson);
      });
    //console.log("data");
    //console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return data !== null ? (
    <div className="App">
      {/* {console.log(data)} */}

      <Header value={data} />
      <TextField value={data} />
      <CoffeeField value={data} />
      <Beans value={data} />
      <ProfileLeft value={data} />
      <ProfileRight value={data} />
      <Card value={data} />
      <Footer value={data} />
    </div>
  ) : (
    <h1>not found</h1>
  );
}

export default App;
