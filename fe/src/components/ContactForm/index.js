//React
import { useEffect, useState } from "react";

//Components
import FormGroup from "../FormGroup";
import Input from "../Input/input";
import Select from "../Select/Select";
import Button from "../Button";
import { Form, ButtonContainer } from "./styles";

//Services
import CategoriesService from "../../services/CategoriesService";

//Hooks
import useErrors from "../../hooks/useErrors";

//Utils
import isEmailValid from "../../utils/isEmailValid";
import formatPhone from "../../utils/formatPhone";

const ContactForm = ({ buttonLabel, onSubmit }) => {
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
  }, []);

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
    setName("")
    setEmail("")
    setPhone("")

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

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFildName("name")}>
        <Input
          error={getErrorMessageByFildName("name")}
          value={name}
          placeholder="Nome"
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFildName("email")}>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          error={getErrorMessageByFildName("email")}
          onChange={handleEmailChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          maxLength="15"
          placeholder="Telefone"
          onChange={handlePhoneChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup
        error={getErrorMessageByFildName("category")}
        isLoading={isLoadingCategories}
      >
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem Categoria</option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
};
export default ContactForm;
