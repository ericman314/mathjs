import { factory } from '../../utils/factory'
import { typeOf } from '../../utils/is'

const name = 'divideScalar'
const dependencies = ['typed', 'numeric', 'Unit']

export const createDivideScalar = /* #__PURE__ */ factory(name, dependencies, ({ typed, numeric, Unit }) => {
  /**
   * Divide two scalar values, `x / y`.
   * This function is meant for internal use: it is used by the public functions
   * `divide` and `inv`.
   *
   * This function does not support collections (Array or Matrix).
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x   Numerator
   * @param  {number | BigNumber | Fraction | Complex} y          Denominator
   * @return {number | BigNumber | Fraction | Complex | Unit}     Quotient, `x / y`
   * @private
   */
  const divideScalar = typed(name, {
    'number, number': function (x, y) {
      return x / y
    },

    'Complex, Complex': function (x, y) {
      return x.div(y)
    },

    'BigNumber, BigNumber': function (x, y) {
      return x.div(y)
    },

    'Fraction, Fraction': function (x, y) {
      return x.div(y)
    },

    'Unit, number | Fraction | BigNumber': function (x, y) {
      // TODO: move the divide function to Unit.js, it uses internals of Unit
      const one = numeric(1, typeOf(y))
      return Unit(divideScalar(((x.value === null) ? one : x.value)), xInv.unitString())
    },

    'number | Fraction | BigNumber, Unit': function (x, y) {
      let yInv = y.pow(-1)
      // TODO: move the divide function to Unit.js, it uses internals of Unit
      const one = numeric(1, typeOf(x))
      return Unit(divideScalar(x, ((y.value === null) ? one : y.value)), yInv.unitString())
    },

    'Unit, Unit': function (x, y) {
      console.log('divide(Unit, Unit)')
      console.log(x)
      console.log(y)
      return x.div(y)
    }
  })

  return divideScalar
})
