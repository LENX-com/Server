import React, { useEffect } from "react";
import { Data } from "../components/stories/Data";
import Card from "../components/Cards/Card";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChat, BsHeart } from "react-icons/bs";
import { Link, useRouteMatch } from "react-router-dom";
import {
  allBlogsByfollowing,
  allBlogsBySingleFollowing,
} from "../../actions/postAction";
import { getFollowing } from "../../actions/userActions";

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.post.posts);
  const following = useSelector((state) => state.user.following);
  useEffect(() => {
    dispatch(allBlogsByfollowing());
    dispatch(getFollowing());
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
                      {data.title}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {data.name}
                    </h2>
                    <p className="leading-relaxed text-base">{data.text}</p>
                    <div className="flex text-xl">
                      <div className="mr-4 flex">
                        <BsHeart className="mt-0.5" />
                        <span className="text-base ml-1">
                          {" "}
                          {data.comments.length}
                        </span>
                      </div>
                      <div className="flex">
                        <BsChat className="mt-0.5" />
                        <span className="text-base ml-1">
                          {" "}
                          {data.likes.length}{" "}
                        </span>
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
      {!following.length
        ? "You are not following anyone yet follow manufacturer to see their blog posts"
        : following.map((data, i) => (
            <Tab
              onClick={() =>
                dispatch(allBlogsBySingleFollowing({
                  manufacturerId: data.manufacturerId._id,
                }))
              }
            >
              <div className="relative rounded flex justify-center items-center w-14">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/fbcc8e7b98a6e0d1d16afc4eafceeb427a380273/95c82/assets/img/unlicensed/watch-1.png"
                  alt={`${data.manufacturerId.name} shop`}
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
        {following.map(data => (
          <TabPanel>{Blogs()}</TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Blog;
