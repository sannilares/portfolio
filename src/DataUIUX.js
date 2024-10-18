import vaestoliitto from './assets/vaestoliitto.png';
import vaestoliittoBP from './assets/vaestoliitto-BP.png';
import vaestoliittoS from './assets/vaestoliitto-S.png';
import vaestoliittoR from './assets/vaestoliitto-R.png';
import LT from './assets/LT.png';
import LTBP from './assets/LT-BP.png';
import LTSR from './assets/LT-SR.png';
import peukku from './assets/peukku.png';
import portfolio from './assets/portfolio.png';
import portfolioBP from './assets/portfolio-BP.png';
import portfolioS from './assets/portfolio-S.png';
import poppankki from './assets/pop.png';
import poppankkiBP from './assets/POP-BP.png';
import poppankkiS from './assets/POP-S.png';
import poppankkiR from './assets/POP-R.png';



const UIUXData = [
  {
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
    img: peukku,
    title: {
      fi: 'Sovelluksen luominen',
      en: 'App creation',
    },
    cols: 1,
    desc: {
      fi: `Kimppakyytisovelluksen käyttöliittymän luominen ideoinnista toteutukseen.Tiimimme suunnitteli ja määritteli projektin vaatimukset alusta alkaen.Fasilitoin alustavaa käyttäjätestausta ja haastatteluja designvalintojen tekemiseksi.Figman avulla laadin rautalankamallin, visut ja sovelluksen prototyypin.`,
      en: 'As the lead designer, I drawed a ride-sharing app interface. Starting from scratch, our team planned and defined project requirements and conducted benchmarking analysis. I facilitated initial user testing and interviews to inform design decisions. Leveraging Figma, I crafted wireframes, prototypes, and visual designs.',
    },
  },
  {
    img: portfolio,
    title: {
      fi: 'Portfolio',
      en: 'Portfolio',
    },
    cols: 1,
    desc: {
      fi: `Miten optimoida portfolio ja tietää, mitä mahdollinen työnantaja haluaa nähdä? Tätä lähdin selvittämää A/ B - testeillä ja Google Analyticsin avulla.Ensimmäisen valmiin version saatuani alkutalvesta 2021 hain kymmeniä ja kymmeniä työpaikkoja ja selvitin, mitä mahdollinen työnantajani oli portfoliostani katsonut.Muokkasin niin toiminnallisuuksia kuin sisältöä tämän perusteella - olen itse niin suunnitellut kuin koodannut tämän portfolion.Auta toki sinäkin, ja kerro, jos jokin ei mielestäsi toimi.`,
      en: 'How to optimize a portfolio and know what a potential employer wants to see? I set out to explore this through A/ B testing and Google Analytics.After completing the initial version in early winter 2021, I applied to dozens of jobs and analyzed what potential employers had viewed in my portfolio.Based on this feedback, I made adjustments to both functionality and content - I have both designed and programmed this portfolio. Feel free to share your thoughts if something does not seem to work.',
    },
    carousel: [
      {
        img: portfolio,
      },
      {
        img: portfolioBP,
      },
      {
        img: portfolioS,
      },
    ],
  },
  {
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
