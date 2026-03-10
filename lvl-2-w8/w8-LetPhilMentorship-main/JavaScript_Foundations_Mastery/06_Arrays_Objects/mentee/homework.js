// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.

// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)

let contacts = [
    {
       name: "Bill",
       phone: "852-183-1832",
       isFavorite: false
    },
    {
        name: "Rosie",
        phone: "194-832-1831",
        isFavorite: true

    },
    {
        name: "Susie",
        phone: "752-412-4122",
        isFavorite: false
    }
]

// STEP 3: Log the total number of contacts.

console.log(contacts)

// STEP 4: Log the name of the first contact.

console.log(contacts[0].name)

// STEP 5: Update one contact’s isFavorite value.

contacts[2].isFavorite = true

// STEP 6: Add (push) a new contact object.

contacts.push({
    name: "Sophie",
    phone: "123-456-7890",
    isFavorite: false
})

// STEP 7: Log the updated contacts array.

console.log(contacts)