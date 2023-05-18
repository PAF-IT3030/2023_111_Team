import axios from "axios";

export const CreatePost = async (data) => {
    try {
        console.log("dsdsdd");
        await axios({
            method: "post",
            url: "http://localhost:8080/posts/save",
            headers: { 'content-type': 'application/json' },
            data: data
        })
    } catch (e) { }
}

export const DeletePost = async (id) => {
    try {
        await axios({
            method: "delete",
            url: `http://localhost:8080/posts/${id}`,
            headers: { 'content-type': 'application/json' },
        })
    } catch (e) { }
}

export const GetPostById = async (postId, userId) => {

    let PostObj = {
        postId: 1,
        isCommentOwner: true,
        isPostOwner: true,
        postOwnerImageURL: "https://randomuser.me/api/portraits/men/9.jpg",
        postOwnerName: "",
        hashTags: "",
        location: "",
        postDescription:
            "",
        likesCount: 10,
        postImages: [
            "https://placehold.co/600x400/000000/FFFFFF/png",
            "https://placehold.co/600x400/F08080/33FF39/png",
            "https://placehold.co/600x400/FFBF00/DFFF00/png",
            "https://placehold.co/600x400/6495ED/40E0D0/png",
        ],
        comments: [
        ],
        userImage: "https://randomuser.me/api/portraits/women/75.jpg",
        currentUsername: "",
    };

    try {
        const postResponse = await axios({
            method: "get",
            url: `http://localhost:8080/posts/${postId}`,
            headers: { 'content-type': 'application/json' },
        });
        const postData = postResponse.data;

        const commentResponse = await axios({
            method: "get",
            url: `http://localhost:9112/comments/${postId}`,
        });
        const commentData = commentResponse.data;

        for (let comment of commentData) {
            const userResponse = await axios({
                method: "get",
                url: `http://localhost:9111/users/${comment.userId}`,
            });
            const userData = userResponse.data;
            PostObj.comments.push({
                commentId: comment.id,
                username: userData.username,
                comment: comment.comment,
            });
        }

        const userResponse = await axios({
            method: "get",
            url: `http://localhost:9111/users/${postData.userId}`,
        });
        const userData = userResponse.data;
        PostObj.postId = postData.id;
        PostObj.isCommentOwner = commentData.some((comment) => comment.userId === Number(userId));
        PostObj.isPostOwner = postData.userId === Number(userId);
        PostObj.postDescription = postData.description;
        PostObj.likesCount = Math.floor(Math.random() * 20) + 0;
        PostObj.postOwnerName = userData.username;
        PostObj.currentUsername = userData.username;
        PostObj.hashTags = postData.hashtags;
        PostObj.location = postData.location;
        return PostObj;
    } catch (e) { }
};

export const GetAllPosts = async () => {
    let PostObjArray = [];
    try {
        const postsResponse = await axios({
            method: "get",
            url: `http://localhost:8080/posts/get-all-posts`,
        });
        const postsData = postsResponse;
        // for (let post of postsData) {
        //     const PostObj = await GetPostById(post.id, userId);
        //     PostObjArray.push(PostObj);
        // }
        return postsData;
    } catch (e) { }
};


