import { Sectionstyle, Layout, Header, Body } from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
  <Sectionstyle>
    <Layout>
      <Header>{title}</Header>
      {extraHeaderContent}
    </Layout>
    <Body>
      {body}
    </Body>
  </Sectionstyle>
);

export default Section;
