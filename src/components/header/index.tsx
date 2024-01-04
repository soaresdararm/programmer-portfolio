import Image from "next/image";
import me from "../../../utils/img/dara.jpeg";
import * as Styled from "./styled";

export function Header() {
  return (
    <Styled.HeaderWrapper>
      <div>
        <h1>Hi, I'm Dara Soares! 👋</h1>
        <h2>Software Engineer</h2>
      </div>

      <Image src={me} alt="Vercel Logo" width={325} height={310} priority />
    </Styled.HeaderWrapper>
  );
}
