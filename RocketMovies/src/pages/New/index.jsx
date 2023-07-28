import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Header, Section, Input, Textarea } from "../../components";
import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <Link to="/" className="nav">
        <FiArrowLeft />
        Voltar
      </Link>
      <Section>
        <Form>
          <h2>Novo Filme</h2>
          <div className="appointment">
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          </div>
          <Textarea placeholder="Observações" />
        </Form>
      </Section>
    </Container>
  );
}
