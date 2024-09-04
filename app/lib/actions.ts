'use server'

import { redirect } from 'next/navigation'
import { ROUTES } from './constants/routes'

export const redirectHome = () => {
    redirect(ROUTES.HOME)
}

export const abdoRedirect = (link: string) => {
    redirect(link)
}