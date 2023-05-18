import React, { useState, useEffect } from "react";
import LogingHeader from "../components/LogingHeader";
import Post from "../components/Post";
import { GetAllPosts } from "../components/PostAPI";

const PostObj = [
  {
    postId: 1,
    postOwnerImageURL: "https://randomuser.me/api/portraits/men/9.jpg",
    postOwnerName: "John Doe",
    hashTags: "#newpost #springboot #sql",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget fermentum aliquam, quam libero ultricies nunc, nec ultri",
    likesCount: 10,
    postImages: [
      "https://placehold.co/600x400/000000/FFFFFF/png"
    ]
  },
 
];

const Home = () => {
  const [postObjArray, setPostObjArray] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await GetAllPosts();
      setPostObjArray(postsFromServer);
    };
    getPosts();
  }, []);

  return (
    <div>
      <LogingHeader />
      {PostObj !== undefined && PostObj !== null ? (
        <div className="flex mt-5 items-center place-content-center">
          <div className="grid gap-2 grid-cols-2 grid-rows-4">
            {PostObj.map((postObj, index) => {
              return <Post key={index} PostObj={postObj} />;
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
