import { Link } from 'react-router-dom'

//Styled Components
import { Container } from './styles'

//Icons
import arrow from '../../assets/icons/arrow.svg'

const PageHeader = ({ title, subtitle }) => {
    return (
        <>
            <Container>
                <Link to="/">
                    <img src={arrow} alt="Back" />
                    <span>Voltar</span>
                </Link>
                <h1>{title}</h1>
            </Container>
        </>
    )
}

export default PageHeader;