// React and Next imports
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Firebase
import { loginWithEmailAndPass } from 'firebase/client'
import useUser, { USER_STATES } from 'hooks/useUser'

// Icons
import { AiOutlineClose } from 'react-icons/ai'

export default function login() {
  const user = useUser()
  const router = useRouter()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    user && router.replace('/profile')
  }, [user])

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    loginWithEmailAndPass(data.email, data.password)
  }

  return (
    <div className="formWrapper">
      <Head>
        <title>Iniciar Sesión - AztecMUN 2021</title>
      </Head>

      {user === USER_STATES.NOT_LOGGED && (
        <form className="form" onSubmit={handleSubmit}>
          <Link href="/">
            <div className="close"> <AiOutlineClose /> </div>
          </Link>

          <h1>Inicia Sesión</h1>
          <div className="form__input">
            Correo Electrónico
            <input
              name="email"
              type="email"
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="form__input">
            Contraseña
            <input
              name="password"
              type="password"
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </div>
          <button className="form__button">Iniciar Sesión</button>
          <p>
            ¿Aún no tienes cuenta?
            <span>
              <Link href="/signup"> ¡Crea Una! </Link>
            </span>
          </p>
        </form>
      )}
    </div>
  )
}
