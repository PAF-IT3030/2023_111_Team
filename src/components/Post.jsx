import React, { useState, memo } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AiOutlineDelete } from "react-icons/ai";
import { DeletePost } from "./PostAPI";
import "@splidejs/react-splide/css";

const Post = (props) => {

  const onDeletePostClick = async () => {
    document.querySelector("#delete-post-modal").checked = false;
    await DeletePost(props.PostObj.postId);
    // window.location.reload();
    // Call delete post
  };

  return (
    <div className="flex flex-col bg-teal-100 w-[500px] rounded-lg select-none">
      <div className="flex m-2 justify-between">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={props.PostObj.postOwnerImageURL} alt="owner" />
            </div>
          </div>
          <div className="ml-2 font-fatKidFont">
            {props.PostObj.postOwnerName}
          </div>
        </div>
          <label htmlFor="delete-post-modal">
            <AiOutlineDelete size={20} />
          </label>
      </div>
      <input type="checkbox" id="delete-post-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Do you want to Delete Post!</h3>
          <div className="modal-action">
            <label htmlFor="delete-post-modal" className="btn">
              Cancel
            </label>
            <label className="btn btn-error" onClick={onDeletePostClick}>
              Delete
            </label>
          </div>
        </div>
      </div>
      <div className="ml-2 text-slate-900 font-contentFont">
        {props.PostObj.location}
      </div>
      <div className="flex ml-2">{props.PostObj.postDescription}</div>
      <div className="ml-2 font-semibold">{props.PostObj.hashTags}</div>
      <div className="flex m-2">
        {props.PostObj.postImages.length === 1 ? (
          <img
            src={props.PostObj.postImages[0]}
            alt="food"
            className="w-fit rounded-lg"
          />
        ) : (
          <Splide
            aria-label="My Favorite Images"
            options={{
              rewind: true,
            }}
          >
            {props.PostObj.postImages.map((img, index) => {
              return (
                <SplideSlide key={index}>
                  <img src={img} alt="food" className="rounded-lg" />
                </SplideSlide>
              );
            })}
          </Splide>
        )}
      </div>
    </div>
  );
};

export default memo(Post);
