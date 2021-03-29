// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Icons
import { ImUser } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'

export default function protocolo() {
  return (
    <div className="secretaries">
      <Head>
        <title>Secretaría Protocolo | AztecMUN 2021</title>

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/svg/secretaria protocolo.svg" />
        <meta
          property="og:title"
          content="Secretaría Protocolo | AztecMUN 2021"
        />
        <meta
          property="og:description"
          content="La Secretaría Protocolo tiene como función asesorar a las Mesas Directivas, resolver disputas o preguntas protocolarias durante el debate y revisar el empleo correcto del protocolo."
        />
      </Head>

      <Link href="/">
        <div className="closeCommittees"> <AiOutlineClose /> </div>
      </Link>

      <div className="secretaries__logo">
        <img src="/svg/secretaria protocolo.svg" alt="secretaria protocolo" />
        <h1 className="secretaries__logo__title">Secretaría Protocolo</h1>
      </div>

      <img src="/img/div.png" alt="" className="secretaries__div" />

      <p className="secretaries__desc">
        Corresponde a la Secretaría de Protocolo: asesorar a las Mesas Directivas, resolver disputas o preguntas protocolarias durante el debate y revisar el empleo correcto del protocolo en la cuarta edición del Modelo de Naciones Unidas del Plantel Azteca.
      </p>

      <h1 className="secretaries__title-members"> Miembros </h1>
      <div className="secretaries__members">
        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--green">Secretaría</h1>
          <p className="secretaries__members__member--green">Areli Almaraz Medina </p>
        </div>

        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--red">Secretaría</h1>
          <p className="secretaries__members__member--red">Samaria Vargas Vera</p>
        </div>
      </div>

      <div className="secretaries__dots">
        <Link href="academica">
          <div className="secretaries__dots__dot">
            <p className="secretaries__dots__dot__message"> Academica </p>
          </div>
        </Link>
        <Link href="desarrollo">
          <div className="secretaries__dots__dot">
            <p className="secretaries__dots__dot__message"> Desarrollo </p>
          </div>
        </Link>
        <div className="secretaries__dots__dot secretaries__dots__dot--active">
          <p className="secretaries__dots__dot__message"> Protocolo </p>
        </div>
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
