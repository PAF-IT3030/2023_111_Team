import axios from "axios";

export const CreatePost = async (data, image) => {
    console.log(image);

    const formData = new FormData();
    formData.append('file', image);
    formData.append('title', data.title);
    formData.append('tags', data.tags);
    formData.append('description', data.description);
    formData.append('likes', data.likes);
    formData.append('userId', data.userId);



    try {

        axios.post('http://localhost:8082/posts/save', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
    } catch (e) { }
}

export const UpdatePost = async (data) => {
    try {
        await axios({
            method: "PATCH",
            url: "http://localhost:8082/posts/update-post",
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


