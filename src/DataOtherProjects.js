import veikko from './assets/Veikot.png';
import vanda from './assets/vandadrawing.png';
import portfolio from './assets/Portfolio.png';
import portfolioBP from './assets/portfolio-BP.png';
import portfolioS from './assets/portfolio-S.png';


const OhterProjectsData = [
    {
        slug: 'editor-in-chief',
        img: veikko,
        title: {
            fi: 'Veikon päätoimittaja',
            en: 'Editor-In-Chief',
        },
        cols: 1,
        desc: {
            fi: 'Ensimmäinen kosketukseni inDesigniin oli lukion ensimmäisellä vuosikurssilla, kun liityin koulun lehden Veikon toimitukseen, alkuun toimittajana ja taittajana, myöhemmin lehden päätoimittajana. Päätoimittajana toimiminen ei pelkästään opettanut toimituksellisen prosessin alusta loppuun, vaan myös vahvisti arvostustani tarinankerronan voimaa kohtaan. Odotan innolla mahdollisuutta soveltaa Veikon parissa oppimaani uusiin haasteisiin ja hankkeisiin.',
            en: 'For three consecutive years, I had the honor of serving as the Editor-in-Chief of our school magazine Veikko. This role not only shaped my understanding of editorial processes but also instilled in me a profound appreciation for the power of storytelling and the art of effective communication. I am eager to apply my editorial expertise and leadership skills to new challenges and endeavors on the horizon.',
        },
    },
    {
        slug: 'campervan-vanda',
        img: vanda,
        title: {
            fi: 'Matkailupaku Vanda',
            en: 'Converting Van',
        },
        cols: 1,
        desc: {
            fi: 'Vuoden mittaisessa vapaa-ajan projektissa muutin pakettiauton täysin toimivaksi matkailuautoksi. Projekti vaati kokonaisvaltaista suunnittelua, valtavan paljon tutkimusta ja käytännön tekemistä. Pilkoin jokaisen projektin kohdan pieniin osa-alueisiin, joiden toteuttaminen vaati joustavuutta ja laadun prioisoimista. Sain paljon apua läheisiltäni, mikä edellytti tehokasta viestintää ja johtamistaitoja stressaavissa olosuhteissa. Vanda on ehkä suurin ylepydenaiheeni ja ehdottomasti palkitsevin tekemistäni hankkeista.',
            en: 'I embarked on a journey to convert a van into a fully functional campervan, a year-long project requiring extensive planning, research, and hands-on work. With a methodical mindset, I tackled each aspect of the conversion, breaking down the process into manageable tasks. The project demanded resilience and a commitment to quality at every step. I received invaluable support from friends and family, requiring effective communication and leadership skills. The completed campervan stands as a testament to my DIY ingenuity and passion for hands-on craftsmanship. It represents a personal achievement and source of pride, marking the most rewarding endeavor I have undertaken.',
        },
    },
    {
        slug: 'portfolio',
        img: portfolio,
        title: {
            fi: 'Portfolio',
            en: 'Prompting portfolio',
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
];

export default OhterProjectsData;
