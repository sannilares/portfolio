import veikko from './assets/Veikot.png';
import vanda from './assets/vandadrawing.png';
import portfolio from './assets/Portfolio.png';
import vandaMountainView from './assets/VandaMountainView.jpg';
import vandaBedInterior from './assets/VandaBedInterior.jpg';
import vandaKitchenView from './assets/VandaKitchenView.jpg';
import vandaSkylightBuild from './assets/VandaSkylightBuild.jpg';


const OhterProjectsData = [
    {
        slug: 'editor-in-chief',
        img: veikko,
        imgAlt: {
            fi: 'Kolme Veikko-koululehden kansisuunnittelua: yksi kuvituksella marionetista ja sen käsittelijän kädestä, ja kaksi mustavalkoista valokuvakantta, joissa näkyy koulurakennus ja puun kaarna.',
            en: 'Three cover designs of the school magazine Veikko: one with an illustration of a marionette and its puppeteer\'s hand, and two black-and-white photographic covers featuring a school building and tree bark.',
        },
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
        carousel: [
            {
                img: vanda,
                alt: {
                    fi: 'Kuvitus valkoisesta Ford Transit -pakettiautosta sivulta kuvattuna.',
                    en: 'Illustration of a white Ford Transit van, side view.',
                },
            },
            {
                img: vandaKitchenView,
                naturalRatio: true,
                alt: {
                    fi: 'Sisäkuva matkailuauton keittiöstä, jossa on sisäänrakennetut puiset laatikostot ja seinällä kokoelma maustepurkkeja, sekä auki olevan sivuoven takaa näkyvä venesatama auringonlaskussa.',
                    en: 'Interior view of the campervan\'s kitchen area, with built-in wooden drawers and a collection of spice jars on the wall, and a marina visible through the open side door at sunset.',
                },
            },
            {
                img: vandaBedInterior,
                alt: {
                    fi: 'Sisäkuva matkailuauton sängystä, jossa on kuvioidut verhot, värikkäillä pompomeilla koristeltu valosarja sekä tyynyjä ja peittoja sängyllä.',
                    en: 'Interior view of the campervan\'s bed area, with patterned curtains, a string of colorful pom-pom lights, and pillows and blankets on the bed.',
                },
            },
            {
                img: vandaMountainView,
                naturalRatio: true,
                alt: {
                    fi: 'Näkymä matkailuauton vierestä vuoristoon ja metsään osittain pilvisen taivaan alla, tie näkyvissä alempana.',
                    en: 'View from beside the campervan overlooking a mountain range and forest under a partly cloudy sky, with a road visible below.',
                },
            },
            {
                img: vandaSkylightBuild,
                alt: {
                    fi: 'Pakettiauton sisätila muutostyön aikana: näkyvissä paljas metallirunko, eristelevyt ja äskettäin asennettu puukehyksinen kattoikkuna.',
                    en: 'Interior of the van during conversion, showing the bare metal frame, insulation panels, and a newly installed roof skylight with a wooden frame.',
                },
            },
        ],
    },
    {
        slug: 'portfolio',
        img: portfolio,
        imgAlt: {
            fi: 'Kuvakaappaus portfolion etusivusta: mustavalkoinen kuva Sannista hymyilemässä tuulessa liehuvin hiuksin, vieressä turkoosi sivupalkki suomenkielisellä tervehdyksellä, esitettynä pöytätietokoneen näytöllä.',
            en: 'Screenshot of the portfolio website\'s homepage, showing a black-and-white photo of Sanni smiling with hair blowing in the wind next to a teal sidebar with a Finnish greeting, displayed on a desktop monitor mockup.',
        },
        title: {
            fi: 'Portfolio',
            en: 'Prompting portfolio',
        },
        cols: 1,
        desc: {
            fi: `Miten optimoida portfolio ja tietää, mitä mahdollinen työnantaja haluaa nähdä? Tätä lähdin selvittämää A/ B - testeillä ja Google Analyticsin avulla.Ensimmäisen valmiin version saatuani alkutalvesta 2021 hain kymmeniä ja kymmeniä työpaikkoja ja selvitin, mitä mahdollinen työnantajani oli portfoliostani katsonut.Muokkasin niin toiminnallisuuksia kuin sisältöä tämän perusteella - olen itse niin suunnitellut kuin koodannut tämän portfolion.Auta toki sinäkin, ja kerro, jos jokin ei mielestäsi toimi.`,
            en: `How do you optimize a portfolio and understand what a potential employer wants to see? I set out to explore this through A/B testing and Google Analytics.

After completing the initial version in early 2021, I applied to dozens of jobs and analysed how potential employers interacted with my portfolio. Based on what I learned, I iterated on both the functionality and content. I have designed and programmed the portfolio myself, using the process to explore how design, code and user behaviour interact.

The latest iteration took just one evening. I used Claude to help implement and refine small details that would have been unnecessarily time-consuming to build from scratch for a personal project. It was a good reminder that with the right tools, ideas that would previously have been too tedious to implement can become quick experiments.`,
        },
    },
];

export default OhterProjectsData;
