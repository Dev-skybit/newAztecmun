// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Icons
import { ImUser } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'

export default function digital() {
  return (
    <div className="secretaries">
      <Head>
        <title>Secretaría Digital | AztecMUN 2021</title>

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/svg/secretaria digital.svg" />
        <meta
          property="og:title"
          content="Secretaría Digital | AztecMUN 2021"
        />
        <meta
          property="og:description"
          content="La secretaria general es la encargada de diseñar, programar y desarrollar la pagina web, teniendo en cuenta los parametros necesarios para una excelente experiencia de usuario. Además, participa el manejo de las redes sociales.."
        />
      </Head>

      <Link href="/">
        <div className="closeCommittees"> <AiOutlineClose /> </div>
      </Link>

      <div className="secretaries__logo">
        <img src="/svg/secretaria digital.svg" alt="secretaria digital" />
        <h1 className="secretaries__logo__title">Secretaría Digital</h1>
      </div>

      <img src="/img/div.png" alt="" className="secretaries__div" />

      <p className="secretaries__desc">
        La secretaria general es la encargada de diseñar, programar y desarrollar la pagina web, teniendo en cuenta los parametros necesarios para una excelente experiencia de usuario. Además, participa el manejo de las redes sociales.
      </p>

      <h1 className="secretaries__title-members"> Miembros </h1>
      <div className="secretaries__members">
        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--green">Secretaría</h1>
          <p className="secretaries__members__member--green">Armando Alamilla Cuellar</p>
        </div>

        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--red">Sub-Secretaría</h1>
          <p className="secretaries__members__member--red">Johann Eduardo Hernández Juárez</p>
        </div>

        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--blue">Sub-Secretaría</h1>
          <p className="secretaries__members__member--blue">Valería Berenice López Vargas</p>
        </div>

        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--orange">Sub-Secretaría</h1>
          <p className="secretaries__members__member--orange">Sonny Herrera Basurto</p>
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
          <div className="secretaries__dots__dot secretaries__dots__dot--active">
            <p className="secretaries__dots__dot__message"> Digital </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
