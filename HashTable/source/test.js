
// const hash = new HashTable()
// console.log(hash.hashCode('Gandalf'))
// hash.put('Gandalf','Gandalf@124')
// console.log(hash.get('Gandalf1'))



// import HashTable from './HashTable.js'
// const hash1 = new HashTable(); 
// console.log(hash1.hashCode('Ygritte'))



// import HashTableSeparateChaining from './hash-table-separate-chaining.js'
// const hash2 = new HashTableSeparateChaining(); 
// hash2.put('Ygritte', 'ygritte@email.com');  
// hash2.put('Nathan', 'nathan@email.com'); 
// hash2.put('Sargeras', 'sargeras@email.com');


// console.log(hash2)
// console.log(hash2.get('Ygritte'))
// console.log(hash2.get('Nathan'))
// console.log(hash2.get('Sargeras'))
// console.log(hash2.remove('Nathan'))
// console.log(hash2)
// console.log(hash2.remove('Sargeras'))
// console.log(hash2)
// console.log(hash2.get('Ygritte'))
// console.log(hash2.get('Nathan'))
// console.log(hash2.get('Sargeras'))



// console.log(hash2.)




import HashTableLinearProbing from './hash-table-linear-probing.js'
const hash = new HashTableLinearProbing(); 
hash.put('Ygritte', 'ygritte@email.com'); 
hash.put('Jonathan', 'jonathan@email.com'); 
hash.put('Jamie', 'jamie@email.com'); 
hash.put('Jack', 'jack@email.com'); 
hash.put('Jasmine', 'jasmine@email.com'); 
hash.put('Jake', 'jake@email.com'); 
hash.put('Nathan', 'nathan@email.com'); 
hash.put('Athelstan', 'athelstan@email.com'); 
hash.put('Sue', 'sue@email.com'); 
hash.put('Aethelwulf', 'aethelwulf@email.com'); 
hash.put('Sargeras', 'sargeras@email.com'); 
console.log(hash)
console.log(hash.get('Jamie'))
console.log(hash.get('Athelstan'))
