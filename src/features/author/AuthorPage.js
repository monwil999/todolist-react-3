import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Monika Wilk"
      body={
        <p>
          Moją pasją jest <strong>tenis</strong>. Od 19 lat gram w tenisa, a
          także z pasją śledzę występy najlepszych tenisistów na świecie. Moim
          celem jest zobaczyć na żywo mecze na wszystkich czterech turniejach
          Wielkiego Szlema:
          <em> Australian Open, Roland Garros, Wimbledon oraz US Open.</em> 🎾
        </p>
      }
    />
  </Container>
);
