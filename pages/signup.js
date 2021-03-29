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

export default function signup() {
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
    createAccountWithEmail(data.email, data.password)
  }

  return (
    <div className="formWrapper">
      <Head>
        <title>Crear cuenta - AztecMUN 2021</title>
      </Head>

      {user === USER_STATES.NOT_LOGGED && (
        <form className="form" onSubmit={handleSubmit}>
          <Link href="/">
            <div className="close"> <AiOutlineClose /> </div>
          </Link>

          <h1>Crear Cuenta</h1>
          <div className="form__input">
            <input
              name="email"
              type="email"
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <label htmlFor="email">Correo Elctrónico</label>
          </div>

          <div className="form__input">
            <input
              name="password"
              type="password"
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <label htmlFor="password">Contraseña</label>
          </div>

          <div className="form__input">
            <select name="select" id="" required>
              <option disabled selected hidden>Participación</option>
              <option value="secretaria">Secretaría</option>
              <option value="comite">Comité</option>
              <option value="delegado">Delegado</option>
            </select>
          </div>

          <button className="form__button">Crear cuenta</button>
          <p>
            ¿Ya tienes cuenta?
            <span>
              <Link href="/login"> ¡Inicia Sesión! </Link>
            </span>
          </p>
        </form>
      )}
    </div>
  )
}
