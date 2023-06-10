export const validateInputs = (inputs: any) => {
  const notValidatedInputs = inputs.filter((input: any) => !input.value);

  if (notValidatedInputs.length) {
    notValidatedInputs[0]?.ref.current.focus();

    return false;
  }

  return true;
};
