import { Link } from "react-router-dom";
import {
  Header,
  Input,
  Textarea,
  Noteitem,
  Section,
  Button,
} from "../../components";
import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <Noteitem value="https://rocketseat.com.br" />
            <Noteitem isNew placeholder="Novo link" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <Noteitem value="react" />
              <Noteitem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
