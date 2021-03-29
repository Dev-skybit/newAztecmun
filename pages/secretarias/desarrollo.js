// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Icons
import { ImUser } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'

export default function desarrollo() {
  return (
    <div className="secretaries">
      <Head>
        <title>Secretaría Desarrollo | AztecMUN 2021</title>

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/svg/secretaria academica.svg" />
        <meta
          property="og:title"
          content="Secretaría Desarrollo | AztecMUN 2021"
        />
        <meta
          property="og:description"
          content="La secretaria de desarrollo sostenible tiene como propósito fomentar y crear un trabajo en conjunto de las mesas directivas."
        />
      </Head>

      <Link href="/">
        <div className="closeCommittees"> <AiOutlineClose /> </div>
      </Link>

      <div className="secretaries__logo">
        <img src="/svg/secretaria desarrollo.svg" alt="secretaria descarollo" />
        <h1 className="secretaries__logo__title">Secretaría de Desarrollo</h1>
      </div>

      <img src="/img/div.png" alt="" className="secretaries__div" />

      <p className="secretaries__desc">
        La secretaria de desarrollo sostenible tiene como propósito fomentar y crear un trabajo en conjunto de las mesas directivas para la preparación de tópicos enfocados a los Objetivos de Desarrollo Sostenible, así como su difusión con los delegados. <br /> <br />
        Busca ser un apoyo para el desarrollo de una actitud investigativa, buena redacción y liderazgo. <br /> <br />
        Como secretaria de Desarrollo Sostenible se promueve la iniciativa de los diecisiete ODS, impulsada por Naciones Unidas, y se busca adoptar medidas para generar la prosperidad económica compartida, el desarrollo social y la protección ambiental para todos los países. <br /> <br />
        La integración de esta secretaria al Modelo de Naciones Unidas “AztecMUN”, brinda un giro para solucionar los problemas sociales más relevantes del siglo XXI.
      </p>

      <h1 className="secretaries__title-members"> Miembros </h1>
      <div className="secretaries__members">
        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--green">Secretaría</h1>
          <p className="secretaries__members__member--green">Karen Lizeth Herrera Rodríguez</p>
        </div>
      </div>

      <div className="secretaries__dots">
        <Link href="academica">
          <div className="secretaries__dots__dot">
            <p className="secretaries__dots__dot__message"> Academica </p>
          </div>
        </Link>
        <div className="secretaries__dots__dot  secretaries__dots__dot--active">
          <p className="secretaries__dots__dot__message"> Desarrollo </p>
        </div>
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
