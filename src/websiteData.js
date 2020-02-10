import portfolio from './assets/Tuotekuva-Asetelma-154-min.jpg';
import wsd from './assets/muoti-min.JPG';
import vjp from './assets/Ryhmäkuva_2019-min.jpg';
import roskApp from './assets/kamera-min.JPG';

const websiteData = [
    {
        img: portfolio,
        title: {
            fi: 'Portfolio',
            en: 'Portfolio'
        },
        cols: 3,
        desc: 'Portfolio, jonka olen suunnitellut ja koodannut alusta loppuun pienenä projektina.',
    },
    {
        img: wsd,
        title: {
            fi: 'The Gameservice',
            en: 'The Gameservice'
        },
        cols: 3,
        desc: 'Kurssilla Web Software Development luotu nettisivusto, jossa focus oli backendissä. Kuitenkin design ja mobiilioptimointi olivat pieni osa työtä, joten käytin hiukan aikaa sivun visuaaliseen ilmeeseen ja käytettävyyteen. Tehtävä oli opettavainen, sillä visuaaliseen ilmeeseen oli varattu suhteessa vähän aikaa, ja se rakennettiin täysin valmiin koodin päälle. ',
    },
    {
        img: vjp,
        title: {
            fi: 'Maalämpö',
            en: 'Geothermal'
        },
        cols: 1,
        desc: 'Ensikosketukseni nettisivujen tekemiseen. Sivut toteutettiin pareittain. Tehtävänä oli tehdä maalämpöaiheinen kampanja, tietyillä teknisyysvaatimuksilla. Taaksepäin katsoessa sivuista löytyy paljon parannettavaa: tekstiä ja värejä voisi vähentää, ulkoasua selkeyttää ja "ai tälläistäkin voi tehdä" - ahaa elämykset jättää sivujen ulkopuolelle.',
    },
    {
        img: roskApp,
        title: {
            fi: 'RoskApp',
            en: 'RoskApp'
        },
        cols: 2,
        desc: "Suunnittelimme applikaation roskakorien yhteyteen kiinnitettävälle vaa'alle, joka punnitsee talouden jätteen määrän.Applicaatio on suunniteltu mobiiliin, ja sen tärkeimpinä ominaisuuksina on nähdä senhetkinen roskan määrä sekä dataa omasta jätteen määrästä.",
    }
];

export default websiteData;
