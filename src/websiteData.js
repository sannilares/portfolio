import portfolio from './assets/Tuotekuva-Asetelma-154-min.jpg';
import wsd from './assets/Nettisivut2.png';
import vjp from './assets/Nettisivut3.png';
import roskApp from './assets/Nettisivut.png';
import sarjanumero from './assets/Nettisivut4.png';

const websiteData = [
    // {
    //     img: portfolio,
    //     title: {
    //         fi: 'Portfolio',
    //         en: 'Portfolio'
    //     },
    //     cols: 1,
    //     desc: 'Portfolio, jonka olen suunnitellut ja koodannut alusta loppuun pienenä projektina. Suunnitelmat ja lopputulos eivät menneet aivan yksi yhteen, portfoliota tehdessä monet tekniset haasteet saivat miettimään uudestaan joitan valintoja ja uskallan sanoa, että hyvä niin.',
    // },
    {
        img: wsd,
        title: {
            fi: 'The Gameservice',
            en: 'The Gameservice'
        },
        cols: 1,
        desc: 'Kurssilla Web Software Development luotu nettisivusto, jossa focus oli backendissä. Kuitenkin design ja mobiilioptimointi olivat pieni osa työtä, joten käytin hiukan aikaa sivun visuaaliseen ilmeeseen ja käytettävyyteen. Tehtävä oli opettavainen, sillä visuaaliseen ilmeeseen oli varattu suhteessa vähän aikaa, ja se rakennettiin täysin valmiin koodin päälle. ',
    },
    {
        img: vjp,
        title: {
            fi: 'Maalämpö',
            en: 'Geothermal'
        },
        cols: 1,
        desc: 'Ensikosketukseni nettisivujen tekemiseen. Sivut toteutettiin pareittain. Tehtävänä oli tehdä maalämpöaiheinen kampanja, tietyillä teknisyysvaatimuksilla. Taaksepäin katsoessa sivuista löytyy paljon parannettavaa: tekstiä ja värejä voisi vähentää, ulkoasua selkeyttää ja "Wau, näin voi tehdä!" - ahaa elämykset jättää sivujen ulkopuolelle.',
    },
    {
        img: roskApp,
        title: {
            fi: 'RoskApp',
            en: 'RoskApp'
        },
        cols: 1,
        desc: "Suunnittelimme applikaation roskakorien yhteyteen kiinnitettävälle vaa'alle, joka punnitsee talouden jätteen määrän. Applicaatio on suunniteltu mobiiliin, ja sen tärkeimpinä ominaisuuksina on nähdä senhetkinen roskan määrä sekä dataa omasta jätteen määrästä.",
    },
    {
        img: sarjanumero,
        title: {
            fi: 'Sarjanumero.fi',
            en: 'MySerialnumber.net'
        },
        cols: 1,
        desc: "Suunnittelin Ultra SoftwareSuunnittelin Ultra Softwarella Sarjanumero.fi nettisivujen UI:tä ja UX:ää muutama vuosi sitten.  Toteutin prototyypin sivuista Adobe XDllä ja Marvel Appillä.",
    }
];

export default websiteData;
