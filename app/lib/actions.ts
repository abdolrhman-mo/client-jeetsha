'use server'

import { redirect } from 'next/navigation'

export const redirectHome = () => {
    redirect('/')
}

export const abdoRedirect = (link: string) => {
    redirect(link)
}