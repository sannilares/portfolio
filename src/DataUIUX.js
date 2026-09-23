import vaestoliitto from './assets/vaestoliitto.png';
import vaestoliittoBP from './assets/vaestoliitto-BP.png';
import vaestoliittoS from './assets/vaestoliitto-S.png';
import vaestoliittoR from './assets/vaestoliitto-R.png';
import LT from './assets/LT.png';
import LTBP from './assets/LT-BP.png';
import LTSR from './assets/LT-SR.png';
import poppankki from './assets/pop.png';



const UIUXData = [
  {
    slug: 'increasing-mortgage-uptake',
    img: poppankki,
    title: {
      fi: 'Asuntolaina-asiakkaiden lisääminen',
      en: 'Rethinking the Mortgage Journey',
    },
    cols: 1,
    desc: {
      fi: 'Kurssin Societal Design Project -ryhmätyö, jonka asiakkaana toimi POP Pankki. POP Pankki pyysi meitä kurssin aikana selvittämään miten houkutella kasvukeskuksen ihmisiä asuntolaina- asiakkaiksi.Tähän ongelmaan pureuduttiin Lean Service Creation - palvelumuotoiluprosessin avulla.',
      en: `How might a bank attract more first-time home buyers in growing urban areas while balancing digital self-service with personal guidance?

Together with POP Pankki, our team explored how the mortgage journey could better support first-time buyers. The existing POP Lainalupaus service already made applying for a mortgage faster and more digital, but the challenge was to understand where personal service could make the biggest difference.

Using the Lean Service Creation process, we explored the needs, motivations and emotions of first-time home buyers and mapped their journey through the different stages of buying a home. We looked at how people choose their bank, when they need support, and where digital self-service works — and where a human connection still matters.

The project resulted in customer profiles and a service journey that helped identify opportunities for combining digital convenience with more targeted personal support.`,
    },
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
