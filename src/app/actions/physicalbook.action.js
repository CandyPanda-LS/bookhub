import { createAsyncThunk } from "@reduxjs/toolkit";
import { PHYSICALBOOKAPI } from "../api/physicalbook.api";

export const fetchAllPhysicalBooks = createAsyncThunk(
  "physicalbook/fetchAllPhysicalBooks",
  async () => {
    const response = await PHYSICALBOOKAPI.fetchAllPhysicalBooks();
    return response.data;
  }
);

export const donatePhysicalBook = createAsyncThunk(
  "physicalbook/donatePhysicalBook",
  async (newPhysicalBook) => {
    const response = await PHYSICALBOOKAPI.donatePhysicalBook(newPhysicalBook);
    return response.data;
  }
);
