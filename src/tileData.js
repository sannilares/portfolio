import image1 from './assets/Tuotekuva-Asetelma-154-min.jpg';
import image2 from './assets/muoti-min.JPG';
import image3 from './assets/Ryhmäkuva_2019-min.jpg';
import image4 from './assets/kamera-min.JPG';
import image6 from './assets/viiniasetelma-min.jpg';
import image7 from './assets/portaat-min.JPG';

const tileData = [
    {
        img: image1,
        title: {
            fi: 'Tumma asetelma',
            en: 'Dark still life'
        },
        cols: 2,
        desc: 'Studiossa kuvattu tumma kuva. Tehtävänä oli leikkiä eri materiaaleilla, valoilla ja varjoilla.',
    },
    {
        img: image2,
        title: {
            fi: 'Muotikuva',
            en: 'Fashion image'
        },
        cols: 1,
        desc: 'Malli valmiina, tehtävänä kuvata muotikuva. Lähestyin tehtävää korostamalla nahkatakkia ja siihen osuvaa valoa.',
    },
    {
        img: image3,
        title: {
            fi: 'Omakuva ryhmänä',
            en: 'Self group portrait'
        },
        cols: 2,
        desc: 'Otimme ryhmän omankuvan, kukin kuvaten oman osuutemme ja luoden jatkumon muiden töihin.',
    },
    {
        img: image4,
        title: {
            fi: 'Mustaa ja valkoista',
            en: 'Black and white'
        },
        cols: 1,
        desc: 'Tehtävänä oli kuvata ja editoida kuva, joka on musta-valkoisena alkuperäistä parempi ja selkeämpi. Päätin ottaa erittäin tylsän värisessä ympäristössä kuvan kamerasta, jonka näytön pikselit eivät näyttäneet kauniilta kameran linssin läpi alkuperäisessä versiossa.',
    },
    {
        img: image6,
        title: {
            fi: 'Eirasta Niemeen',
            en: 'From Eira to Niemi'
        },
        cols: 1,
        desc: 'Lopputyöni Valokuvauksen perusteet kurssilla, jossa tehtävänä oli tehdä kuvasarja itselle tärkeästä asiasta. Päädyin kuvaamaan rakastamiani seutuja ja arkkitehtuuria Helsingin ydinkeskustasta ja Otaniemestä.',
    },
    {
        img: image7,
        title: {
            fi: 'Liike',
            en: 'Motion'
        },
        cols: 2,
        desc: 'Työssä pyydettiin kuvaamaan liikettä. Lähestyin tehtävää miettien, miten ihmiselle hyvin arkipäiväinen pieni liike näkyy kameran läpi katsottuna.',
    },
];

export default tileData;
