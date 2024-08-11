export const getExecutionTime = (startTime: number): string => {
  const endTime = performance.now();
  return (endTime - startTime).toFixed(3)
};
