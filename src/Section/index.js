import { Title, StyledSection } from "./styled";

const Section = ({ title, bodyContent, extraHeaderContent, toggleHideDone }) => (
    <StyledSection>
        <Title>
            {title}
        </Title>
        {extraHeaderContent}
        <div>
            {bodyContent}
        </div>
    </StyledSection>
);

export default Section;
