const R = require('ramda');
const fs = require('fs');
const path = require('path');

const readFile = path => fs.readFileSync(path, { encoding: 'utf-8' });

const capitalize = R.converge(R.concat, [R.pipe(R.head, R.toUpper), R.pipe(R.tail, R.toLower)]);
const toCamelCase = R.pipe(
  R.match(/[a-zA-Z\d]+/g),
  R.converge(R.concat, [R.pipe(R.take(1), R.map(R.toLower)), R.pipe(R.tail, R.map(capitalize))]),
  R.join('')
);

R.pipe(
  R.map(
    R.converge(R.pair, [
      R.pipe(path.parse, R.prop('name')),
      R.pipe(
        readFile,
        R.split('\n'),
        R.dropLast(1),
        R.map(R.split('\t'))
      )
    ]),
  ),
  R.fromPairs,
  R.map(R.pipe(
    R.converge(R.xprod, [
      R.pipe(R.take(1), R.map(R.map(R.pipe(R.replace(/\*/g, ''), toCamelCase)))),
      R.tail
    ]),
    R.map(R.apply(R.zipObj))
  )),
  R.mapObjIndexed((item, key) => R.map(R.pipe(
    R.converge(R.concat, [
      R.pipe(R.pick(['date']), R.of),
      R.pipe(R.omit(['date']), R.objOf(key), R.of)
    ]),
    R.mergeAll,
  ))(item)),
  R.values,
  R.flatten,
  R.sort(R.descend(R.prop('date'))),
  R.groupWith(R.eqProps('date')),
  R.map(R.mergeAll),
  console.log
)(['./input/btc.csv', './input/eth.csv'])

