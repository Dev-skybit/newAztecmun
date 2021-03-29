// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Libraries imports
import { AnimatePresence } from 'framer-motion'
import Carousel from 'react-elastic-carousel'

// Firebase
import useUser, { USER_STATES } from 'hooks/useUser'

// Local components imports
import Sidebar from '../components/sidebar'

// Icons
import { FaQuestion } from 'react-icons/fa'

export default function index() {
  const user = useUser()

  return (
    <div className="homeWrapper">
      <Head>
        <title> Aztecmun 2021 | Inicio </title>

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/about.png" />
        <meta property="og:title" content="AztecMUN 2021" />
        <meta
          property="og:description"
          content="Modelo de Naciones Unidas de Plantel Azteca que busca lograr el bien común en la sociedad a través de la concientización de los problemas nacionales e internacionales."
        />
      </Head>

      <Sidebar />

      <header className="header">
        <div className="header__title">
          <h1>Bienvenidos A</h1>
          <img src="/img/logo.png" alt="logo_aztecmun" />
        </div>

        <img src="/img/div.png" alt="aztecmun 2021" className="header__div" />
      </header>

      <main>
        <section className="about" id="about">
          <div className="about__card1">
            <h1 className="about__card1__title">Quiénes Somos</h1>
            <p>AZTECMUN es un modelo de Naciones Unidas, proyecto educativo de Plantel Azteca que busca fomentar y desarrollar habilidades académicas para ayudar al fortalecimiento profesional y personal de los participantes, siendo así el comienzo para lograr el bien común en la sociedad a través de la concientización de los problemas nacionales e internacionales. AZTECMUN parte de un proyecto con 17 años de trayectoria, logrando, reinventándose e implementando el debate en idioma inglés.</p>
            <div className="about__card1__buttons">
              {user === USER_STATES.NOT_LOGGED && (
                <>
                  <Link href="/signup">
                    <div className="about__card1__buttons__button"> Regístrate</div>
                  </Link>
                  <Link href="/login">
                    <div className="about__card1__buttons__button about__card1__buttons__button--ghost">Inicia Sesión</div>
                  </Link>
                </>
              )}

              {user && (
                <Link href="/profile">
                  <div className="about__card1__buttons__button">Completa tu perfil</div>
                </Link>
              )}
            </div>
          </div>

          <div className="about__card2">
            <img src="/svg/about.svg" alt="logo aztecmun" className="about__card2--image1" />
            <img src="/img/about2.png" alt="logo aztecmun" className="about__card2--image2" />
          </div>
          <div className="about__card3">
            <h1 className="about__card3__title">Misión</h1>
            <p>Promover la participación de los jóvenes al debate y desarrollar en ellos el pensamiento crítico-analítico a través de un foro constructivo, donde el diálogo abierto sea la principal herramienta para solucionar los conflictos planteados.</p>
          </div>
          <div className="about__card4">
            <h1 className="about__card4__title">Visión</h1>
            <p>Catalogarse como un modelo de las Naciones Unidas con alto impacto social, impulsando el idioma inglés y la formación de líderes estudiantes dentro de México.</p>
          </div>
        </section>

        <section className="committees" id="committees">
          <div className="committees__desc">
            <h1>Comités</h1>
            <p>Un comité es un grupo de estudiantes que investigan y debaten acerca de una problemática específica, simulan ser una organización miembro de las naciones unidas, exponiendo soluciones a problemáticas mundiales</p>
          </div>

          <div className="committees__cards">

            <div className="committees__cards__card">
              <div className="committees__cards__card__logo">
                <img src="/img/unwto.png" alt="unwto logo" />
              </div>
              <div className="committees__cards__card__desc">
                <h1>World Tourism Organization</h1>
                <p>The World Tourism Organization (UNWTO) is the United Nations agency responsible for promoting responsible, sustainable and accessible tourism for all created in 1975, the headquarter is in Madrid, Spain.</p>
              </div>
              <Link href="/comites/unwto">
                <div className="committees__cards__card__button">Participa</div>
              </Link>
            </div>

            <div className="committees__cards__card">
              <div className="committees__cards__card__logo">
                <img src="/img/unicef.png" alt="unicef logo" />
              </div>
              <div className="committees__cards__card__desc">
                <h1>United Nations Children's Fund</h1>
                <p>UNICEF is the driving force contributing to the creation of a world where the rights of each and every child are respected. Therefore, we are a world organization like no other working with young people.</p>
              </div>
              <Link href="/comites/unicef">
                <div className="committees__cards__card__button">Participa</div>
              </Link>
            </div>

            <div className="committees__cards__card">
              <div className="committees__cards__card__logo">
                <img src="/img/onu.png" alt="onu mujeres logo" />
              </div>
              <div className="committees__cards__card__desc">
                <h1>ONU Mujeres</h1>
                <p>ONU Mujeres fue establecida para acelerar el proceso de mejora de las condiciones de vida de mujeres y niñas, buscando resolver sus necesidades y aumentando su calidad de vida.</p>
              </div>
              <Link href="/comites/onu-mujeres">
                <div className="committees__cards__card__button">Participa</div>
              </Link>
            </div>

            <div className="committees__cards__card">
              <div className="committees__cards__card__logo">
                <img src="/img/senado.png" alt="unwto logo" />
              </div>
              <div className="committees__cards__card__desc">
                <h1>Senado de la República</h1>
                <p>Es la instancia superior de la Cámara dónde se discute y en su caso, se aprueba el trabajo legislativo. Es una institución fundamental que coordina el ejercicio de la democracia.</p>
              </div>
              <Link href="/comites/senado">
                <div className="committees__cards__card__button">Participa</div>
              </Link>
            </div>

            <div className="committees__cards__card">
              <div className="committees__cards__card__logo">
                <img src="/img/comite.png" alt="unwto logo" />
              </div>
              <div className="committees__cards__card__desc">
                <h1>Corte Internacional de Justicia</h1>
                <p>Fue creada en 1945 por la Carta de las Naciones Unidas y comenzó a funcionar en 1946, es el principal órgano judicial de las Naciones Unidas; se encuentra en el Palacio de La Paz en la Haya.</p>
              </div>
              <Link href="/comites/corte-internacional">
                <div className="committees__cards__card__button">Participa</div>
              </Link>
            </div>

          </div>

          <img src="/svg/committees_bg.svg" alt="" className="committees__bg" />
        </section>

        <section className="secretariesC" id="secretaries">
          <Carousel className="secretariesC__carousel">
            <div className="secretariesC__carousel__card">
              <img src="/svg/secretaria academica.svg" alt="académica" className="secretariesC__carousel__card__img" />
              <div className="secretariesC__carousel__card__desc">
                <h1>Secretaría Académica</h1>
                <p>La Secretaría Académica tiene como función coordinar, preparar y evaluar a las mesas, quienes fungirán como mentores de los delegados; para una correcta implementación y desarrollo de los tópicos, buscando siempre que esto sirva para lograr un excelente debate en cada comité.</p>
                <Link href="secretarias/academica">
                  <div className="secretariesC__carousel__card__desc__more"> <FaQuestion /> </div>
                </Link>
              </div>
            </div>

            <div className="secretariesC__carousel__card">
              <img src="/svg/secretaria desarrollo.svg" alt="académica" className="secretariesC__carousel__card__img" />
              <div className="secretariesC__carousel__card__desc">
                <h1>Secretaría de Desarrollo</h1>
                <p>La secretaria de desarrollo sostenible tiene como propósito fomentar y crear un trabajo en conjunto de las mesas directivas para la preparación de tópicos enfocados a los Objetivos de Desarrollo Sostenible, así como su difusión con los delegados.
                Busca ser un apoyo para el desarrollo de una actitud investigativa, buena redacción y liderazgo.
                </p>
                <Link href="secretarias/desarrollo">
                  <div className="secretariesC__carousel__card__desc__more"> <FaQuestion /> </div>
                </Link>
              </div>
            </div>

            <div className="secretariesC__carousel__card">
              <img src="/svg/secretaria protocolo.svg" alt="académica" className="secretariesC__carousel__card__img" />
              <div className="secretariesC__carousel__card__desc">
                <h1>Secretaría de Protocolo</h1>
                <p>Corresponde a la Secretaría de Protocolo: asesorar a las Mesas Directivas, resolver disputas o preguntas protocolarias durante el debate y revisar el empleo correcto del protocolo en la cuarta edición del Modelo de Naciones Unidas del Plantel Azteca.</p>
                <Link href="secretarias/protocolo">
                  <div className="secretariesC__carousel__card__desc__more"> <FaQuestion /> </div>
                </Link>
              </div>
            </div>

            <div className="secretariesC__carousel__card">
              <img src="/svg/secretaria ingles.svg" alt="académica" className="secretariesC__carousel__card__img" />
              <div className="secretariesC__carousel__card__desc">
                <h1>Secretaría de Inglés</h1>
                <p>The English Secretary is responsible for impulsing the English language in the United Nations Model "AztecMUN" committees and demolishing every communication barrier within languages.</p>
                <Link href="secretarias/ingles">
                  <div className="secretariesC__carousel__card__desc__more"> <FaQuestion /> </div>
                </Link>
              </div>
            </div>

            <div className="secretariesC__carousel__card">
              <img src="/svg/secretaria logistica.svg" alt="académica" className="secretariesC__carousel__card__img" />
              <div className="secretariesC__carousel__card__desc">
                <h1>Secretaría de Logística</h1>
                <p>La secretaria de logística se encarga principalmente de la organización de las actividades en los días del modelo y de las sesiones previas a él. </p>
                <Link href="secretarias/logistica">
                  <div className="secretariesC__carousel__card__desc__more"> <FaQuestion /> </div>
                </Link>
              </div>
            </div>

            <div className="secretariesC__carousel__card">
              <img src="/svg/secretaria finanzas.svg" alt="académica" className="secretariesC__carousel__card__img" />
              <div className="secretariesC__carousel__card__desc">
                <h1>Secretaría de Finanzas</h1>
                <p>Esta secretaria se encarga principalmente de la generación de estrategias para conseguir los recursos económicos necesarios para el modelo, a través del contacto con patrocinadores, quienes tienen el interés de aportar al modelo, además de llevar un seguimiento del presupuesto conseguido con cada aportación.</p>
                <Link href="secretarias/finanzas">
                  <div className="secretariesC__carousel__card__desc__more"> <FaQuestion /> </div>
                </Link>
              </div>
            </div>

            <div className="secretariesC__carousel__card">
              <img src="/svg/secretaria digital.svg" alt="académica" className="secretariesC__carousel__card__img" />
              <div className="secretariesC__carousel__card__desc">
                <h1>Secretaría Digital</h1>
                <p></p>
                <Link href="secretarias/digital">
                  <div className="secretariesC__carousel__card__desc__more"> <FaQuestion /> </div>
                </Link>
              </div>
            </div>
          </Carousel>
        </section>

        <section className="gallery" id="gallery">
          <Carousel>
            <img src="/img/s1.jpeg" alt="aztecmun plantel azteca" />
            <img src="/img/s2.JPG" alt="aztecmun auditorio" />
            <img src="/img/s3.JPG" alt="aztecmun comité" />
            <img src="/img/s4.JPG" alt="aztecmun medalla" />
            <img src="/img/s5.jpg" alt="aztecmun secretarios" />
            <img src="/img/s6.JPG" alt="aztecmun secretarios" />
            <img src="/img/s7.JPG" alt="aztecmun comitré" />
            <img src="/img/s8.jpg" alt="aztecmun comité internacional de bioética" />
            <img src="/img/s9.JPG" alt="aztecmun anáhuac" />
            <img src="/img/s10.PNG" alt="aztecmun harvard" />
            <img src="/img/s12.jpg" alt="aztecmun senado de la república" />
          </Carousel>
        </section>
      </main>
    </div>
  )
}
