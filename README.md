# svelte-array-helper
A dead simple helper for modifying arrays in Svelte, and making the code more readable.

This library only contains the array methods that mutate the array.

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
``` javascript
import { push } from 'svelte-array-helper'

let list = [0,1,2,3]

function addToList(itemToAdd) {
  list = push(list, itemToAdd)
}
```

**Note**

All methods will return the modified array

### push(array, value)
``` javascript
push(array, value)
```

### pop()
``` javascript
push(array)
```

### splice(array, ...args)
``` javascript
splice(array, 0, 1, 'item1', 'item2' etc..)
```

### copyWithin(array, ...args)
``` javascript
copyWithin(array, ...arguments)
```

### fill(array, ...args)
``` javascript
fill(array, ...arguments)
```

### reverse(array)
``` javascript
reverse(array)
```

### sort(array, ...args)
``` javascript
sort(array, ...arguments)
```
