const NAME = 'name'
const ADRESS = 'adress'
const EMAIL = 'email'
const PASSWORD = 'password'

const baseSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    [ NAME ]: { type: 'string', minLength: 3 },
    [ ADRESS ]: { type: 'string' },
    [ EMAIL ]: { type: 'string' },
  },
}

export const createUserDtoSchema = {
  ...baseSchema,
  required: [NAME, PASSWORD,EMAIL],
}

export const updateUserDtoSchema = {
  ...baseSchema,
  anyOf: [{ required: [ EMAIL ] }, { required: [ ADRESS ] }, { required: [ NAME ] }],
}
