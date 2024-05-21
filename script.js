const words = {
    adjectives: ["pimeä", "hiljainen", "salaperäinen", "loistava", "unelias"],
    nouns: ["yö", "tähti", "kuu", "varjo", "uni"],
    verbs: ["kuiskaa", "leijuu", "valaisee", "kietoo", "vaeltaa"],
    prepositions: ["yli", "alla", "vieressä", "halki", "ympäri"],
    articles: ["keskiyön", "yön", "tähtien", "kuun", "varjojen"]
};

function getRandomWord(type) {
    const wordArray = words[type];
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}

function generateLine() {
    const article = getRandomWord('articles');
    const adjective = getRandomWord('adjectives');
    const noun = getRandomWord('nouns');
    const verb = getRandomWord('verbs');
    const preposition = getRandomWord('prepositions');
    
    return `${article} ${adjective} ${noun} ${verb} ${preposition}.`;
}

function generatePoem() {
    const poemLines = [];
    for (let i = 0; i < 4; i++) {
        const line = generateLine();
        // Korjaa virheet
        const lastChar = line.charAt(line.length - 1);
        if (lastChar === '.') {
            line.slice(0, -1);
        }
        poemLines.push(line);
    }
    
    document.getElementById('poem').innerHTML = poemLines.join('<br>');
}

// Generate a poem on page load
generatePoem();

