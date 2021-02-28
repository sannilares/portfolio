import vaestoliitto from './assets/Nettisivut7.png';
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
            en: "This portfolio is designed and coded by me. Due to some technical difficulties, I changed the design on the way, but I learned a lot because of it and in the end it turned out to be nicer UX than in the original design. ",
        },
        dialogDesc: {
            fi: `Portfolio, jonka olen suunnitellut ja koodannut alusta loppuun pienenä projektina. Suunnitelmat ja lopputulos eivät menneet aivan yksi yhteen, portfoliota tehdessä monet tekniset haasteet saivat miettimään uudestaan joitain valintoja ja uskallan sanoa, että hyvä niin.

            Monisivuisesta kokonaisuudesta päädyin lopulta jaottelemaan kaiken kahdelle sivulle, jättäen nämä tekstit itse sisällön viereen. 
            
            Mobiilioptimointi ja sivujen kääntäminen englanniksi ovat työn alla. Pyrin tekemään viikottain uusia valmiita ominaisuuksia ja päivittämään sivuja ketterästi.
            
            Tätä projektia en olisi saanut valmiiksi ilman kavereiden apua. Vinkkejä tekniseen toteutukseen, teksteihin, sivun ulkoasuun ja käytettävyyteen sain vaikka millä mitalla. Paljon on jo muuttunut, mutta osa palautteesta odottaa vielä tutkiskelua ja mahdollista muutosta.
            
            Auta toki sinäkin, ja kerro, jos jokin ei mielestäsi toimi! Olisihan se mahtavaa oppia lisää!
            `,
            en: "This portfolio is designed and coded by me. Due to some technical difficulties, I changed the design on the way, but I learned a lot because of it and in the end it turned out to be nicer UX than in the original design. ",
        },
        carousel: [
            {
                img: japan,
            },
            {
                img: portfolio,
            }    
        ]
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
        dialogDesc: {
            fi: `Suunnittelimme applikaation roskakorien yhteyteen kiinnitettävälle vaa'alle, joka punnitsee talouden jätteen määrän. Applikaatio on suunniteltu mobiiliin, ja sen tärkeimpinä ominaisuuksina on nähdä senhetkinen roskan määrä sekä dataa omasta jätteen määrästä pidemmällä aikavälillä. Idea ja toteutus tehtiin kuuden hengen tiimissä, ja applikaatiota suunniteltiin yhdessä niin työpajoissa kuin vapaa-ajalla yksin miettien. Ideoita heiteltiin edestakas ja luonnoksia tehtiin yksi toisensa päälle. 

            Tuote ei ole vielä lopullinen, vaan appin tarkoituksenmukaisuutta ja käytettävyyttä testataan edelleen, ennen valmiin tuotteen ja projektin esittelyä.
            `,
            en: "We designed an application for a garbage scale, that's attached to the bottom of a garbage bin. The application is designed for mobile. "
        }
    },
    {
        img: japan,
        title: {
            fi: 'A Survival Guide To Japan',
            en: 'A Survival Guide To Japan'
        },
        cols: 1,
        desc: {
            fi: "Nettisivut, joihin tein designin omana pienenä projektina. Pidin käteni jäljestä graafisen suunnittelun lopputyössä ja mietin, miltä näyttäisivät vastaavat nettisivut. Aloitin suunnittelun matkakohteista, ja jatkoin siitä paikallisen kulttuurin esittelyyn. Vaikka sivujen tekeminen lähtikin täysin visuaalisen ilmeen suunnittelusta ja sillä leikittelystä, hyppäsi myös UX mukaan kuvaan nopeasti.",
            en: 'I designed a mobile page on top of my school project during my freetime.'
        },
        dialogDesc: {
            fi: `Nettisivut, joihin tein designin omana pienenä projektina. Pidin käteni jäljestä graafisen suunnittelun lopputyössä ja mietin, miltä näyttäisivät vastaavat nettisivut. Aloitin suunnittelun matkakohteista, ja jatkoin siitä paikallisen kulttuurin esittelyyn. Vaikka sivujen tekeminen lähtikin täysin visuaalisen ilmeen suunnittelusta ja sillä leikittelystä, hyppäsi myös UX mukaan kuvaan nopeasti.

            Käyttäjäkökemuksen miettimistä inspiroivat nettisivut, jotka ovat mielenkiintoiset käyttäjän kannalta. Eivät ehkä täysin vastaavat, mihin on totuttu, mutta kuitenkin selkeät ja miellyttävät käyttää.
            
            Projekti rajoittuu tällä hetkellä mobiiliin, mutta kuka tietää, ehkä vielä joskus rohkaistun myös desktopin äärelle.
            `,
            en: 'I designed a mobile page on top of my school project during my freetime.'
        }
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
        dialogDesc: {
            fi: `Ensikosketukseni nettisivujen tekemiseen. Sivut toteutettiin pareittain. Tehtävänä oli tehdä maalämpöaiheinen kampanja, tietyillä teknisyysvaatimuksilla (kirjastoja ei saanut käyttää, sivuilta piti löytyä niin videota, karusellia kuin jotain sosiaalisen median kaltaista palvelua.). Jälkikäteen ajatellen sivuista löytyy paljon parannettavaa: tekstiä ja värejä voisi vähentää, ulkoasua selkeyttää ja "ai tälläistäkin voi tehdä" - ahaa-elämykset jättää sivujen ulkopuolelle. Vastasin isoin osin sivujen visuaalisesta ilmeestä, UX taas toteutettiin yhdessä ja se perustui hyvin vahvasti intuitioon. Halusimme sivuista mahdollisimman helppokäyttöiset ja selkeät, vanhemmat sukulaiset olivat hyviä testikäyttäjiä (ja lopulta myös sisällön tuottajia...).

            Projektin tekeminen oli todella hauskaa: kaikki oli uutta, ja käytin tunteja googlaillen erilaisia tapoja tehdä naveja ja chattipalstoja. Oppihan siinä vaikka kuinka, olen edelleenkin ylpeä, miten ylsin nollasta tähän.
            `,
            en: 'My first touch in creating web pages. In pairs of two, we created a website with certain quality requirements. In order to learn some programming, everything was made using pure JS, HTML and CSS. Nowadays I would do many things differently: clearer layout, less text and leave out all the "fancy" effects. '
        }
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
        dialogDesc: {
            fi: `Suunnittelin Ultra Softwarelle Sarjanumero.fi-nettisivujen UI:tä ja UX:ää. Toteutin prototyypin sivuista Adobe XD:llä ja Marvel Appillä.

            Alkuperäinen työkuvani oli tehdä prototyyppi nettisivujen etusivulle, rekisteröintiin sekä sisäänkirjautumiseen niin mobiiliin kuin desktopille. 
            
            Myöhemmin pääsin suunnittelemaan niin UX:ää kuin vähän UI:takin myös muualle sivuille. 
            
            Aloitin prosessin tutustumalla sivuihin ja miettien, missä vaiheessa käyttäjä haluaisi rekisteröityä palvelun käyttäjäksi. Loin selkeät napit rekisteröitymiselle, ja lisäsin myös naviin tarvittavat kohdat sisäänkirjautumisen helpottamiseksi. 
            
            Muokkasin valmiin etusivun pohjaa selkeämmäksi: halusin, että käyttäjä saa nopealla silmäyksellä hyvän ymmärryksen palvelusta ja löytää helposti tiensä haluamalleen sivulle. 
            
            Itse "rekisteröidy" ja "kirjaudu sisään" sivut loin selkeiksi, tutuiksi ja turvallisiksi. 
            `,
            en: 'I designed UI and UX for myserialnumber.net. The prototype was made by using Adobe XD and Marvel App.'
        }
    },
    {
        img: vaestoliitto,
        title: {
            fi: 'Väestöliiton blogi',
            en: 'Väestöliitto blog'
        },
        cols: 1,
        desc: {
            fi: "Tiiminä teimme growth hacking -projektin Väestöliiton blogille. Onnistuimme kasvattamaan blogin kävijämäärää ja matkalla opimme iteroimaan ja iteroimaan kunnes jokin toimi hyvin.",
            en: 'As a team, we did a growth hacking project for the blog of Väestöliitto. We managed to grow the number of readers by iterating our ideas and solutions over and over again.'
        },
        dialogDesc: {
            fi: `Tiiminä teimme growth hacking -projektin Väestöliiton blogille. Onnistuimme kasvattamaan blogin kävijämäärää ja matkalla opimme iteroimaan ja iteroimaan kunnes jokin toimi hyvin.
            `,
            en: 'As a team, we did a growth hacking project for the blog of Väestöliitto. We managed to grow the number of readers by iterating our ideas and solutions over and over again.'
        }
    },
    // {
    //     img: wsd,
    //     title: {
    //         fi: 'The Gameservice',
    //         en: 'The Gameservice'
    //     },
    //     cols: 1,
    //     desc: {
    //         fi: 'Kurssilla Web Software Development luotu nettisivusto, jossa focus oli backendissä. Design ja mobiilioptimointi olivat kuitenkin pieni osa työtä, joten käytin hiukan aikaa sivun visuaaliseen ilmeeseen ja käytettävyyteen. Tehtävä oli opettavainen, sillä visuaaliseen ilmeeseen oli varattu suhteessa vähän aikaa, ja se rakennettiin täysin valmiin koodin päälle. ',
    //         en: 'This webpage was created in a project course Web Software Development. The main focus in the project was in backend, but I decided to also spend a while to make a better design  and optimize the service to mobile. The exercise was very educational, since the design was built on top of existing code with a tight schedule.'
    //     },
    //     dialogDesc: {
    //         fi: `Projekti oli harjoitustyö, joka tehtiin kolmen hengen tiimeissä.  Projektissa oli tarkoitus oppia alusta loppuun, miten softaa tuotetaan. Taitotaso projektiryhmämme sisällä vaihteli paljon, joten projekti opetti paljon yhdessä toimimisesta, avun kysymisestä ja muiden huomioimisesta. Vaikka projekti painottui back-endiin, vastasin projektin UI:sta ja UX:stä. 

    //         Projekti tehtiin todella tiukalla aikataululla ja käytettävyys oli erittäin vähäinen arvostelukriteeri, joten koko UX ja UI täytyi rakentaa valmiin softan päälle muutamassa päivässä. Tämän takia päädyinkin vain selkeyttämään ja yhtenäistämään sivuja mahdollisimman paljon. Lisäsin tilaa eri elementtien ympärille, käytin tehostevärinä sinistä kaikessa, mihin käyttäjä saattoi interaktiivisesti vaikuttaa ja tein taulukoista helposti luettavat. 
            
    //         Mobiiliin uhrasin myös muutaman hetken, lähinnä halusimme sivun järkeväksi mobiiliin, vaikkei kyseisiä pelejä puhelimella kuulukaan pelata. Saimme assistentilta loppupalautuksen yhteydessä positiivista palautetta UX:stä: "Erittäin hienoa jälkeä. Arvostan, että panostitte sivujen käytettävyyteen".
            
    //         UI:n ja UX:n suunnittelu toimivien nettisivujen päälle oli hauska tehtävä, ja erityisen opettavainen siksi, ettei aikaa ollut paljoa ja suunnitellessa sivuja piti olla varma, että saan ne myös koodattua kahdessa päivässä.
    //         `,
    //         en: 'This webpage was created in a project course Web Software Development. The main focus in the project was in backend, but I decided to also spend a while to make a better design  and optimize the service to mobile. The exercise was very educational, since the design was built on top of existing code with a tight schedule.'
    //     }
    // },
];

export default websiteData;
