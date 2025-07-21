import { Paper, Typography, List } from "@mui/material";
import DueItemCard from "../../../components/DueItemCard/DueItemCard";
import { useTranslation } from "react-i18next";

const dueItems = [
  {
    id: 1,
    type: "Unit 2 quiz",
    course: "Physics 02",
    details: "Unit2: Unbalanced forces",
    due: "30 Dec 2017 - 09:00 PM",
    action: "Start Quiz",
  },
  {
    id: 2,
    type: "12-12 Assignment",
    course: "Arabic K12",
    details: "",
    due: "30 Dec 2017 - 09:00 PM",
    action: "Solve Assignment",
  },
];

const DueList = () => {
  const { t } = useTranslation();
  return (
    <Paper elevation={3} sx={{ p: 2, minHeight: 350 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {t("whats_due")}
      </Typography>
      <List>
        {dueItems.map((item, idx) => (
          <DueItemCard
            key={item.id}
            dueItemsLength={dueItems.length}
            item={item}
            idx={idx}
          />
        ))}
      </List>
    </Paper>
  );
};

export default DueList;
