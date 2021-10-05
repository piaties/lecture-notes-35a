// Ticket cost by age for Museam
/* Adults $6
Children $5
Seniors 65+ $4
Children 12-4 $3
children <= 3 are free
Members are free */

// 1) check if member or age is <3
    // true print 'free'
//else
// 2) get age
// 3) if age > 65 print $4
// 4) if else age <= 12 print $4
// 5) else print $6

const age = 34;
const member = false
//const res = true

if (age <= 3 || member === true)
    console.log('Your admission is free')
else if (age <= 12)
    console.log("Your admission is $3")
else
    console.log("Your admission is $6")

