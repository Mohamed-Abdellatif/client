import { useQuery } from "@tanstack/react-query";
import { quizzesApi } from "../services/api";

const fetchQuizzes = async () => {
  const data = await quizzesApi.getAllQuizzes(); // Change URL as needed
  return data;
};

export const useQuizzesQuery = () => {
  return useQuery({
    queryKey: ["quizzes"],
    queryFn: fetchQuizzes,
    staleTime: 1000 * 60 * 5,
  });
};
