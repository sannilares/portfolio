import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import mina from './assets/Portfolio_kuva.jpg';
import phoneImg from './assets/call-24px.svg';
import emailImg from './assets/mail_outline-24px.svg';
import './FrontPage.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactDOM from 'react-dom';

function Experience(props) {
    const {
        headline,
        title,
        company,
        time,
        description,
    } = props

    const theme = useTheme();
    const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

    if (bigScreen) {
        return (
            <div>
                <p className="title">{headline}</p>
                <div className="experienceGrid">
                    <p className="workTitle">{title}</p>
                    <p className="workTitle">{company}</p>
                    <p className="workTime" >{time}</p>
                    <p>{description}</p>
                </div >
            </div>
        );
    }

    return (
        <div>
            <p className="titleSmall">{headline}</p>
            <div className="experienceGridSmall">
                <p className="workTitleSmall">{title}</p>
                <p className="workTime" >{time}</p>
                <p className="workCompanySmall">{company}</p>
            </div >
            <p>{description}</p>

        </div>
    );


}

function Skills(props) {
    const {
        headline,
        skill,
        grade
    } = props

    const theme = useTheme();
    const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

    // if (bigScreen) {
    return (
        <div>
            <p className="title">{headline}</p>
            <div className="skillGrid">
                <p></p>
                <p className="skillTitle">{skill}</p>
                <div className="skillContainer">
                    <div className={grade + " skill"}></div>
                </div>
            </div >
        </div >
    );
    //}
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
    const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

    if (bigScreen) {
        return (
            <div className="introGrid">
                <div>
                    <div className="meImgContainer">
                        <img className="meImg" alt="Sanni Lares" src={mina} />
                    </div>
                    <div className="contactInfo">
                        <p style={{ marginBottom: "4px" }} > {name}</p>
                        <div>
                            <img className="icon" src={phoneImg} />
                            <p style={{ marginBottom: "4px", display: "inline" }} >{phone}   </p>
                        </div>
                        <div>
                            <img className="icon2" src={emailImg} />
                            <p style={{ marginTop: "2px", display: "inline" }}> {email}</p>
                        </div>
                    </div>
                </div >
                <div className="introduction">
                    <p className="introTitle">{title}</p>
                    {paragraphs.map(text =>
                        <p class="introText">{text}</p>)}
                </div>
            </div>
        );
    }

    return (
        <div className="introGridSmall">
            <div>
                <div className="meImg">
                    <img alt="Sanni Lares" src={mina} />
                </div>
                <div className="contactInfo">
                    <p>{name}</p>
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
            </div >
            <div className="introduction">
                <p className="introTitle">{title}</p>
                {paragraphs.map(text =>
                    <p>{text}</p>)}
            </div>
        </div>
    );


}

function ColorPortal() {
    const bigScreen = useMediaQuery(useTheme().breakpoints.up('md'));
    const colorContainer = document.getElementById("colorContainer")
    if (colorContainer) {
        return ReactDOM.createPortal(
            <div className={bigScreen ? "leftBg" : ""} />, colorContainer
        )
    }
    return null
}

function FrontPage() {

    return (
        <div>
            <ColorPortal />
            <div>
                <p className="headline cvHeadline"> Sanni Lares - CV</p>

                <Introduction
                    name="Sanni Lares"
                    phone="0400 267 030"
                    email="sanni.lares@aalto.fi"
                    title="Kuka Sanni?"
                    paragraphs={[`Olen UX-designerin ja palvelumuotoilijan sekoitus vahvalla tietoteknisellä pohjalla. Opiskelen Aalto-yliopistossa Informaatioverkostoja kolmatta vuotta, ja matkan varrella olen löytänyt sivuaineen niin tietotekniikasta kuin median laitokselta.`,
                        `Aikanani aloitin opinnot infolla siksi, että olin kiinnostunut siitä sun tästä. Eikä mikään ole muuttunut. Kuitenkin erityisesti minua kiehtoo ihmisen käyttäytyminen, ja sitä kautta UX-design. Haluan tehdä ihmisten elämästä helpompaa, ja samalla oppia lisää siitä, miksi teemme asiat niin kuin teemme. `,
                        `Olen avoin tiimityöskentelijä, ja hyppään uusiin projekteihin mukaan täysillä. Vahvuuksiani ovat loogisuus ja huolellisuus, etsin luovia ratkaisuja ja uusia näkökulmia. Olen käynyt useita kursseja ryhmän ohjaamisesta ja -johtamisesta. `,
                        `Olen musikaalinen ja harrastan kiipeilyä ja tanssia. Nautin lukemisesta, lautapeleistä ja maalaamisesta. Rakastan luontoa, vaeltamista ja laskettelua.`,]} />


                <Experience headline="Työkokemus" title="Assistentti" company="Aalto-yliopisto Junior" time="8/2019-" description="Opetan ja ohjaan työpajoja vieraileville opiskelijaryhmille tieteestä ja taiteesta. Osallistun töpajojen sekä Juniorin toiminnan kehittämiseen ja työstän Juniorin graafista ilmettä markkinoinnissa." />
                <Experience title="UI-harjoittelija" company="Siemens" time="5/2019-8/2019" description="Suunnittelin talonsisäisen sovelluksen käyttöliittymän ja osallistuin sen implementointiin. Suunnittelin ICT-puolen tuoteportfolion ja osallistuin MindSphere -IoT alustan kehittämiseen." />
                <Experience title="Rippikouluohjaaja" company="Herttoniemen seurakunta" time="1/2017-1/2019" description="Toimin opettajana ja ohjaajana useilla eri rippikoululeireillä. Olin vastuussa valokuvauksesta sekä leirilehden toimittamisesta ja taitosta. Vastasin myös isostoiminnasta sekä osallistuin leirin sisältöjen ja opetuksen kehittämiseen." />
                <Experience title="Promoottori" company="Messukeskus" time="2/2016-3/2016" description="Kuvasin messuvieraita ja edistin eri messujen näkyvyyttä sosiaalisessa mediassa." />

                <Experience headline="Koulutus" title="Informaatioverkostot" company="Aalto-yliopisto" time="2017-" description="Informatioverkostot opettavat ymmärtämään tieto- ja viestintätekniikan vaikutuksia ja mahdollisuuksia sekä suunnittelemaan ja kaupallistamaan uusia tuotteita ja palveluja." />
                <Experience title="Ylioppilas" company="Helsingin normaalilyseo" time="2013-2017" description="90 kurssia, keskiarvo 9.0. Ylioppilastutkinto: Matematiikka pitkä (E), äidinkieli (E), englanti (E), fysiikka (C), kemia (E) ja psykologia (E)." />
                <Experience title="Vaihtovuosi" company="Colac Secondary College" time="2015" description="Vaihtovuosi Australiassa." />



                <Skills headline="Taidot" skill="Certified Scrum Master" grade="noGrade" />
                <Skills skill="Adobe CC" grade="awe" />
                <Skills skill="Scala, Python, JS" grade="good" />
                <Skills skill="React, Angular" grade="ok" />
                <Skills skill="HTML, CSS" grade="good" />
                <Skills skill="Microsoft office" grade="awe" />
                <Skills skill="Figma, MarvelApp" grade="awe" />

                <Experience headline="Vapaaehtoistyö" title="Koulun toiminta" company="Aalto-yliopisto & Helsingin normaalilyseo" time="2013-" description="Toimin hallituksen opiskelijaedustajana vuodesta 2018. Olen toiminut tutorina syksystä 2018 asti. 2019 kuuluin killan tietskarijengiin. Lukiossa olin oppilaskunnan hallituksessa ja koulun lehden Veikon päätoimittaja." />
                <Experience title="Partio" company="Laajasalon siniset & 3rd/4th Colac Scout" time="2012-2016" description="Olen johtanut seikkailijoista koostuvaa ryhmää 2012-2014. 2015 hyväntekeväisyysmatka Fidjille, missä rakensimme päiväkodin ja leikkipuiston paikallisille, sekä suunnittelimme kyltin pienelle kylälle. Finnjamboreella 2016 toimin pakohuonepelin valvojana." />
                <Experience title="Isonen & kerhonohjaaja" company="Herttoniemen seurakunta" time="2012-2015" description="Toimin isosena Lapin vaellusrippikoulussa kesinä 2013 ja 2014. Ohjasin 10-13 vuotiaiden kerhoa 2012-2014." />

            </div>
        </div>
    );
}

export default FrontPage;

