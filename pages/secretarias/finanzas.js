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
        <title>Secretaría Finanzas | AztecMUN 2021</title>

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/svg/secretaria finanzas.svg" />
        <meta
          property="og:title"
          content="Secretaría Finanzas | AztecMUN 2021"
        />
        <meta
          property="og:description"
          content="Esta secretaria se encarga principalmente de la generación de estrategias para conseguir los recursos económicos."
        />
      </Head>

      <Link href="/">
        <div className="closeCommittees"> <AiOutlineClose /> </div>
      </Link>

      <div className="secretaries__logo">
        <img src="/svg/secretaria finanzas.svg" alt="secretaria finanzas" />
        <h1 className="secretaries__logo__title">Secretaría Finanzas</h1>
      </div>

      <img src="/img/div.png" alt="" className="secretaries__div" />

      <p className="secretaries__desc">
        Esta secretaria se encarga principalmente de la generación de estrategias para conseguir los recursos económicos necesarios para el modelo, a través del contacto con patrocinadores, quienes tienen el interés de aportar al modelo, además de llevar un seguimiento del presupuesto conseguido con cada aportación.
      </p>

      <h1 className="secretaries__title-members"> Miembros </h1>
      <div className="secretaries__members">
        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--green">Secretaría</h1>
          <p className="secretaries__members__member--green">Diego Campos Rojo</p>
        </div>

        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--red">Sub-Secretaría</h1>
          <p className="secretaries__members__member--red">Alexis Emmanuel Sosa Ayala</p>
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
        <div className="secretaries__dots__dot secretaries__dots__dot--active">
          <p className="secretaries__dots__dot__message"> Finanzas </p>
        </div>
        <Link href="digital">
          <div className="secretaries__dots__dot">
            <p className="secretaries__dots__dot__message"> Digital </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
