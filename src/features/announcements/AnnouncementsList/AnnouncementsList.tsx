import { Paper, Typography, List } from "@mui/material";

import AnnouncmentCard from "../../../components/AnnouncmentCard/AnnouncmentCard";

const announcements = [
  {
    id: 1,
    name: "Mr.Ahmed Mostafa",
    subject: "Math 101",
    avatar: "A",
    message:
      "Hi my hero! I just want you ready to our exams and focus on remaining assessments to gain more grades, good luck my warriors! 😊",
  },
  {
    id: 2,
    name: "Mrs.Salma Ahmed",
    subject: "Physics 02",
    avatar: "S",
    message:
      "Hello my students, I want to announce that the next quiz will be within 3 days and will cover the whole unit2. Add and subtract numbers. Study hard! Good luck! 💪",
  },
  {
    id: 3,
    name: "School management",
    subject: "Management",
    avatar: "M",
    message:
      "We appreciate your outstanding learning! What really made my day is the flag call I had earlier this morning to 850 students at Goodwyn Junior High School in Tagamo3, Egypt. I just want to convey to all our super students to focus on remaining assessments to gain more grades, good luck my superstars!",
  },
  {
    id: 4,
    name: "Events Manager",
    subject: "Events",
    avatar: "E",
    message:
      "Hello! Can’t wait for our upcoming trip on the next weekend. The trip will be to Dreampark and Pyramids. To book your seat please contact your class teacher.",
  },
];

const AnnouncementsList = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, minHeight: 350 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Announcements
      </Typography>
      <List>
        {announcements.map((announcment, idx) => (
          <AnnouncmentCard
            key={announcment.id}
            announcementsLength={announcements.length}
            announcment={announcment}
            idx={idx}
          />
        ))}
      </List>
    </Paper>
  );
};

export default AnnouncementsList;
