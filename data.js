let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
    },
];

// DO NOT MODIFY THE CODE ABOVE THIS LINE
// WRITE YOUR CODE BELOW THIS LINE


// Average sales -> for...of
console.log("------------Average sales -> for...of------------")

let averageSale = 0;

for (let item of bestSellingAlbums) {
    console.log(item.sale);
    averageSale += item.sale;
}
console.log("Sum of sale value is: " + averageSale)

averageSale = averageSale / bestSellingAlbums.length
console.log("Average is: " + averageSale)

// Average sales -> for...i
console.log("------------Average sales -> for...i------------")

averageSale = 0

for (let i = 0; i < bestSellingAlbums.length; i++) {
    console.log(bestSellingAlbums[i].sale)
    averageSale += bestSellingAlbums[i].sale
}

averageSale = averageSale / bestSellingAlbums.length
console.log("Average sale is: " + averageSale)

// Average age
console.log("\n" + "-------------Average age--------------" + "\n")

let averageAge = 0;
let currentYear = 2022
for (let item of bestSellingAlbums) {
    averageAge += (currentYear - item.year)
}

averageAge = averageAge / bestSellingAlbums.length
console.log("Average age is: " + averageAge)

// Newest album
console.log("\n" + "-----------Newest album------------" + "\n")

let newestAlbum = bestSellingAlbums[0]
console.log(newestAlbum)

for (let i = 0; i < bestSellingAlbums.length; i++) {
    if (newestAlbum.year < bestSellingAlbums[i].year) {
        newestAlbum = bestSellingAlbums[i]
        console.log("Compared album is newest then other.")
    }
    else if (newestAlbum.year === bestSellingAlbums[i].year) {
        console.log("Compared album is the same age.")
    }
    else {
        console.log("Compared album is older.")
    }
}
console.log(newestAlbum)

// Oldest album
console.log("\n" + "-----------Oldest album------------" + "\n")

let oldestAlbum = bestSellingAlbums[0]
console.log(oldestAlbum)

for (let i = 0; i < bestSellingAlbums.length; i++) {
    if (oldestAlbum.year > bestSellingAlbums[i].year) {
        oldestAlbum = bestSellingAlbums[i]
        console.log("Compared album is older.")
    }
    else if (oldestAlbum.year === bestSellingAlbums[i].year) {
        console.log("Compared album is the same age.")
    }
    else {
        console.log("Comared album is newer.")
    }
}
console.log(oldestAlbum)


// The albums of Eagles
console.log("\n" + "-----------The albums of Eagles------------" + "\n")

// // Albums of Eagles

// let albumsOfEagles = {
//     sales: bestSellingAlbums[4].sale + bestSellingAlbums[5].sale,
//     isBothSoftRock: bestSellingAlbums[4].genres[1] == bestSellingAlbums[5].genres[0]
// };

// Task 1 and 2

// let albumsOfEagles = {};
// let salesSum = 0;

// for ( let i = 0; i < bestSellingAlbums.length; i++) {
//     if (bestSellingAlbums[i].artist === "Eagles") {
//         salesSum += bestSellingAlbums[i].sale
//         console.log(bestSellingAlbums[i])
//     }
// }

// console.log(salesSum)
// console.log(albumsOfEagles)
// albumsOfEagles.sales = salesSum

// console.log(albumsOfEagles)

// Task 3

let albumsOfEagles = {};
let salesSum = 0;
let isBothSoftRock = true;

for (let i = 0; i < bestSellingAlbums.length; i++) {

    if (bestSellingAlbums[i].artist === "Eagles") {
        salesSum = salesSum + bestSellingAlbums[i].sale;
        console.log(bestSellingAlbums[i]);
        for (let j = 0; j < bestSellingAlbums[i].genres.length; j++) {

            if (bestSellingAlbums[i].genres[j] === "soft rock") {
                isBothSoftRock = true;
            }
        }

    }
}

albumsOfEagles.sales = salesSum;
albumsOfEagles.isBothSoftRock = isBothSoftRock
console.log(albumsOfEagles);

// Do you like it?
console.log("\n" + "-----------Do you like it------------" + "\n")



let iLikeIt = true;

for (let i = 0; i < bestSellingAlbums.length; i++) {
    if (bestSellingAlbums[i].artist === "Michael Jackson" || bestSellingAlbums[i].artist === "Whitney Houston") {
        bestSellingAlbums[i].iLikeIt = false
    } else {
        bestSellingAlbums[i].iLikeIt = true
    }
}
console.log(bestSellingAlbums)

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        { name: "averageSale", content: averageSale, type: "number" },
        { name: "averageAge", content: averageAge, type: "number" },
        { name: "newestAlbum", content: newestAlbum, type: "object" },
        { name: "oldestAlbum", content: oldestAlbum, type: "object" },
        { name: "albumsOfEagles", content: albumsOfEagles, type: "object" }
    ]
} catch (error) {
    toExport = { error: error.message }
}

export { toExport };

