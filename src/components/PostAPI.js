import axios from "axios";

export const CreatePost = async (data) => {
    try {
        await axios({
            method: "post",
            url: "http://localhost:8082/posts/save",
            headers: { 'content-type': 'application/json' },
            data: data
        })
    } catch (e) { }
}

export const DeletePost = async (id) => {
    try {
        await axios({
            method: "delete",
            url: `http://localhost:8082/posts/delete-post/${id}`,
            headers: { 'content-type': 'application/json' },
        })
    } catch (e) { }
}


export const GetAllPosts = async () => {
    try {
        const postsResponse = await axios({
            method: "get",
            url: `http://localhost:8082/posts/get-all-posts`,
        });
        const postsData = postsResponse;
        return postsData;
    } catch (e) { }
};


