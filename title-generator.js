const first = ["The Wasp", "Persephone", "Cataclysm", "Esme", "Scarab", "Slapstick", "The Cordwainer", "The Croupier", "Geminorum ", "Procyon", "Sisyphean", "Virginis ", "Alphard", "Apiary", "Thorax", "The Antediluvian ", "Upper-yardmen", "The Mewling", "Gander", "Callipygean", "Saddle Chock", "The Garnet", "The Dowager", "The Chimneysweep"];
const second = ["The Millner", "The Bean", "The Plum", "The Cockle", "The Glazier", "Vaginarius", "The Peacock", "Armorsmith", "Bee Bread", "Calliope", "Milk Thistle", "Yawl", "Wale", "The Vessel and Voyl", "Polonius ", "The Tabernacle", "The Tailshaft", "Capillaries", "Thole", "The Timber Drogher", "The Timoneer", "The Tompion & Tonnage", "The Sextant & The Shackle"];

const generator = function(first, second) {
    let indexFirst = Math.floor( Math.random() * first.length);
    let indexSecond = Math.floor( Math.random() * second.length);
    console.log("first", indexFirst)
    console.log("second", indexSecond)
    return first[indexFirst] + ' & ' + second[indexSecond];
} 

document.querySelector("#song-title").textContent = generator(first, second);
