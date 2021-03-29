// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Icons
import { ImUser } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'

export default function logistica() {
  return (
    <div className="secretaries">
      <Head>
        <title>Secretaría Logística | AztecMUN 2021</title>

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/svg/secretaria logistica.svg" />
        <meta
          property="og:title"
          content="Secretaría Logística | AztecMUN 2021"
        />
        <meta
          property="og:description"
          content="La secretaria de logística se encarga principalmente de la organización de las actividades en los días del modelo."
        />
      </Head>

      <Link href="/">
        <div className="closeCommittees"> <AiOutlineClose /> </div>
      </Link>

      <div className="secretaries__logo">
        <img src="/svg/secretaria logistica.svg" alt="secretaria logística" />
        <h1 className="secretaries__logo__title">Secretaría Logística</h1>
      </div>

      <img src="/img/div.png" alt="" className="secretaries__div" />

      <p className="secretaries__desc">
        La secretaria de logística se encarga principalmente de la organización de las actividades en los días del modelo y de las sesiones previas a él. Organizan los horarios y las salas donde se realizarán las sesiones de trabajo correspondientes del modelo. También como secretaría de logística, nos encargamos de llevar a cabo el registro de los delegados y personas que deseen ser parte del modelo, para así llevar el control de nuestros participantes.
      </p>

      <h1 className="secretaries__title-members"> Miembros </h1>
      <div className="secretaries__members">
        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--green">Secretaría</h1>
          <p className="secretaries__members__member--green">Guillermo Aranda Ochoa</p>
        </div>

        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--red">Sub-Secretaría</h1>
          <p className="secretaries__members__member--red">Yolia Arizay Jaime Rubio</p>
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
        <div className="secretaries__dots__dot secretaries__dots__dot--active">
          <p className="secretaries__dots__dot__message"> Logística </p>
        </div>
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
