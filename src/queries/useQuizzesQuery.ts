import { useQuery } from "@tanstack/react-query";
import { quizzesApi } from "../services/api";
import { quizzes } from "../utils/constants";

const fetchQuizzes = async () => {
  const data = await quizzesApi.getAllQuizzes(); // Change URL as needed
  return data;
};

export const useQuizzesQuery = () => {
  return useQuery({
    queryKey: [quizzes],
    queryFn: fetchQuizzes,
    staleTime: 1000 * 60 * 5,
  });
};
