import vaestoliitto from './assets/vaestoliitto.png';
import vaestoliittoBP from './assets/vaestoliitto-BP.png';
import vaestoliittoS from './assets/vaestoliitto-S.png';
import vaestoliittoR from './assets/vaestoliitto-R.png';
import LT from './assets/LT.png';
import LTBP from './assets/LT-BP.png';
import LTSR from './assets/LT-SR.png';
import poppankki from './assets/pop.png';
import poppankkiBP from './assets/POP-BP.png';
import poppankkiS from './assets/POP-S.png';
import poppankkiR from './assets/POP-R.png';



const UIUXData = [
  {
    slug: 'increasing-mortgage-uptake',
    img: poppankki,
    title: {
      fi: 'Asuntolaina-asiakkaiden lisääminen',
      en: 'Increasing Mortgage Uptake',
    },
    cols: 1,
    desc: {
      fi: 'Kurssin Societal Design Project -ryhmätyö, jonka asiakkaana toimi POP Pankki. POP Pankki pyysi meitä kurssin aikana selvittämään miten houkutella kasvukeskuksen ihmisiä asuntolaina- asiakkaiksi.Tähän ongelmaan pureuduttiin Lean Service Creation - palvelumuotoiluprosessin avulla.',
      en: 'Our team tackled the challenge of boosting first-time mortgage uptake in growth centers with POP Bank as our client. To tackle this challenge, we employed the Lean Service Creation service design process.',
    },
    carousel: [
      {
        img: poppankki,
      },
      {
        img: poppankkiBP,
      },
      {
        img: poppankkiS,
      },
      {
        img: poppankkiR,
      },
    ],
  },
  {
    slug: 'new-from-old',
    img: LT,
    title: {
      fi: 'Vanhasta uutta',
      en: 'New from old',
    },
    cols: 1,
    desc: {
      fi: 'Kuinka parhaiten auttaa opiskelijoita ja työnhakijoita tunnistamaan oleellisimmat taitonsa ja artikuloimaan ne kesken työnhakuprosessin eri aloilla ja ympäri Suomea? Käyttöliittymäsuunnittelua projektissa, jossa käyttöliittymätarpeita syntyi lisää nopeaa tahtia.',
      en: 'How to best assist students and job seekers in recognizing and articulating their skills while finding specialized job search and workplace services tailored to various industries and regions. UI Design in a project, where service requirements emerged throughout the project.',
    },
    carousel: [
      {
        img: LT,
      },
      {
        img: LTBP,
      },
      {
        img: LTSR,
      },
    ],
  },
  {
    slug: 'growth-hacking',
    img: vaestoliitto,
    title: {
      fi: 'Kasvuhakkerointia',
      en: 'Growth Hacking',
    },
    cols: 1,
    desc: {
      fi: `Toteutimme kasvuhakkeroinnin projektin Väestöliiton blogille kävijämäärän lisäämiseksi ja käyttäjien sitouttamiseksi.Lähestyimme tätä tavoitetta iteratiivisesti monin eri keinoin, kuten haastattelemalla bloggereita, analysoimalla blogin analytiikkaa, tekemällä A / B - testausta ja yhteistyötä sidosryhmien kanssa.Tämä johti merkittävään kasvuun blogin lukijamäärässä, korostaen datavetoisten strategioiden ja iteratiivisten parannusten tehokkuutta.`,
      en: 'A team undertook a growth hacking project for the blog of Väestöliitto to address low visitor engagement despite its valuable content.Implemented a multifaceted approach including research, interviews with bloggers, analytics analysis, A/ B testing, and collaboration with stakeholders to enhance visibility and appeal to a broader audience. This resulted in a significant increase in blog readership, highlighting the effectiveness of data- driven strategies and iterative improvements.',
    },
    carousel: [
      {
        img: vaestoliitto,
      },
      {
        img: vaestoliittoBP,
      },
      {
        img: vaestoliittoS,
      },
      {
        img: vaestoliittoR,
      },
    ],
  },
];

export default UIUXData;
