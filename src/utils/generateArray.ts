export const generateArray = (length = 1, min = 1, max = 100): number[] =>
  Array.from({ length }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
