import React, { useEffect, useState } from "react";
import { API } from "../config";
import axios from "axios";
import img from "../assets/Logo 1 white gif.gif";
import bg2 from "../assets/bg3.jpg";
import avatar from "../assets/user-4.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);
// import Stories from "react-insta-stories";

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
    //   <div>
    //     <h1>Manufacturer page</h1>
    //     <div>
    //       <p>all stories by manufacturer</p>
    //       {storyy.length > 0 && <Stories stories={storyy} />}
    //     </div>
    //     {manufacturer.products &&
    //       manufacturer.products.map((item, index) => (
    //         <div key={index}>
    //           <h1>{item.name}</h1> <span>{item.price}</span>{" "}
    //           <img alt="img" src={item.photo} />
    //         </div>
    //       ))}
    //     <div>Blogs</div>
    //   </div>
    // );
    <div className="w-11/12 m-auto">
      <div className="rounded bg-white mt-4 border dark:border-gray-800">
        <div className="flex flex-col">
          <img className="w-full h-48 object-cover" src={bg2} alt="Mountain" />
          <div className="px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img className="rounded-full w-12" src={avatar} alt="user" />
              <p className="pl-4 ">Adidas</p>
            </div>
            <p className="text-gray-700 text-base">follow me</p>
          </div>
        </div>
      </div>

      {/* tabs */}
      <Tabs className="mt-8">
        <TabList>
          <Tab>Blogs</Tab>
          <Tab>Status</Tab>
          <Tab>Products</Tab>
          <Tab>About</Tab>
        </TabList>
        <TabPanel>
          <div className=" pt-10">
            <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-lg border w-100">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="h-11 w-11 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"
                    alt="post"
                  />
                  <div className="ml-1.5 text-sm leading-tight">
                    <span className="text-black dark:text-white font-bold block ">
                      Visualize Value
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 font-normal block">
                      @visualizevalue
                    </span>
                  </div>
                </div>
                <svg
                  className="text-blue-400 dark:text-white h-6 w-auto inline-block fill-current"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </g>
                </svg>
              </div>
              <p className="text-black dark:text-white block text-xl leading-snug mt-3">
                “No one ever made a decision because of a number. They need a
                story.” — Daniel Kahneman
              </p>
              <img
                className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700"
                src="https://pbs.twimg.com/media/EpkuplDXEAEjbFc?format=jpg&name=medium"
                alt="dp"
              />
              <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
                10:05 AM · Dec 19, 2020
              </p>
              <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
              <div className="text-gray-500 dark:text-gray-400 flex mt-3">
                <div className="flex items-center mr-6">
                  <svg
                    className="fill-current h-5 w-auto r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                    </g>
                  </svg>
                  <span className="ml-3">615</span>
                </div>
                <div className="flex items-center mr-6">
                  <svg
                    className="fill-current h-5 w-auto r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                    </g>
                  </svg>
                  <span className="ml-3">
                    93 people are Tweeting about this
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div className=" bg-white dark:border-gray-800 p-4 rounded-lg border">
              <div className="md:flex">
                <div className="w-full">
                  <ul className="flex">
                    <Swiper
                      slidesPerView={7}
                      spaceBetween={2}
                      freeMode={true}
                    >
                      <SwiperSlide>
                        <li className="flex flex-col items-center">
                          <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            {" "}
                            <a
                              href="#div"
                              className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                            >
                              {" "}
                              <img
                                src="https://i.imgur.com/aq39RMA.jpg"
                                class="rounded-full"
                                alt="status"
                                width="60"
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="flex flex-col items-center">
                          <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            {" "}
                            <a
                              href="#div"
                              className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                            >
                              {" "}
                              <img
                                src="https://i.imgur.com/aq39RMA.jpg"
                                class="rounded-full"
                                alt="status"
                                width="60"
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="flex flex-col items-center">
                          <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            {" "}
                            <a
                              href="#div"
                              className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                            >
                              {" "}
                              <img
                                src="https://i.imgur.com/aq39RMA.jpg"
                                class="rounded-full"
                                alt="status"
                                width="60"
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="flex flex-col items-center">
                          <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            {" "}
                            <a
                              href="#div"
                              className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                            >
                              {" "}
                              <img
                                src="https://i.imgur.com/aq39RMA.jpg"
                                class="rounded-full"
                                alt="status"
                                width="60"
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="flex flex-col items-center">
                          <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            {" "}
                            <a
                              href="#div"
                              className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                            >
                              {" "}
                              <img
                                src="https://i.imgur.com/aq39RMA.jpg"
                                class="rounded-full"
                                alt="status"
                                width="60"
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="flex flex-col items-center">
                          <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            {" "}
                            <a
                              href="#div"
                              className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                            >
                              {" "}
                              <img
                                src="https://i.imgur.com/aq39RMA.jpg"
                                class="rounded-full"
                                alt="status"
                                width="60"
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="flex flex-col items-center">
                          <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            {" "}
                            <a
                              href="#div"
                              className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                            >
                              {" "}
                              <img
                                src="https://i.imgur.com/aq39RMA.jpg"
                                class="rounded-full"
                                alt="status"
                                width="60"
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="flex flex-col items-center">
                          <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            {" "}
                            <a
                              href="#div"
                              className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                            >
                              {" "}
                              <img
                                src="https://i.imgur.com/aq39RMA.jpg"
                                class="rounded-full"
                                alt="status"
                                width="60"
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="flex flex-col items-center">
                          <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            {" "}
                            <a
                              href="#div"
                              className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                            >
                              {" "}
                              <img
                                src="https://i.imgur.com/aq39RMA.jpg"
                                class="rounded-full"
                                alt="status"
                                width="60"
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="flex flex-col items-center">
                          <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            {" "}
                            <a
                              href="#div"
                              className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                            >
                              {" "}
                              <img
                                src="https://i.imgur.com/aq39RMA.jpg"
                                class="rounded-full"
                                alt="status"
                                width="60"
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                          <span class="text-sm w-16 overflow-hidden overflow-ellipsis">
                            riksy_stam143543
                          </span>
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li className="flex flex-col items-center">
                          <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                            {" "}
                            <a
                              href="#div"
                              className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                            >
                              {" "}
                              <img
                                src="https://i.imgur.com/aq39RMA.jpg"
                                class="rounded-full"
                                alt="status"
                                width="60"
                              />{" "}
                            </a>{" "}
                          </div>{" "}
                        </li>
                      </SwiperSlide>
                    </Swiper>

                    {/* <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1"> <a href="#div" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src="https://i.imgur.com/eMaYwXn.jpg" class="rounded-full"  alt="status" width="60"/> </a> </div> <span class="text-sm w-16 overflow-hidden overflow-ellipsis">tina_2342</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1"> <a href="#div" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src="https://i.imgur.com/zQZSWrt.jpg" class="rounded-full"  alt="status" width="60"/> </a> </div> <span class="text-sm w-16 overflow-hidden overflow-ellipsis">sujan_tomy</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <div class="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1"> <a href="#div" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src="https://i.imgur.com/agRGhBc.jpg" class="rounded-full"  alt="status" width="60"/> </a> </div> <span class="text-sm w-16 overflow-hidden overflow-ellipsis">rujanta_98432</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1"> <a href="#div" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src="https://i.imgur.com/uIgDDDd.jpg" class="rounded-full"  alt="status" width="60"/> </a> </div> <span class="text-sm w-16 overflow-hidden overflow-ellipsis">rony_dusak2</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1"> <a href="#div" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src="https://i.imgur.com/tT8rjKC.jpg" class="rounded-full"  alt="status" width="60"/> </a> </div> <span class="text-sm w-16 overflow-hidden overflow-ellipsis">tom_hank_fan</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1"> <a href="#div" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src="https://i.imgur.com/tT8rjKC.jpg" class="rounded-full"  alt="status" width="60"/> </a> </div> <span class="text-sm w-16 overflow-hidden overflow-ellipsis">tom_hank_fan</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1"> <a href="#div" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src="https://i.imgur.com/tT8rjKC.jpg" class="rounded-full"  alt="status" width="60"/> </a> </div> <span class="text-sm w-16 overflow-hidden overflow-ellipsis">tom_hank_fan</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1"> <a href="#div" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src="https://i.imgur.com/tT8rjKC.jpg" class="rounded-full"  alt="status" width="60"/> </a> </div> <span class="text-sm w-16 overflow-hidden overflow-ellipsis">tom_hank_fan</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1"> <a href="#div" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src="https://i.imgur.com/tT8rjKC.jpg" class="rounded-full"  alt="status" width="60"/> </a> </div> <span class="text-sm w-16 overflow-hidden overflow-ellipsis">tom_hank_fan</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1"> <a href="#div" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src="https://i.imgur.com/tT8rjKC.jpg" class="rounded-full"  alt="status" width="60"/> </a> </div> <span class="text-sm w-16 overflow-hidden overflow-ellipsis">tom_hank_fan</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1"> <a href="#div" className="bg-white p-1 rounded-full block transform transition hover:rotate-6"> <img src="https://i.imgur.com/tT8rjKC.jpg" class="rounded-full"  alt="status" width="60"/> </a> </div> <span class="text-sm w-16 overflow-hidden overflow-ellipsis">tom_hank_fan</span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
