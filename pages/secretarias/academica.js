// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Icons
import { ImUser } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'

export default function academica() {
  return (
    <div className="secretaries">
      <Head>
        <title>Secretaría Académica | AztecMUN 2021</title>

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/svg/secretaria academica.svg" />
        <meta
          property="og:title"
          content="Secretaría Académica | AztecMUN 2021"
        />
        <meta
          property="og:description"
          content="La Secretaría Académica tiene como función coordinar, preparar y evaluar a las mesas."
        />
      </Head>

      <Link href="/">
        <div className="closeCommittees"> <AiOutlineClose /> </div>
      </Link>

      <div className="secretaries__logo">
        <img src="/svg/secretaria academica.svg" alt="secretaria acdemica" />
        <h1 className="secretaries__logo__title">Secretaría Académica</h1>
      </div>

      <img src="/img/div.png" alt="" className="secretaries__div" />

      <p className="secretaries__desc">
        La Secretaría Académica tiene como función coordinar, preparar y evaluar a las mesas, quienes fungirán como mentores de los delegados; para una correcta implementación y desarrollo de los tópicos, buscando siempre que esto sirva para lograr un excelente debate en cada comité. <br /> <br />
        Es su deber prepararlos en el ámbito académico en aspectos como: los Modelos de Naciones Unidas y su papel para generar un cambio en la sociedad, plena comprensión de las funciones de la ONU y el desarrollo de sus habilidades de redacción de documentos, así como apoyarlos en la generación del material de apoyo que se utilizará durante el modelo y revisar las fuentes que se utilizarán en el foro, entre otras. Todo esto para generar delegados comprometidos a cambiar la situación actual mundial.
      </p>

      <h1 className="secretaries__title-members"> Miembros </h1>
      <div className="secretaries__members">
        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--green">Secretaría</h1>
          <p className="secretaries__members__member--green">America Elizabeth Egoavil Bernal</p>
        </div>

        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--red">Sub-Secretaría</h1>
          <p className="secretaries__members__member--red">Carlos Yahir Herrera Rodríguez</p>
        </div>
      </div>

      <div className="secretaries__dots">
        <div className="secretaries__dots__dot secretaries__dots__dot--active">
          <p className="secretaries__dots__dot__message"> Academica </p>
        </div>
        <Link href="desarrollo">
          <div className="secretaries__dots__dot">
            <p className="secretaries__dots__dot__message"> Desarrollo </p>
          </div>
        </Link>
        <Link href="protocolo">
          <div className="secretaries__dots__dot">
            <p className="secretaries__dots__dot__message"> Protocolo </p>
          </div>
        </Link>
        <Link href="ingles">
          <div className="secretaries__dots__dot">
            <p className="secretaries__dots__dot__message"> Inglés </p>
          </div>
        </Link>
        <Link href="logistica">
          <div className="secretaries__dots__dot">
            <p className="secretaries__dots__dot__message"> Logística </p>
          </div>
        </Link>
        <Link href="finanzas">
          <div className="secretaries__dots__dot">
            <p className="secretaries__dots__dot__message"> Finanzas </p>
          </div>
        </Link>
        <Link href="digital">
          <div className="secretaries__dots__dot">
            <p className="secretaries__dots__dot__message"> Digital </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
