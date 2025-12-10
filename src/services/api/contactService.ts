import { fetchClient } from './fetchClient'

const service = '/api/contacts'

export const contactService = {
  create: (data: { name: string; email: string; message: string }) =>
    fetchClient(service, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
}
