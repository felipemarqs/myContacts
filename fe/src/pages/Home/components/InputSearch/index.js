import { Container } from "./styles"

const InputSearch = ({value, onChange}) => {
 return (
        <Container>
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Pesquisar contato..."
          />
        </Container>
 )
}

export default InputSearch