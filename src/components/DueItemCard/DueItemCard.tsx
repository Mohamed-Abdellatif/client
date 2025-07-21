import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { DueItem } from '../../types';

const DueItemCard = ({ item }: { item: DueItem }) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="subtitle1" fontWeight="bold">
        {item.type}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {t("course")} {item.course}
      </Typography>
      {item.details && (
        <Typography variant="body2" color="textSecondary">
          {item.details}
        </Typography>
      )}
      <Typography variant="caption" color="textSecondary">
        {t("due")} {item.due}
      </Typography>
      <Box mt={1}>
        <Button variant="outlined" size="small">
          {t(item.action === "Start Quiz" ? "start_quiz" : "solve_assignment")}
        </Button>
      </Box>
    </>
  );
};

export default DueItemCard;
