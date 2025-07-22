import axios from "axios";
import axiosInstance from "./axiosInstance";
import { getApiBaseUrl } from "../config/apiBaseUrl";

const API_BASE_URL = getApiBaseUrl();

export const announcementsApi = {
  getAllAnnouncements: async () => {
    try {
      const res = await axiosInstance.get("/announcement");
      return res.data;
    } catch (error) {
      console.log("Error in announcement.getAll:", error);
      throw error;
    }
  },
  getAnnouncementById: async (id: string) => {
    try {
      const res = await axiosInstance.get(`/announcement/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error in announcement.getById:", error);
      throw error;
    }
  },
  createAnnouncement: async (data: any) => {
    try {
      const res = await axiosInstance.post("/announcement", data);
      return res.data;
    } catch (error) {
      console.log("Error in announcement.create:", error);
      throw error;
    }
  },
  updateAnnouncement: async (id: string, data: any) => {
    try {
      const res = await axiosInstance.put(`/announcement/${id}`, data);
      return res.data;
    } catch (error) {
      console.log("Error in announcement.update:", error);
      throw error;
    }
  },
  deleteAnnouncement: async (id: string) => {
    try {
      const res = await axiosInstance.delete(`/announcement/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error in announcement.delete:", error);
      throw error;
    }
  },
};

export const quizzesApi = {
  getAllQuizzes: async () => {
    try {
      const res = await axiosInstance.get("/quiz");
      return res.data;
    } catch (error) {
      console.log("Error in quiz.getAll:", error);
      throw error;
    }
  },
  getQuizById: async (id: string) => {
    try {
      const res = await axiosInstance.get(`/quiz/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error in quiz.getById:", error);
      throw error;
    }
  },
  createQuiz: async (data: any) => {
    try {
      const res = await axiosInstance.post("/quiz", data);
      return res.data;
    } catch (error) {
      console.log("Error in quiz.create:", error);
      throw error;
    }
  },
  updateQuiz: async (id: string, data: any) => {
    try {
      const res = await axiosInstance.put(`/quiz/${id}`, data);
      return res.data;
    } catch (error) {
      console.log("Error in quiz.update:", error);
      throw error;
    }
  },
  deleteQuiz: async (id: string) => {
    try {
      const res = await axiosInstance.delete(`/quiz/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error in quiz.delete:", error);
      throw error;
    }
  },
};


export const auth = {
  login: async (credentials: { email: string; password: string }) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/user/login`, credentials);
      return res.data;
    } catch (error) {
      console.log("Error in auth.login:", error);
      throw error;
    }
  },
  register: async (userData: any) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/user/register`, userData);
      return res.data;
    } catch (error) {
      console.log("Error in auth.register:", error);
      throw error;
    }
  },
};