import { CircularProgress, Paper, Typography } from "@mui/material";
import GenericList from "../../../components/GenericList/GenericList";
import GenericCard from "../../../components/GenericCard/GenericCard";
import DueItemCard from "../../../components/DueItemCard/DueItemCard";
import { useTranslation } from "react-i18next";
import { useQuizzesQuery } from "../../../queries/useQuizzesQuery";
import type { DueItem } from "../../../types";



const DueList = () => {
  const {data: dueItems, isLoading} = useQuizzesQuery(); // Assuming useDueItemsQuery is defined to fetch due items
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <Paper elevation={3} sx={{ p: 2, minHeight: 300 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          <CircularProgress size={44} />
        </Typography>
      </Paper>
    );
  }
  if (!dueItems || dueItems.length === 0) {
    return (
      <Paper elevation={3} sx={{ p: 2, minHeight: 300 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {t("noDueItems")}
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper elevation={3} sx={{ p: 2, minHeight: 300 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {t("whats_due")}
      </Typography>
      <GenericList
        items={dueItems}
        renderItem={(item:DueItem, idx, arr) => (
          <GenericCard
            key={item._id}
            showDivider={idx < arr.length - 1}
            listItemProps={{ sx: { flexDirection: 'column', alignItems: 'flex-start' } }}
          >
            <DueItemCard item={item} />
          </GenericCard>
        )}
      />
    </Paper>
  );
};

export default DueList;
