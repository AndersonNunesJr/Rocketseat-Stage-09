import { FiPlus } from "react-icons/fi";

import { Container, PlusButton } from "./styles";
import { Section, Header } from "../../components";

export function Home() {
  return (
    <Container>
      <Header />
      <div className="title">
        <h2>Meus Filmes</h2>
        <PlusButton to="/new">
          <FiPlus />
          Adicionar filme
        </PlusButton>
      </div>
      <Section></Section>
    </Container>
  );
}
