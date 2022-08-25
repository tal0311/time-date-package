# How to use

To deploy this project run

```bash
const formatDateTime = require('time-date-formatter')
```

## Arguments

The function can accept 3 arrguments:

1. Date format [string]. requierd!
2. seperator [separator-optional] - will default to '/'
3. timeStamp [optional]. will default to 'Date.now()'.

```bash
  formatDateTime('Array')
  // formatDateTime('DD/MM/YYYY', [timeStamp])
// [ 'Sat', 'Jun', '04', '2022', '02:18:08' ]

formatDateTime('HH:MM', '/', 405122400000)
// formatDateTime('HH:MM', [separator-optional],[timeStamp])
// 02:18

formatDateTime('HH:MM:SS',':',405122400000)
// formatDateTime('HH:MM:SS', [separator-optional],[timeStamp])
// 02:18:08

formatDateTime('AM/PM', ':', 405122400000)
// 2:18:08 AM

formatDateTime('DD/MM/YYYY', '.', 405122400000)
// formatDateTime('DD/MM/YYYY', [separator-optional],[timeStamp])
// 4.6.2022
// 4/6/2022 default

formatDateTime('MM/DD/YYYY', 'K', 405122400000)
// formatDateTime('MM/DD/YYYY', [separator-optional], [timeStamp])
// 6k4k2022
// 6/4/2022 default

```
