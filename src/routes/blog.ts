import { Router } from "express";
import { getRepository } from "typeorm";
import {BlogPost} from "../entities/BlogPost";

const blogPostsRouter = Router();

blogPostsRouter.get("/", async (req, res) => {
  const blogPostsRepo = getRepository(BlogPost);
  const blogPosts = blogPostsRepo.find();
  res.json(blogPosts);
});


blogPostsRouter.post("/", async (req, res) => {
  const blogPostsRepo = getRepository(BlogPost);
  const newBlogPost = blogPostsRepo.create(req.body);
  blogPostsRepo.save(newBlogPost);
  res.json(newBlogPost);
});

export default blogPostsRouter;
