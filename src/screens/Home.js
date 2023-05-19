import React, { useState, useEffect } from "react";
import LogingHeader from "../components/LogingHeader";
import Post from "../components/Post";
import { GetAllPosts } from "../components/PostAPI";

const Home = () => {
  const [postObjArray, setPostObjArray] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await GetAllPosts();
      let postArray = [];

      postsFromServer.data.forEach(post => {
        let newPost ={
          postId: post.id,
          postOwnerImageURL: "https://randomuser.me/api/portraits/men/1.jpg",
          postOwnerName: "mahesh",
          hashTags: post.tags,
          postDescription:post.description,
          likesCount: post.likes,
          postImages: [
            post.imagePath
          ]
        }  
        
        postArray.push(newPost);
      }); 

      setPostObjArray(postArray);

      console.log(postArray);
    };
    getPosts();
  }, []);

  return (
    <div>
      <LogingHeader />
      {postObjArray !== undefined && postObjArray !== null ? (
        <div className="flex mt-5 items-center place-content-center">
          <div className="grid gap-2 grid-cols-2 grid-rows-4">
            {postObjArray.map((postObj, index) => {
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
