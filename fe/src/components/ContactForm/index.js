//React
import { forwardRef } from "react";

//Components
import FormGroup from "../FormGroup";
import Input from "../Input/input";
import Select from "../Select/Select";
import Button from "../Button";
import { Form, ButtonContainer } from "./styles";

import useContactForm from "./useContactForm";

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
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

  } = useContactForm(onSubmit,ref);
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
});

export default ContactForm;
