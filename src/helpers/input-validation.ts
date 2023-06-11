export const checkLength = (value: string = "", length: number = 4) => {
  let isCorrect = false;

  const errorText = `value length should be more than ${length}`;

  if (value.length <= length) {
    isCorrect = false;
  } else isCorrect = true;

  return { isCorrect, errorText };
};
