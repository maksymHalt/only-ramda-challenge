# Only Ramda Challenge

*Inspired by a video ["Ramda JS – An Introduction"](https://youtu.be/AINnOyUVEyI)*

This script uses only ramda library functions to handle data and transform it from this text files

*btc.csv*

```csv
Date	Open*	High	Low	Close**	Volume	Market Cap
Dec 21, 2020	23,474.46	24,059.98	22,159.37	22,803.08	45,852,713,981	423,625,088,584
Dec 20, 2020	23,861.77	24,209.66	23,147.71	23,477.30	37,844,228,422	436,129,331,482
Dec 19, 2020	23,132.87	24,085.86	22,826.47	23,869.83	38,487,546,580	443,399,267,277
Dec 18, 2020	22,806.80	23,238.60	22,399.81	23,137.96	40,387,896,275	429,781,092,528
Dec 17, 2020	21,308.35	23,642.66	21,234.68	22,805.16	71,378,606,374	423,576,934,966
Dec 16, 2020	19,418.82	21,458.91	19,298.32	21,310.60	44,409,011,479	395,799,863,746
```

*eth.csv*

```csv
Date	Open*	High	Low	Close**	Volume	Market Cap
Dec 21, 2020	638.32	646.85	600.84	609.82	14,419,493,621	69,475,834,115
Dec 20, 2020	659.19	659.92	625.01	638.29	13,375,855,442	72,711,065,645
Dec 19, 2020	654.62	668.77	646.62	659.30	12,830,893,778	75,095,087,629
Dec 18, 2020	642.92	662.70	632.36	654.81	15,756,303,983	74,575,304,995
Dec 17, 2020	636.15	673.83	628.75	642.87	25,479,532,147	73,206,412,681
Dec 16, 2020	589.38	636.64	582.04	636.18	15,817,248,373	72,436,347,872
```

to this data format

```js
[
  {
    date: 'Dec 21, 2020',
    btc: {
      open: '23,474.46',
      high: '24,059.98',
      low: '22,159.37',
      close: '22,803.08',
      volume: '45,852,713,981',
      marketCap: '423,625,088,584'
    },
    eth: {
      open: '638.32',
      high: '646.85',
      low: '600.84',
      close: '609.82',
      volume: '14,419,493,621',
      marketCap: '69,475,834,115'
    }
  },
  ...
]
```
