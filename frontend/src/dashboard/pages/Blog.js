import React, { useEffect } from "react";
import { Data } from "../components/stories/Data";
import Card from "../components/Cards/Card";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChat, BsHeart } from "react-icons/bs";
import { Link, useRouteMatch } from "react-router-dom";
import { getPosts } from "../../actions/postAction";

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.post.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const match = useRouteMatch();

  const Blogs = () => {
    return (
      <div className="flex flex-wrap -m-4">
        {!blogs.length
          ? "No blogs"
          : blogs.map((data, i) => (
              <div key={i} className="xl:w-1/3 md:w-1/2 p-4">
                <Link to={`${match.url}/${data._id}`}>
                  <Card>
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://dummyimage.com/720x400"
                      alt="content"
                    />
                    <h3 className="tracking-widest text-orange text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Chichen Itza
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                    <div className="flex text-xl">
                      <div className="mr-4 flex">
                        <BsHeart className="mt-0.5" />
                        <span className="text-base ml-1"> 22 </span>
                      </div>
                      <div className="flex">
                        <BsChat className="mt-0.5" />
                        <span className="text-base ml-1"> 3 </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
      </div>
    );
  };

  const Manufacturers = () => (
    <>
      {Data.map((data, i) => (
        <Tab>
          <div className="relative rounded flex justify-center items-center w-14">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/fbcc8e7b98a6e0d1d16afc4eafceeb427a380273/95c82/assets/img/unlicensed/watch-1.png"
              alt="random"
            />
          </div>
        </Tab>
      ))}
    </>
  );

  return (
    <div className="py-8">
      <Tabs>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <TabList className="flex whitespace-nowrap">
              {Manufacturers()}
            </TabList>
          </SwiperSlide>
        </Swiper>

        <TabPanel>{Blogs()}</TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Blog;
