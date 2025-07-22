import { useQuery } from "@tanstack/react-query";
import { announcementsApi } from "../services/api";

const fetchAnnouncements = async () => {
  const data = await announcementsApi.getAllAnnouncements(); // Change URL as needed
  return data;
};

export const useAnnouncementQuery = () => {
  return useQuery({
    queryKey: ["announcements"],
    queryFn: fetchAnnouncements,
    staleTime: 1000 * 60 * 5,
  });
};
