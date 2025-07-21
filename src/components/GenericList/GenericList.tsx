import { List } from '@mui/material';
import React from 'react';

interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T, idx: number, items: T[]) => React.ReactNode;
}

// Arrow function with explicit type annotation
const GenericList = <T,>({ items, renderItem }: GenericListProps<T>) => (
  <List>
    {items.map((item, idx) => renderItem(item, idx, items))}
  </List>
);

export default GenericList; 