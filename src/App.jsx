/* eslint-disable jsx-a11y/alt-text */
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [img, setImg] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const resp = await axios.get(
          `https://pixabay.com/api/?key=40568666-e4ccb82dba26b6a0ad8036dd1&q=${term}&image_type=photo&pretty=true`
        );
        const respData = await resp.data;
        setImg(respData.hits);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [term]);
  return (
    <div className="container mx-auto">
      <ImageSearch searchImg={(text)=>setTerm(text)}/>
      {isLoading ? (
        <h1 className="text-5xl font-bold text-center mt-10">Loading...</h1>
      ) : (
        <div className="grid  grid-cols-3 md:grid-cols-4 gap-4 p-3">
          {img.map((imgData) => (
            <ImageCard key={imgData.id} img={imgData} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
