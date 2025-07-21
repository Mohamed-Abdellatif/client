import { ListItem, Divider } from '@mui/material';
import React from 'react';

interface GenericCardProps {
  children: React.ReactNode;
  showDivider?: boolean;
  dividerProps?: React.ComponentProps<typeof Divider>;
  listItemProps?: React.ComponentProps<typeof ListItem>;
}

const GenericCard: React.FC<GenericCardProps> = ({
  children,
  showDivider = false,
  dividerProps,
  listItemProps,
}) => (
  <>
    <ListItem alignItems="flex-start" {...listItemProps}>
      {children}
    </ListItem>
    {showDivider && <Divider data-testid="divider" {...dividerProps} />}
  </>
);

export default GenericCard; 