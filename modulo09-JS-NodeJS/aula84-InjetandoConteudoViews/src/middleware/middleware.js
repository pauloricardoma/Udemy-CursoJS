exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVarialvelLocal = 'Este é o valor da variável local.';
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

// module.exports = (req, res, next) => {
//   next();
// };
