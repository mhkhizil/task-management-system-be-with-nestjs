import Joi, { string } from '@hapi/joi';

export const configSchemaValidation = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required().default(5432),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  STAGE:Joi.string().required(),
  JWT_SECRET:string().required()
});
