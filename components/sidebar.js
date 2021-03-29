// React abd Next imports
import React from 'react'
import Link from 'next/link'

// Firebase
import useUser, { USER_STATES } from '../hooks/useUser'
import { signOut } from '../firebase/client'

// Icons
import { AiOutlineQuestion } from 'react-icons/ai'
import { IoPeopleOutline } from 'react-icons/io5'
import { HiUserCircle } from 'react-icons/hi'
import { TiKeyOutline, TiCameraOutline } from 'react-icons/ti'
import { GiPublicSpeaker } from 'react-icons/gi'
import { FiLogOut } from 'react-icons/fi'

export default function Sidebar() {
  const user = useUser()

  return (
    <nav className="sidebar">
      <li className="sidebar__link sidebar__link--red">
        <a href="#about"> <AiOutlineQuestion /> </a>
        <span>Quiénes Somos</span>
      </li>
      <li className="sidebar__link sidebar__link--green">
        <a href="#committees"> <IoPeopleOutline /> </a>
        <span>Comités</span>
      </li>
      <li className="sidebar__link sidebar__link--orange">
        <a href="#secretaries"> <GiPublicSpeaker /> </a>
        <span>Secretarías</span>
      </li>
      <li className="sidebar__link sidebar__link--red">
        <a href="#gallery"> <TiCameraOutline /> </a>
        <span>Galería</span>
      </li>

      {user === USER_STATES.NOT_LOGGED && (
        <Link href="/signup">
          <li className="sidebar__link sidebar__link--greenAqua">
            <a> <TiKeyOutline /> </a>
            <span>Crear Cuenta</span>
          </li>
        </Link>
      )}

      {user && (
        <>
          <Link href="/profile">
            <li className="sidebar__link sidebar__link--greenAqua">
              <a> <HiUserCircle /> </a>
              <span>Perfil</span>
            </li>
          </Link>
          <li className="sidebar__link sidebar__link--blue" onClick={signOut}>
            <a> <FiLogOut /> </a>
            <span>Cerrar Sesión</span>
          </li>
        </>
      )}
    </nav>
  )
}
