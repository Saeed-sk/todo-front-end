export interface UserType {
    id: string
    name: string
    email: string
    phone?: string
    role?: string
}

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'error'
