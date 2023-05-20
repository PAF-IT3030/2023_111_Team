package com.foodies.foodies.controller;

import com.foodies.foodies.model.Post;
import com.foodies.foodies.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("/save")
    public Post newPost(@RequestBody Post post){
        return postService.createPost(post);
    }
    @GetMapping("/get-all-posts")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }
    @PatchMapping("/update-post")
    public Post updatePost(@RequestBody Post post){
        return  postService.updatePost(post);
    }
    @DeleteMapping("/delete-post/{id}")
    public void deletePost(@PathVariable Long id){
        postService.deletePost(id);

    }
    @GetMapping("/get-post/{id}")
    public Post getPost(@PathVariable Long id){
        return postService.getPost(id);

    }

    @GetMapping("/get-user-post/{userId}")
    public Post getUserPost(@PathVariable Long userId){
        return postService.getUserPost(userId);

    }

}
