import { useState } from "react";

const useErrors = () => {
  const [errors, setErrors] = useState([]);

  const setError = ({ fieldName, message }) => {
    const errorAlreadyExists = errors.find((error) => error.fieldName === fieldName);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [...prevState, { fieldName, message }]);
  };

  const removeError = (fieldName) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.fieldName !== fieldName)
    );
  };

  const getErrorMessageByFildName = (fieldName) => {
    return errors.find((error) => error.fieldName === fieldName)?.message;
  };

  return {
    setError, removeError, getErrorMessageByFildName, errors
  }
};

export default useErrors;