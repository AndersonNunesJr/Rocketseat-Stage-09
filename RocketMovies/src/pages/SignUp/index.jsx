import { Link } from "react-router-dom";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Container, Background, Form } from "./styles.js";

import { Input, Button } from "../../components";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/">
          <FiArrowLeft />
          Voltar ao login
        </Link>
      </Form>
    </Container>
  );
}
