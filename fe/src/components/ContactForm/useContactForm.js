//React
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";

//Services
import CategoriesService from "../../services/CategoriesService";

//Hooks
import useErrors from "../../hooks/useErrors";
//import useSafeAsyncState from "../../hooks/useSafeAsyncState";

//Utils
import isEmailValid from "../../utils/isEmailValid";
import formatPhone from "../../utils/formatPhone";

const useContactForm = (onSubmit, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setError, removeError, getErrorMessageByFildName, errors } =
    useErrors();

  const isFormValid = name && errors.length === 0 && !hasError;

  useImperativeHandle(
    ref,
    () => {
      return {
        setFieldsValues: (contact) => {
          setName(contact.name);
          setEmail(contact.email ?? "");
          setPhone(formatPhone(contact.phone));
          setCategoryId(contact.category.id ?? "");
        },
        resetFieldValues: () => {
          setName("");
          setEmail("");
          setPhone("");
          setCategoryId("");
        },
      };
    },
    []
  );

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await CategoriesService.listCategories();
        setCategories(categories);
        setHasError(false);
      } catch (error) {
        setHasError(true);
        setError({
          fieldName: "category",
          message: "Ocorreu um erro ao carregar as categorias.",
        });
      } finally {
        setIsLoadingCategories(false);
      }
    };

    loadCategories();
  }, [setCategories, setIsLoadingCategories]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      phone,
      categoryId,
    });

    setIsSubmitting(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ fieldName: "name", message: "Nome é obrigatório" });
    } else {
      removeError("name");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ fieldName: "email", message: "Email inválido!" });
    } else {
      removeError("email");
    }
  };

  const handlePhoneChange = (event) => {
    setPhone(formatPhone(event.target.value));
  };

  return {
    handleSubmit,
    name,
    handleNameChange,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    isLoadingCategories,
    categoryId,
    categories,
    isFormValid,
    isSubmitting,
    getErrorMessageByFildName,
    setCategoryId,
    ref,
    onSubmit,
  };
};

export default useContactForm;
