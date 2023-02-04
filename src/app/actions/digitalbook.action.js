import { createAsyncThunk } from "@reduxjs/toolkit";
import { DIGITALBOOKAPI } from "../api/digitalbook.api";

export const fetchAllBooks = createAsyncThunk(
  "digitalbook/fetchAllBooks",
  async () => {
    const response = await DIGITALBOOKAPI.fetchAllBooks();
    return response.data;
  }
);

//   export const savePost = createAsyncThunk(
//     "posts/savePost",
//     async (newPost) => {
//       const response = await POSTAPI.savePost(newPost);
//       return response.data;
//     }
//   );

//   export const deletePost = createAsyncThunk(
//     "posts/deletePost",
//     async (postId) => {
//       await POSTAPI.deletePost(postId);
//       return postId;
//     }
//   );

//   export const updatePost = createAsyncThunk(
//     "posts/updatePost",
//     async (post) => {
//       const response = await POSTAPI.updatePost(post.id, post.updatedPost);
//       return response.data;
//     }
//   );
