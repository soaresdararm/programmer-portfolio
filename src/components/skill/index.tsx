import * as Styled from "./styled";
import Image from "next/image";

interface SkillProps {
  image: any;
  years: string;
  measure: number;
}

export const Skill: React.FC<SkillProps> = ({ image, years, measure }) => {
  return (
    <Styled.SkillWrapper>
      <Image src={image} alt="Skill Logo" width={40} height={40} priority />
      <div className="experience-unit">
        <div className={`experience-measure measure-${measure}`}>
          <span>{years}</span>
        </div>
      </div>
    </Styled.SkillWrapper>
  );
};
