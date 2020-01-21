import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import mina from './assets/Portfolio_kuva.jpg';
import './FrontPage.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const image = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(17),
            height: theme.spacing(17),
        },
    },
}));

function Experience(props) {
    const {
        title,
        company,
        time,
        description,
    } = props

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.up('md'));

    if (!smallScreen) {
        return (
            <div>
                <div className="experienceGridSmall">
                    <p className="workTitle">{title}</p>
                    <p className="workTime" >{time}</p>
                    <p className="workTitle">{company}</p>
                </div >
                <p>{description}</p>

            </div>
        );
    }

    return (
        <div>
            <div className="experienceGrid">
                <p className="workTitle">{title}</p>
                <p className="workTitle">{company}</p>
                <p className="workTime" >{time}</p>
                <p>{description}</p>
            </div >
        </div>
    );
}

function Introduction(props) {
    const {
        name,
        phone,
        email,
        title,
        paragraphs,
    } = props

    const theme = useTheme();
    const classes = image();
    const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

    if (bigScreen) {
        return (
            <div className="introGrid">
                <div>
                    <div className={classes.root}>
                        <Avatar alt="Sanni Lares" src={mina} />
                    </div>
                    <div className="contactInfo">
                        <p>{name}</p>
                        <p>{phone}</p>
                        <p>{email}</p>
                    </div>
                </div >
                <div className="introduction">
                    <p className="title">{title}</p>
                    {paragraphs.map(text =>
                        <p>{text}</p>)}
                </div>
            </div>
        );
    }

    return (
        <div className="introGridSmall">
            <div>
                <div className={classes.root}>
                    <Avatar alt="Sanni Lares" src={mina} />
                </div>
                <div className="contactInfo">
                    <p>{name}</p>
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
            </div >
            <div className="introduction">
                <p className="title">{title}</p>
                {paragraphs.map(text =>
                    <p>{text}</p>)}
            </div>
        </div>
    );


}

function FrontPage() {

    return (
        <div>
            <Container maxWidth="lg">
                <div>
                    <p className="headline"> Sanni Lares</p>

                    {/* If big screen, this will be the layout: */}
                    <Introduction
                        name="Sanni Lares"
                        phone="0400 267 030"
                        email="sanni.lares@aalto.fi"
                        title="Pikkasen tietoa"
                        paragraphs={[`Olen kandiksi valmistuva kolmannen vuoden informaatioverkostojen opiskelija.
                                Minulla on vahva pohja tietotekniikassa, mutta ensisijaisesti olen itseäni etsivä designerin ja palvelumuotoilijan sekoitus.`,
                            `Olen erittäin kinnostunut siitä, miksi ihmiset tekevät asioita.
                                Haluaisinkin tehdä ihmisten elämästä helpompaa, ja joidenkin mielestä ehkä hiukan naivisti tehdä maailmasta paremman paikan.`,
                            `Voisin kuvailla itseäni helpoiten sanalla aktiivinen, mikä näkyy myös vapaa-ajallani.
                                Minua löytää harvoin sohvalta istumasta - todennäköisesti etsiminen kannattaisi aloittaa kiipeilyareenalta tai tanssitunnilta.
                                Välillä unohdun omiin maailmoihini maalaamaan tai ystävien kanssa lautapelailemaan.`]} />


                    <p className="title">Työkokemus</p>
                    <Container maxWidth="lg">
                        <Experience title="Assistentti" company="Aalto-yliopisto Junior" time="8/2019-" description="Opetan ja ohjaan työpajoja vieraileville opiskelijaryhmille tieteestä ja taiteesta. Osallistun töpajojen sekä Juniorin toiminnan kehittämiseen ja työstän Juniorin graafista ilmettä markkinoinnissa." />
                        <Experience title="UI-harjoittelija" company="Siemens" time="5/2019-8/2019" description="Suunnittelin talonsisäisen sovelluksen käyttöliittymän ja osallistuin sovelluksen implementointiin. Suunnittelin ICT-puolen tuoteportfolion ja osallistuin MindSphere -IoT alustan kehittämiseen." />
                        <Experience title="Rippikouluohjaaja" company="Herttoniemen seurakunta" time="1/2017-1/2019" description="Toimin opettajana ja ohjaajana useilla eri rippikoululeireillä. Olin leirin valokuvaaja ja vastuussa leirilehden toimittamisesta ja taitosta. Vastasin myös isostoiminnasta sekä osallistuin leirin sisältöjen ja opetuksen kehittämiseen." />
                        <Experience title="Promoottori" company="Messukeskus" time="2/2016-3/2016" description="Kuvasin messuvieraita ja edistin eri messujen näkyvyyttä sosiaalisessa mediassa." />
                    </Container>

                    <p className="title">Koulutus</p>
                    <Container maxWidth="lg">
                        <Experience title="Informaatioverkostot" company="Aalto-yliopisto" time="2017-" description="Informaatioverkostot valmistavat ymmärtämään laaja-alaisesti tietoyhteiskuntaa ja toimimaan sillanrakentajina eri alojen asiantuntijoiden välillä. Infolla oppii ymmärtämään tieto- ja viestintätekniikan vaikutuksia ja mahdollisuuksia sekä suunnittelemaan ja kaupallistamaan uusia tuotteita ja palveluja." />
                        <Experience title="Ylioppilas" company="Helsingin normaalilyseo" time="2013-2017" description="90 kurssia, keskiarvo 9.0. Ylioppilastutkinto: Matematiikka pitkä (E), äidinkieli (E), englanti (E), fysiikka (C), kemia (E) ja psykologia (E)." />
                        <Experience title="Vaihtovuosi" company="Colac Secondary College" time="2015" description="Vaihtovuosi Australiassa." />
                    </Container>

                    {/* <h3 className="title">Vapaaehtoistyöstä kertynyt kokemus</h3>
                    <Container maxWidth="lg">
                        <Experience title="Koulun toiminta" company="Aalto-yliopisto & Helsingin normaalilyseo" description="Toimin hallituksen opiskelijaedustajana vuodesta 2018. Toisen opiskeluvuoteni toimin ISOna, ja olen toiminut kansainvälisten opiskelijoiden tutorina syksystä 2018 asti. 2019 kuuluin killan tietskarijengiin. Lukiossa olin oppilaskunnan hallituksessa ja koulun lehden Veikon päätoimittaja." />
                        <Experience title="Partio" company="Laajasalon siniset & 3rd/4th Colac Scout" time="5/2019-8/2019" description="Olen johtanut seikkailijoista koostuvaa ryhmää 2012-2014. Partion mukana on tullut muun muassa tehtyä hyväntekeväisyysmatka Fidjille, missä rakensimme päiväkodin ja leikkipuiston paikallisille, sekä suunnittelimme kyltin pienelle kylälle. Finnjamboreella 2016 toimin pakohuonepelin valvojana ja ohjaajana." />
                        <Experience title="Isonen & kerhonohjaaja" company="Herttoniemen seurakunta" description="Toimin isosena Lapin vaellusrippikoulussa kesinä 2013 ja 2014. Ohjasin 10-13 vuotiaiden kerhoa 2012-2014." />
                    </Container> */}

                </div>
            </Container>
        </div>
    );
}

export default FrontPage;

