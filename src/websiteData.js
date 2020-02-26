// import portfolio from './assets/Tuotekuva-Asetelma-154-min.jpg';
import wsd from './assets/Nettisivut2.png';
import vjp from './assets/Nettisivut3.png';
import roskApp from './assets/Nettisivut.png';
import sarjanumero from './assets/Nettisivut4.png';
import portfolio from './assets/Nettisivut5.png';
import japan from './assets/Nettisivut6.png';

const websiteData = [
    {
        img: portfolio,
        title: {
            fi: 'Portfolio',
            en: 'Portfolio'
        },
        cols: 1,
        desc: {
            fi: 'Portfolio, jonka olen suunnitellut ja koodannut alusta loppuun pienenä projektina. Suunnitelmat ja lopputulos eivät menneet aivan yksi yhteen - portfoliota tehdessä monet tekniset haasteet saivat miettimään uudestaan joitan valintoja. Uskallan kuitenkin sanoa, että hyvä niin.',
            en: "This portfolio is designed and coded by me. Due to some technical difficulties, I changed the design on the way, but I learned a lot because of it and in the end it turned out to be nicer UX than in the original design. "
        },
    },
    {
        img: roskApp,
        title: {
            fi: 'RoskApp',
            en: 'RoskApp'
        },
        cols: 1,
        desc: {
            fi: "Suunnittelimme applikaation roskakorien yhteyteen kiinnitettävälle vaa'alle, joka punnitsee talouden jätteen määrän. Applikaatio on suunniteltu mobiiliin, ja sen tärkeimpinä ominaisuuksina on nähdä senhetkinen roskan määrä sekä dataa omasta jätteen määrästä.",
            en: "We designed an application for a garbage scale, that's attached to the bottom of a garbage bin. The application is designed for mobile. "
        },
    },
    {
        img: japan,
        title: {
            fi: 'A Survival Guide To Japan',
            en: 'A Survival Guide To Japan'
        },
        cols: 1,
        desc: {
            fi: "Kouluprojektina tekemiini julisteeseen ja esitteeseen pohjautuvat nettisivut, joihin tein designin omana pienenä projektina. Pidin käteni jäljestä esitteessä, ja mietin, miltä näyttäisi mobiilissa nettisivut, joille esitteestä ohjattaisiin. Aloitin suunnittelun matkakohteista, ja jatkoin siitä paikallisen kulttuurin esittelyyn. Vaikka sivujen tekeminen lähtikin täysin visuaalisen ilmeen suunnittelusta ja sillä leikittelystä, hyppäsi myös UX mukaan kuvaan nopeasti. Seuraavaksi vuorossa desktopin suunnittelu!",
            en: 'I designed a mobile page on top of my school prpject during my freetime.'
        },
    },
    {
        img: vjp,
        title: {
            fi: 'Maalämpö',
            en: 'Geothermal'
        },
        cols: 1,
        desc: {
            fi: 'Ensikosketukseni nettisivujen tekemiseen. Sivut toteutettiin pareittain. Tehtävänä oli tehdä maalämpöaiheinen kampanja, tietyillä teknisyysvaatimuksilla. Taaksepäin katsoessa sivuista löytyy paljon parannettavaa: tekstiä ja värejä voisi vähentää, ulkoasua selkeyttää ja "ai tälläistäkin voi tehdä" - ahaa-elämykset jättää sivujen ulkopuolelle.',
            en: 'My first touch in creating web pages. In pairs of two, we created a website with certain quality requirements. In order to learn some programming, everything was made using pure JS, HTML and CSS. Nowadays I would do many things differently: clearer layout, less text and leave out all the "fancy" effects. '
        },
    },
    {
        img: sarjanumero,
        title: {
            fi: 'Sarjanumero.fi',
            en: 'MySerialnumber.net'
        },
        cols: 1,
        desc: {
            fi: "Suunnittelin Ultra Softwarelle Sarjanumero.fi-nettisivujen UI:tä ja UX:ää. Toteutin prototyypin sivuista Adobe XD:llä ja Marvel Appillä.",
            en: 'I designed UI and UX for myserialnumber.net. The prototype was made by using Adobe XD and Marvel App.'
        },
    },
    {
        img: wsd,
        title: {
            fi: 'The Gameservice',
            en: 'The Gameservice'
        },
        cols: 1,
        desc: {
            fi: 'Kurssilla Web Software Development luotu nettisivusto, jossa focus oli backendissä. Design ja mobiilioptimointi olivat kuitenkin pieni osa työtä, joten käytin hiukan aikaa sivun visuaaliseen ilmeeseen ja käytettävyyteen. Tehtävä oli opettavainen, sillä visuaaliseen ilmeeseen oli varattu suhteessa vähän aikaa, ja se rakennettiin täysin valmiin koodin päälle. ',
            en: 'This webpage was created in a project course Web Software Development. The main focus in the project was in backend, but I decided to also spend a while to make a better design  and optimize the service to mobile. The exercise was very educational, since the design was built on top of existing code with a tight schedule.'
        },
    },
];

export default websiteData;
