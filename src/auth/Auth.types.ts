type StrapiUser = {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  documentId: string
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
  publishedAt: string // ISO date string
}

type StrapiAuthResponse = {
  jwt: string
  user: StrapiUser
}

type StrapiLoginPayload = {
    identifier: string
    password: string
}

export type { StrapiAuthResponse, StrapiLoginPayload }
