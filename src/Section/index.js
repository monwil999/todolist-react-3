import { Title, StyledSection } from "./styled";

const Section = ({ title, body, extraHeaderContent, toggleHideDone }) => (
    <StyledSection header={toggleHideDone}>
        <header className="section__header">
            <Title>
                {title}
            </Title>
            {extraHeaderContent}
        </header>
        <div className="section__body">
            {body}
        </div>
    </StyledSection>
);

export default Section;
