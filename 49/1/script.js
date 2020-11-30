
// Med mellanrum()
let str = ''
for (let i = 0; i < 10; i++) {
    str = str + '* '
}

console.log(str)

// Upp och nedvänd triangel
let str = ''
for (let i = 10; i > 0; i--) {
    for (let j = 10; j > i; j--) {
        str = str + '*'
    }
    str = str + '\n' 
}

console.log(str)

// Kvadrat
let str = ''
for (let i = 5; i < 6;) {
    for (let j = 5; j < i;) {
        str = str + '*'
    }
    str = str + '\n' 
}

console.log(str)

// Romb
let str = ' '
for (let i = 5; i < 6;) {
    for (let j = str + 5; j < i; str + " ") {
        str = str + '*'
    }
    str = str + '\n' 
}

console.log(str)

// Det kanske funkar?, Ska testa när ja har tillgång till skoldator.