import image1 from './assets/Tuotekuva-Asetelma-154-min.jpg';
import image2 from './assets/muoti-min.JPG';
import image3 from './assets/Ryhmäkuva_2019-min.jpg';
import image4 from './assets/kamera-min.JPG';
import image6 from './assets/Lopputyö.png';
import image7 from './assets/portaat-min.JPG';
import video1 from './assets/kauneus.webm';
import video2 from './assets/uncover.webm';
import videoImg1 from './assets/videoImg.png';
import videoImg2 from './assets/videoImg2.png';

const photosData = [
  {
    img: image6,
    title: {
      fi: 'Eirasta Niemeen',
      en: 'From Eira to Niemi',
    },
    cols: 2,
    desc: {
      fi: 'Lopputyöni Valokuvauksen perusteet kurssilla, jossa tehtävänä oli tehdä kuvasarja itselle tärkeästä asiasta. Päädyin kuvaamaan rakastamiani seutuja ja arkkitehtuuria Helsingin ydinkeskustasta ja Otaniemestä.',
      en: 'My final assignment in a course of photography. I was asked to make a serie of images, related to something important for me. I ended up capturing small details in locations that I love.',
    },
  },
  {
    img: image2,
    title: {
      fi: 'Muotikuva',
      en: 'Fashion image',
    },
    cols: 1,
    desc: {
      fi: 'Malli valmiina, tehtävänä kuvata muotikuva. Lähestyin tehtävää korostamalla nahkatakkia ja siihen osuvaa valoa.',
      en: 'With given model, the exercise was to take an fashion image. I approached the task by highligthing the leatherjacket with an absent-minded feeling.',
    },
  },
  {
    img: image1,
    title: {
      fi: 'Tumma asetelma',
      en: 'Dark still life',
    },
    cols: 1,
    desc: {
      fi: 'Studiossa kuvattu tumma kuva. Tehtävänä oli leikkiä eri materiaaleilla, valoilla ja varjoilla.',
      en: 'Playing with materials, lights and shadows. Image was taken in studio.',
    },
  },
  {
    img: videoImg2,
    video: video2,
    title: {
      fi: 'Korkojen kertomaa',
      en: 'Story by heels',
    },
    cols: 2,
    desc: {
      fi: 'Kurssin digitaalinen media lopputyö, tehtävänä kuvata ja editoida video uudesta näkökulmasta. Tein videon, joka kertoo mitä kaikkea meistä voi päätellä ihan jo vain kenkiä katselemalla.',
      en: 'The final assignment of course Digital media, where I needed to film and edit video about new perspective. I approached this thinking how just our feet shows a lot of our wants and thoughts.',
    },
  },
  {
    img: image3,
    title: {
      fi: 'Omakuva ryhmänä',
      en: 'Self group portrait',
    },
    cols: 2,
    desc: {
      fi: 'Otimme ryhmän omankuvan, kukin kuvaten oman osuutemme ja luoden jatkumon muiden töihin.',
      en: 'Self portrait of our photography group.',
    },
  },
  {
    img: image4,
    title: {
      fi: 'Mustaa ja valkoista',
      en: 'Black and white',
    },
    cols: 1,
    desc: {
      fi: 'Tehtävänä oli kuvata ja editoida kuva, joka on musta-valkoisena alkuperäistä parempi ja selkeämpi. Päätin ottaa erittäin tylsän värisessä ympäristössä kuvan kamerasta, jonka näytön pikselit eivät näyttäneet kauniilta kameran linssin läpi alkuperäisessä versiossa.',
      en: 'Image, that needed to look better in greyscale.',
    },
  },
  {
    img: videoImg1,
    video: video1,
    title: {
      fi: 'Näkökulmia kauneuteen',
      en: 'Beautiful aspects',
    },
    cols: 1,
    desc: {
      fi: 'Yksi ensimmäisistä kosketuksistani videoiden tekemiseen. Tehtävänä oli tehdä video arjen askareesta, missä käyttää mahdollisimman paljon erilaisia kuvakulmia. Tehtävä oli myös ensimmäinen kerta kun käytin Premiereä: tulitikku, joka sytytti palon videoiden muokkaamiselle! ',
      en: 'This was one of my first videos. The exercise was to make a video about a common habit, using as many angle of views as possible. This was also the first time that I ever used Premiere, and I fell in love immediately.',
    },
  },
  {
    img: image7,
    title: {
      fi: 'Liike',
      en: 'Motion',
    },
    cols: 2,
    desc: {
      fi: 'Työssä pyydettiin kuvaamaan liikettä. Lähestyin tehtävää miettien, miten ihmiselle hyvin arkipäiväinen pieni liike näkyy kameran läpi katsottuna.',
      en: 'Capturing motion. I approached this excersise thinking, how the little movement of our everyday life would look like through lence.',
    },
  },
];

export default photosData;
