import * as Styled from "./styled";

interface SectionTitleProps {
  text: string;
}

export function SectionTitle({ text }: SectionTitleProps) {
  return <Styled.Title>{text}</Styled.Title>;
}
