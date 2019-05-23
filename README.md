# svelte-array-helper
A dead simple helper for modifying arrays in Svelte, and make the code more readable.

This library only contains the array methods, that mutate the array

## Installation
```
npm install svelte-array-helper
```

## Usage
``` javascript
// Import single static methods
import { push, pop, splice } from 'svelte-array-helper'

// Import class
import ArrayHelper from 'svelte-array-helper'
let arrayHelper = new ArrayHelper // <- Instaciate it
```

## Example
```
import { push } from 'svelte-array-helper'

let list = [0,1,2,3]

function addToList(itemToAdd) {
  list = push(list, itemToAdd) 
}
```

**Note**

All methods will return the modified array

### push(array, value)
```
push(array, value)
```

### pop()
```
push(array)
```

### splice(array, ...args)
```
splice(array, 0, 1, 'item1', 'item2' etc..)
```

## To be implemented

- copyWithin()
- fill()
- reverse()
- sort()
