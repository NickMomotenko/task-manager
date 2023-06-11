export const validateInputs = (inputs: any) => {
  const notValidatedInputs = inputs.filter((input: any) => {
    if (!input.validated) {
      return true;
    }
  });

  if (notValidatedInputs.length) {
    notValidatedInputs[0]?.ref.current.focus();

    return false;
  }

  return true;
};
