// VARIABLES HOMEWORK – PROFILE CARD
// -------------------------------------------------
// GOAL: Create a fake "profile card" using only variables and console.log.
// Open DevTools → Console to see your results.

// STEP 1: Create a variable called fullName (string) with your full name.

const fullName = "Stephen Chamberlain";

// STEP 2: Create a variable called profileAge (number) with your age.

const profileAge = 29;

// STEP 3: Create a variable called country (string) with the country you live in.

const country = "United States";

// STEP 4: Create a variable called favoriteHobby (string) with a hobby you enjoy.

let favoriteHobby = "Playing video games";

// STEP 5: Create a variable called isStudent (boolean) with true or false,
//         depending on whether you consider yourself a student right now.

const isStudent = true;

// STEP 6: Use console.log to print the profile in a clear format, for example:
//         --- PROFILE CARD ---
//         Name: (your name)
//         Age: (your age)
//         Country: (your country)
//         Hobby: (your hobby)
//         Is student? (true/false)

console.log("--- PROFILE CARD ---");
console.log("Name: " + fullName);
console.log("Age: " + profileAge);
console.log("Country: " + country);
console.log("Hobby: " + favoriteHobby);
console.log("Is student? " + isStudent);

// STEP 7: Change at least ONE of your variables (for example, favoriteHobby)
//         to a new value and then log the entire profile card again
//         to show the updated information.
favoriteHobby = "Playing Disc Golf";
console.log("--- UPDATED PROFILE CARD ---");
console.log("Name: " + fullName);
console.log("Age: " + profileAge);
console.log("Country: " + country);
console.log("Hobby: " + favoriteHobby);
console.log("Is student? " + isStudent);
