import { Paper } from "@mui/material";
import GenericList from "../../../components/GenericList/GenericList";
import GenericCard from "../../../components/GenericCard/GenericCard";
import DueItemCard from "../../../components/DueItemCard/DueItemCard";
import { useTranslation } from "react-i18next";
import { useQuizzesQuery } from "../../../queries/useQuizzesQuery";
import type { DueItem } from "../../../types";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import LoadingPaper from "../../../components/LoadingPaper/LoadingPaper";
import NoDataPaper from "../../../components/NoDataPaper/NoDataPaper";

const DueList = () => {
  const { data: dueItems, isLoading } = useQuizzesQuery(); // Assuming useDueItemsQuery is defined to fetch due items
  const { t } = useTranslation();

  if (isLoading) {
    return <LoadingPaper />;
  }
  if (!dueItems || dueItems.length === 0) {
    return <NoDataPaper message={t("noDueItems")} minHeight={300} />;
  }
  return (
    <Paper elevation={3} sx={{ p: 2, minHeight: 300 }}>
      <SectionHeader title={t("whats_due")} buttonText={t("all")} mb={1} />

      <GenericList
        items={dueItems}
        renderItem={(item: DueItem, idx, arr) => (
          <GenericCard
            key={item._id}
            showDivider={idx < arr.length - 1}
            listItemProps={{
              sx: { flexDirection: "column", alignItems: "flex-start" },
            }}
          >
            <DueItemCard item={item} />
          </GenericCard>
        )}
      />
    </Paper>
  );
};

export default DueList;
