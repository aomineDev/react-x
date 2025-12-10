export interface Challenge {
  _id: string
  lesson: number
  files: Record<string, string>
  user: User
  createdAt: string
  updatedAt: string
}
