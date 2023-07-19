import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion } from "framer-motion";

import {
  AboutMeSection,
  AboutMeSectionContent,
  AboutMeSectionText,
  AboutMeCards,
  UserImage,
} from "./style";

import { useRef } from "react";
import { userData } from "@/utils/userData";

export const AboutMe = () => {
  const ref = useRef(null);

  return (
    <AboutMeSection id="about-me">
      <Container>
        <AboutMeSectionContent ref={ref}>
          <motion.div>
            <AboutMeSectionText>
              <Text as="h1" type="heading1" color="grey4">
                About Me
              </Text>
              <Text as="p" type="body1" color="grey2">
              Olá! Meu nome é Samuel Portela e sou um desenvolvedor web fullstack apaixonado por criar soluções digitais inovadoras. Com uma formação em direito, decidi seguir minha paixão pela tecnologia e fazer uma transição para a área de desenvolvimento.
                <br/>
                <br/>
                Durante meus estudos em direito, sempre fui fascinado pelo poder da tecnologia em transformar a maneira como vivemos e trabalhamos. Essa paixão me levou a mergulhar no mundo da programação e descobrir meu amor pela criação de aplicativos e sites. Decidi então investir em minha carreira como desenvolvedor web fullstack, adquirindo habilidades em diversas tecnologias e linguagens de programação.
                <br/>
                <br/>
                Minha experiência em direito me proporcionou uma sólida base em análise crítica, resolução de problemas e habilidades de comunicação. Essas habilidades têm sido inestimáveis na minha jornada como desenvolvedor, permitindo-me compreender as necessidades dos clientes e criar soluções que atendam às suas demandas.
              </Text>
            </AboutMeSectionText>
          </motion.div>
          <AboutMeCards>
          <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt='Foto do perfil'
            width={"500px"}
            height={"500px"}
          />
        </Flex>
          </AboutMeCards>
        </AboutMeSectionContent>
      </Container>
    </AboutMeSection>
  );
};
