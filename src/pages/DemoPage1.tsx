import { Box, Typography } from '@mui/material';
import { Suspense, useEffect, useRef, useState } from 'react';
import { fakeApi } from '../api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const DemoPage1 = () => {
  const startTimeRef = useRef(new Date());

  return (
    <>
      <Suspense fallback={<Typography variant="h1">LOADING</Typography>}>
        <DataWrapper1 startTime={startTimeRef.current} />
        <DataWrapper2 startTime={startTimeRef.current} />
      </Suspense>
    </>
  );
};

const DataWrapper1 = ({ startTime }: { startTime: Date }) => {
  const [takenTime, setTakenTime] = useState<string>();
  useEffect(() => {
    const calculateElapsedTime = () => {
      const start = startTime;
      const end = new Date();
      const elapsed = end - start;
      return (elapsed / 1000).toFixed(2);
    };

    const totalTime = calculateElapsedTime();

    setTakenTime(totalTime);
  }, [startTime]);

  return (
    <>
      <Typography variant="h2">Total Time : {takenTime}초</Typography>
      <DataComponent1 />
      <DataComponent2 />
    </>
  );
};

const DataWrapper2 = ({ startTime }: { startTime: Date }) => {
  const [takenTime, setTakenTime] = useState<string>();
  useEffect(() => {
    const calculateElapsedTime = () => {
      const start = startTime;
      const end = new Date();
      const elapsed = end - start;
      return (elapsed / 1000).toFixed(2);
    };

    const totalTime = calculateElapsedTime();

    setTakenTime(totalTime);
  }, [startTime]);

  return (
    <Box sx={{ marginTop: '100px' }}>
      <Typography variant="h2">Total Time : {takenTime}초</Typography>
      <DataComponent3 />
      <DataComponent4 />
    </Box>
  );
};
const DataComponent1 = () => {
  const delay = 3000;

  const { data } = useSuspenseQuery({
    queryKey: ['test1'],
    queryFn: () => fakeApi(delay),
  });

  return (
    <Box sx={{ padding: '20px', border: '1px solid black' }}>
      <Typography variant="h4">Component1</Typography>
      <Typography variant="h5">Time Taken : {delay / 1000}초</Typography>
    </Box>
  );
};

const DataComponent2 = () => {
  const delay = 5000;

  const { data } = useSuspenseQuery({
    queryKey: ['test2'],
    queryFn: () => fakeApi(delay),
  });

  return (
    <Box sx={{ padding: '20px', border: '1px solid black' }}>
      <Typography variant="h4">Component2</Typography>
      <Typography variant="h5" color="red">
        Time Taken : {delay / 1000}초
      </Typography>
    </Box>
  );
};

const DataComponent3 = () => {
  const delay = 10000;

  const { data } = useSuspenseQuery({
    queryKey: ['test3'],
    queryFn: () => fakeApi(delay),
  });

  return (
    <Box sx={{ padding: '20px', border: '1px solid black' }}>
      <Typography variant="h4">Component3</Typography>
      <Typography variant="h5" color="red">
        Time Taken : {delay / 1000}초
      </Typography>
    </Box>
  );
};

const DataComponent4 = () => {
  const delay = 3000;

  const { data } = useSuspenseQuery({
    queryKey: ['test4'],
    queryFn: () => fakeApi(delay),
  });

  return (
    <Box sx={{ padding: '20px', border: '1px solid black' }}>
      <Typography variant="h4">Component4</Typography>
      <Typography variant="h5">Time Taken : {delay / 1000}초</Typography>
    </Box>
  );
};
