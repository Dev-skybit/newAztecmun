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
        <title>Secretaría Inglés | AztecMUN 2021</title>

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/svg/secretaria ingles.svg" />
        <meta
          property="og:title"
          content="Secretaría Inglés | AztecMUN 2021"
        />
        <meta
          property="og:description"
          content="The English Secretary is responsible for impulsing the English language in the United Nations Model 'AztecMUN'."
        />
      </Head>

      <Link href="/">
        <div className="closeCommittees"> <AiOutlineClose /> </div>
      </Link>

      <div className="secretaries__logo">
        <img src="/svg/secretaria ingles.svg" alt="secretaria ingles" />
        <h1 className="secretaries__logo__title">Secretaría Inglés</h1>
      </div>

      <img src="/img/div.png" alt="" className="secretaries__div" />

      <p className="secretaries__desc">
        The English Secretary is responsible for impulsing the English language in the United Nations Model "AztecMUN" committees and demolishing every communication barrier within languages. <br /> <br />
        We work together with the academic and protocol secretaries to translate different committees' documents to ensure the accurate use of English. <br /> <br />
        It is our duty as English secretary to train the directive chairs in instances such as grammar, reading, writing, and pronunciation in English so that the chairs can help their delegates at the time of the debate and have good results during the United Nations Model. <br /> <br />
        We are committed to demonstrating that a different language does not represent an impediment to express our ideas. We work together to generate independent delegates seeking to change real problems and develop themselves completely as English speakers.

      </p>

      <h1 className="secretaries__title-members"> Members </h1>
      <div className="secretaries__members">
        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--green">Secretary</h1>
          <p className="secretaries__members__member--green">Sofía Ivonne Gómez Contreras </p>
        </div>

        <div className="secretaries__members__member">
          <div className="secretaries__members__member__img"> <ImUser /> </div>
          <h1 className="secretaries__members__member--red">Sub-Secretary</h1>
          <p className="secretaries__members__member--red">Brenda Aline Collazo Díaz </p>
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
        <div className="secretaries__dots__dot  secretaries__dots__dot--active">
          <p className="secretaries__dots__dot__message"> Inglés </p>
        </div>
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
