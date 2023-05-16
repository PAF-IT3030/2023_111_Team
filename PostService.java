package com.foodies.foodies.service;

import com.foodies.foodies.model.Post;
import com.foodies.foodies.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;


    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post updatePost(Post post) {
        return postRepository.save(post);
    }

    public void deletePost(Long id) {
        Post post = postRepository.getById(id);
        postRepository.delete(post);
    }

    public Post getPost(Long id) {
        return postRepository.findById(id).get();
    }

    public Post getUserPost(Long userId) {
        return postRepository.findByUserId(userId);
    }
}
