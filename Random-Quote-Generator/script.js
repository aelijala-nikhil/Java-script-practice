const quotes = [
    "Act as if what you do makes a difference. It does.",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal.",
    "Never bend your head. Always hold it high.",
    "Believe in yourself.",
    "I can't change the wind, but I can adjust my sails.",
    "Try to be a rainbow in someone's cloud.",
    "You are never too old to set another goal.",
    "The only way to do great work is to love what you do.",
    "If you can dream it, you can do it.",
    "Keep your face always toward the sunshine.",
    "Opportunities don't happen. You create them.",
    "Once you choose hope, anything’s possible.",
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don't take.",
    "The power of imagination makes us infinite.",
    "Turn your wounds into wisdom.",
    "Change your thoughts and you change your world.",
    "Happiness depends upon ourselves.",
    "It always seems impossible until it's done."
]

const usedIndexes = new Set();
const quoteText = document.getElementById("quote");



function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if (usedIndexes.has(randomIdx)){
            continue
        }

        const quote = quotes[randomIdx];
        quoteText.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}