import React, { useDeferredValue, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fakeApi } from '../api';

const getDelay = () => Math.floor(Math.random() * 5000) + 1000; // 1초에서 5초 사이의 랜덤 지연

export const DemoPage3 = () => {
  return (
    <>
      <Typography variant="h2">Comparing useDeferredValue</Typography>
      <DataComponentWithoutDeferred />
      <DataComponentWithDeferred />
    </>
  );
};

const DataComponentWithoutDeferred = () => {
  const [todo, setTodo] = useState('');

  const { data, refetch } = useSuspenseQuery({
    queryKey: ['test'],
    queryFn: () => fakeApi(getDelay()),
  });

  useEffect(() => {
    if (data) {
      setTodo(data.title);
    }
  }, [data]);

  return (
    <Box sx={{ padding: '20px', border: '1px solid black', marginBottom: '20px' }}>
      <Button onClick={() => refetch()}>Refetch</Button>
      <Typography variant="h4">Without Deferred: {todo}</Typography>
    </Box>
  );
};

const DataComponentWithDeferred = () => {
  const [todo, setTodo] = useState('');
  const deferredTodo = useDeferredValue(todo, { timeoutMs: 2000 });

  const { data, refetch } = useSuspenseQuery({
    queryKey: ['test'],
    queryFn: () => fakeApi(getDelay()),
  });

  useEffect(() => {
    if (data) {
      setTodo(data.title);
    }
  }, [data]);

  return (
    <Box sx={{ padding: '20px', border: '1px solid black', marginBottom: '20px' }}>
      <Button onClick={() => refetch()}>Refetch</Button>
      <Typography variant="h4">With Deferred: {deferredTodo}</Typography>
    </Box>
  );
};
