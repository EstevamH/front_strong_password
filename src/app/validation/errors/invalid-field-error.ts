export class InvalidFieldError extends Error {
  constructor(readonly name: string = 'invalid') {
    super(`Formato inválido`);
    this.name = name;
  }
}
