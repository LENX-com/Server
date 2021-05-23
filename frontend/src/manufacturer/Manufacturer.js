import React, { useEffect, useState } from "react";
import { API } from "../config";
import axios from "axios";
import img from "../assets/Logo 1 white gif.gif";
import Stories from "react-insta-stories";

const stories = [
  {
    url: img,
    id: "ehwkgfjw",
  },
  {
    url: img,
    id: "hwegjfewhgj",
  },
];

export default function Manufacturer({ match }) {
  const [manufacturer, setManufacturer] = useState([]);
  const [storyy, setStory] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${API}/user/${match.params.userId}`);
      setManufacturer(response.data);
      const { story } = response.data;
      setStory(story);

      const tempState = [...story];
      tempState.map((item, index) => {
        tempState[index].type = "video";
        tempState[index].duration = 2000;
        return item;
      });
      setStory(tempState);
    };
    fetch();
    console.log(match.params.userId);
  }, [match.params.userId]);

  return (
    <div>
      <h1>Manufacturer page</h1>
      <div>
        <p>all stories by manufacturer</p>
        {storyy.length > 0 && <Stories stories={storyy} />}
      </div>
      {manufacturer.products &&
        manufacturer.products.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1> <span>{item.price}</span>{" "}
            <img alt="img" src={item.photo} />
          </div>
        ))}

      <div>Blogs</div>
    </div>
  );
}
