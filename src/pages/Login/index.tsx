import { BackgroundContainer, Button, Container, RightContainer } from './styles'
import Background from '../../assets/images/banner-bg.jpg'
import { FaTwitter } from 'react-icons/fa'
import Modal from '../../components/Modal'

const Login: React.FC = () => {
  return (
    <Container>
      <Modal>
        <h1>Faça login aqui:</h1>
        <button>Faça login</button>
      </Modal>
      <BackgroundContainer>
        <img src={Background} alt="Banner login" />
      </BackgroundContainer>
      <RightContainer>
        <FaTwitter color="#d9d9d9" size={40}/>
        <h1>Acontecendo agora</h1>
        <h2>Inscreva-se no Twitter hoje mesmo.</h2>
        <Button>Inscreva-se com e-mail</Button>
        <p>Já tem uma conta? <span>Entre aqui</span></p>
      </RightContainer>
    </Container>
  )
}

export default Login