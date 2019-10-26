import React from "react";
import {
  GlobalStyle,
  Link,
  Name,
  Layout,
  Subtitle,
  Line,
  LinksContainer,
  BrandsContainer,
  Satelite,
  BackgroundLayout,
  Star,
  BackgroundShadow
} from "./App.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faEllipsisH,
  faSatellite,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faReact,
  faGitAlt,
  faSass,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faJira,
  faNodeJs,
  faNpm
} from "@fortawesome/free-brands-svg-icons";
import Brand from "./brand/Brand";
import { useMediaQuery } from "react-responsive";

const randomLocalization = () => ({
  top: Math.floor(Math.random() * 100),
  left: Math.floor(Math.random() * 100),
  rotation: Math.floor(Math.random() * Math.floor(360)),
  scale: Math.floor(Math.random() * Math.floor(32 - 12) + 12),
  opacity: Math.random()
});

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <Layout>
      <BackgroundLayout>
        {Array.from({ length: isMobile ? 15 : 30 }, (_, k) => k + 1).map(
          index => (
            <Star {...randomLocalization()} key={index}>
              <FontAwesomeIcon icon={faStar} />
            </Star>
          )
        )}
      </BackgroundLayout>
      <BackgroundShadow />
      <GlobalStyle />
      <Satelite>
        <FontAwesomeIcon icon={faSatellite} />
      </Satelite>
      <Name>Arthur Baron</Name>
      <Line />
      <Subtitle>Développeur web front-end</Subtitle>
      <LinksContainer>
        <Link
          href="https://www.linkedin.com/in/arthur-baron-2a8624106/"
          target="_blank"
          rel="noopener noreferrer"
          animate={true}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link
          href="mailto:cefjic.arthur@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </Link>
      </LinksContainer>
      <BrandsContainer>
        <Brand icon={faHtml5} title={["HTML"]} />
        <Brand icon={faCss3Alt} title={["CSS"]} />
        <Brand icon={faJsSquare} title={["Javascript"]} />
        <Brand icon={faReact} title={["React"]} />
        <Brand icon={faNodeJs} title={["NodeJs"]} />
        <Brand icon={faSass} title={["Sass"]} />
        <Brand icon={faGitAlt} title={["Git"]} />
        <Brand icon={faJira} title={["Jira"]} />
        <Brand icon={faNpm} title={["npm"]} />
        <Brand
          icon={faEllipsisH}
          title={[
            "TypeScript",
            "Google Cloud Services",
            "Firebase",
            "Confluence",
            "Java"
          ]}
          more={true}
        />
      </BrandsContainer>
    </Layout>
  );
}

export default App;
