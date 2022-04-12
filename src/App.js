// hooks
import { useEffect, useState, useLayoutEffect } from "react";
// components
import News from "./components/News";
// axios
import axios from "axios";
// alan ai
import alanBtn from "@alan-ai/alan-sdk-web";
// flow bite
import "flowbite";

const App = () => {
  // state
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [newsData, setNewsData] = useState([]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const alanKey =
    "91ade7c80ea58e90d739b3ce4ff70f4b2e956eca572e1d8b807a3e2338fdd0dc/stage";

  useLayoutEffect(() => {
    function updateScreen() {
      alanBtn({
        key: alanKey,
        onCommand: ({ command, data }) => {
          setCategory(data);
        },
      });
    }
    requestAnimationFrame(updateScreen);
  }, []);

  useEffect(() => {
    const getNewsData = () => {
      const API_KEY = "332569df388042a294c7cc8c3a16fd7b";
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
        )
        .then((res) => {
          setNewsData(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getNewsData();
  }, [category, country]);

  return (
    <div className="bg-slate-900 container">
      <div className="pt-10 px-10 text-white">
        {/* select category*/}
        <label htmlFor="category">Choose a category</label>
        <select
          name="category"
          id="category"
          className=" h-10 w-44 px-2 mx-2 rounded-md bg-slate-800 text-white focus:outline-none"
          onChange={handleCategoryChange}
        >
          <option value="entertainment">General</option>
          <option value="entertainment">Entertainment</option>
          <option value="business">Business</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
        </select>

        {/* select country */}
        <label htmlFor="country">Choose a country</label>
        <select
          name="country"
          id="country"
          className=" h-10 w-44 px-2 mx-2 rounded-md bg-slate-800 text-white focus:outline-none"
          onChange={handleCountryChange}
        >
          <option value="id">India</option>
          <option value="us">USA</option>
          <option value="au">Australia</option>
          <option value="de">Germany</option>
        </select>
      </div>

      {/* news component */}
      <News newsData={newsData} />
    </div>
  );
};

export default App;
