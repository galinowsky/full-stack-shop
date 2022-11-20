
export const createUserDtoSchema = {
    type: 'object',
    required: ['email', 'password'],
    additionalProperties:false,
    properties: {
      email: { type: 'string' },
      name: { type: 'string' },
    },
  }
  