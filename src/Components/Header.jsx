// import logo from "../assets/logo.png";
// import "./Header.css";
import { styled } from "styled-components";

const StyledHeader = styled.header``;

export default function Header() {
  return (
    <header>
      <img
        src="https://cdn.pixabay.com/photo/2023/10/28/18/02/songbird-8348139_1280.png"
        alt="A canvas"
      />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
