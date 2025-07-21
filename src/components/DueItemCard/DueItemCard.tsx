import { Box, Button, Divider, ListItem, Typography } from "@mui/material";

const DueItemCard = ({
  dueItemsLength,
  item,
  idx,
}: {
  dueItemsLength: number;
  item: any;
  idx: number;
}) => {
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
          Course: {item.course}
        </Typography>
        {item.details && (
          <Typography variant="body2" color="textSecondary">
            {item.details}
          </Typography>
        )}
        <Typography variant="caption" color="textSecondary">
          Due: {item.due}
        </Typography>
        <Box mt={1}>
          <Button variant="outlined" size="small">
            {item.action}
          </Button>
        </Box>
      </ListItem>
      {idx < dueItemsLength - 1 && <Divider component="li" />}
    </>
  );
};

export default DueItemCard;
