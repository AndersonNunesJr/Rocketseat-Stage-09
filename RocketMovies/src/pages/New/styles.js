import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 100px 60px auto;
  grid-template-areas:
    "header"
    "nav"
    "section";

  .nav {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 0 0 100px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  .appointment {
    display: flex;
    gap: 30px;
    margin: 25px 0;
  }
`;

export const Form = styled.div``;
