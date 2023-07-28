import { Link } from "react-router-dom";

import { Container, Profile } from "./styles";
import { Input } from "../../components";

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>

      <Input placeholder="Pesquisar pelo título" type="text" />

      <Profile to="/profile">
        <div>
          <strong>Anderson Nunes</strong>
          <Link to="#">Sair</Link>
        </div>
        <img
          src="https://github.com/AndersonNunesJr.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  );
}
