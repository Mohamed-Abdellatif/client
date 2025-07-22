import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { DueItem } from "../../types";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./DueItemCard.scss";

const DueItemCard = ({ item }: { item: DueItem }) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Title with Icon */}
      <Box className="due-item-card-title">
        <AssignmentIcon className="due-item-card-assignment-icon" />
        <Typography variant="subtitle1" fontWeight="bold">
          {item.type}
        </Typography>
      </Box>

      {/* Course */}
      <Typography variant="body2" color="textSecondary">
        {t("course")} {item.course}
      </Typography>

      {/* Details (if any) */}
      {item.details && (
        <Typography variant="body2" color="textSecondary">
          {t("topic")} {item.details}
        </Typography>
      )}

      {/* Due Date */}
      <Typography variant="caption" color="textSecondary">
        {t("due")} {item.due}
      </Typography>

      {/* Button */}
      <Box mt={1} className="due-item-card-button-container">
        <Button
          variant="outlined"
          className="due-item-card-button"
          size="small"
          fullWidth
        >
          <Typography fontSize={13} fontWeight={600}>
            {" "}
            {t(
              item.action === "Start Quiz" ? "start_quiz" : "solve_assignment"
            )}
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default DueItemCard;
