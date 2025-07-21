import { Box, Button, Divider, ListItem, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const DueItemCard = ({
  dueItemsLength,
  item,
  idx,
}: {
  dueItemsLength: number;
  item: any;
  idx: number;
}) => {
  const { t } = useTranslation();
  return (
    <>
      <ListItem
        alignItems="flex-start"
        key={item.type + idx}
        sx={{ flexDirection: "column", alignItems: "flex-start" }}
      >
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
      </ListItem>
      {idx < dueItemsLength - 1 && <Divider component="li" />}
    </>
  );
};

export default DueItemCard;
