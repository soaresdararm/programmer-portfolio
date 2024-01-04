import { SectionTitle } from "../sectionTitle";
import { Skill } from "../skill";
import react from "../../../utils/img/react.png";
import ts from "../../../utils/img/ts.png";
import js from "../../../utils/img/js.png";

import * as Styled from "./styled";

export function Experience() {
  return (
    <Styled.ExperienceWrapper>
      <SectionTitle text="Sobre" />
      <p>
        Bem-vindo ao meu repositório de portfólio! Aqui você encontrará uma
        coleção de projetos e trabalhos que demonstrem minha paixão e
        habilidades como programadora front-end, com especialização em React.
      </p>
      <div className="experience-time">
        <Skill image={react} measure={1} years="2 years" />
        <Skill image={ts} measure={2} years="3 years" />
        <Skill image={js} measure={2} years="3 years" />
      </div>
    </Styled.ExperienceWrapper>
  );
}
