export interface UserType {
    id: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    role?: string
}

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'error'
