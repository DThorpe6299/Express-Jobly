const { sqlForPartialUpdate } = require('./sql');
const { BadRequestError } = require("../expressError");

describe('sqlForPartialUpdate', () => {
  test('Throws BadRequestError if dataToUpdate is empty', () => {
    const emptyData = {};
    const jsToSql = { firstName: 'first_name' };
    expect(() => sqlForPartialUpdate(emptyData, jsToSql)).toThrow(BadRequestError);
  });

  test('Generates correct setCols and values', () => {
    const dataToUpdate = {
      firstName: 'Aliya',
      age: 32
    };
    const jsToSql = { firstName: 'first_name' };
    const { setCols, values } = sqlForPartialUpdate(dataToUpdate, jsToSql);
    expect(setCols).toEqual('first_name=$1, age=$2');
    expect(values).toEqual(['Aliya', 32]);
  });
});