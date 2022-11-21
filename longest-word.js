function getLongestWords(sentence) {
    const words = sentence.split(' ');
    const sortedWords = words.sort((prev, next) => next.length - prev.length);
    const longestWords = sortedWords.filter((item) => item.length === sortedWords[0].length).join(' ');

    return longestWords;
}

getLongestWords('What is the average airspeed velocity of an unladen swallow');
