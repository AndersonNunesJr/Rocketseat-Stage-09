import { Container, Links, Content } from "./styles.js";

import { Header, Button, Section, Tag, ButtonText } from "../../components";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            asperiores fugiat impedit. Dignissimos quia possimus eveniet
            provident unde libero doloribus ullam culpa aut tenetur, sequi ipsum
            rem, molestiae ea repudiandae?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam soluta neque voluptatibus veniam modi velit
            a pariatur et cupiditate alias exercitationem error minus, nam quos
            quaerat, excepturi fugiat voluptatum. Laborum.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#"></a>
              </li>
            </Links>
          </Section>

          <Section title="Links úteis">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="voltar" />
        </Content>
      </main>
    </Container>
  );
}
