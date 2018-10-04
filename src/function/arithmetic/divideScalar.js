'use strict'

function factory (type, config, load, typed) {
  const multiplyScalar = load(require('./multiplyScalar'))

  /**
   * Divide two scalar values, `x / y`.
   * This function is meant for internal use: it is used by the public functions
   * `divide` and `inv`.
   *
   * This function does not support collections (Array or Matrix), and does
   * not validate the number of of inputs.
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x   Numerator
   * @param  {number | BigNumber | Fraction | Complex} y          Denominator
   * @return {number | BigNumber | Fraction | Complex | Unit}                      Quotient, `x / y`
   * @private
   */
  const divideScalar = typed('divide', {
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

    'Unit, number': function (x, y) {
      const res = x.clone()
      // TODO: move the divide function to Unit.js, it uses internals of Unit
      res.value = divideScalar(((res.value === null) ? res._normalize(1) : res.value), y)
      return res
    },

    'Unit, Fraction': function (x, y) {
      const res = x.clone()
      // TODO: move the divide function to Unit.js, it uses internals of Unit
      res.value = divideScalar(((res.value === null) ? res._normalize(type.Fraction(1)) : res.value), y)
      return res
    },

    'Unit, BigNumber': function (x, y) {
      const res = x.clone()
      // TODO: move the divide function to Unit.js, it uses internals of Unit
      res.value = divideScalar(((res.value === null) ? res._normalize(type.BigNumber('1')) : res.value), y)
      return res
    },

    'number, Unit': function (x, y) {
      const res = y.pow(-1)
      // TODO: move the divide function to Unit.js, it uses internals of Unit
      res.value = multiplyScalar(((res.value === null) ? res._normalize(1) : res.value), x)
      return res
    },

    'Fraction, Unit': function (x, y) {
      const res = y.pow(-1)
      // TODO: move the divide function to Unit.js, it uses internals of Unit
      res.value = multiplyScalar(((res.value === null) ? res._normalize(type.Fraction(1)) : type.Fraction(res.value)), x)
      return res
    },

    'BigNumber, Unit': function (x, y) {
      let res = y.clone()
      if (res.value !== null) res.value = type.BigNumber(res.value)
      res = res.pow(-1)
      // TODO: move the divide function to Unit.js, it uses internals of Unit
      res.value = multiplyScalar(((res.value === null) ? res._normalize(type.BigNumber('1')) : type.BigNumber(res.value + '')), x)
      return res
    },

    'Unit, Unit': function (x, y) {
      return x.divide(y)
    }

  })

  return divideScalar
}

exports.factory = factory
