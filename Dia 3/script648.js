/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    function replaceWords(dictionary, sentence) {
        const rootMap = {};
        for (const root of dictionary) {
            const successor = root.slice(1);
            if (!(successor in rootMap) || root.length < rootMap[successor].length) {
                rootMap[successor] = root;
            }
        }
    
        const words = sentence.split(' ');
    
        const replacedWords = words.map(word => {
            for (const successor in rootMap) {
                if (word.endsWith(successor)) {
                    return word.slice(0, -successor.length) + rootMap[successor];
                }
            }
            return word;
        });
    
        const newSentence = replacedWords.join(' ');
        return newSentence;
    }
    
    const dictionary1 = ["cat", "bat", "rat"];
    const sentence1 = "the cattle was rattled by the battery";
    console.log(replaceWords(dictionary1, sentence1));
    
    const dictionary2 = ["a", "b", "c"];
    const sentence2 = "aadsfasf absbs bbab cadsfafs";
    console.log(replaceWords(dictionary2, sentence2));
    };