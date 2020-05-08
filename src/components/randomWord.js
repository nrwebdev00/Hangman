var Level_1_Words = [
    "cash",
    "drum",
    "catch",
    "rose",
    "cake",
    "cutter",
    "newer",
    "zoom",
    "candy",
    "coal",
    "family",
    "cheer",
    "hundred",
    "animal",
    "exceed"
]

var Level_2_Words= [
    'whine',
    'picture',
    'whittle',
    'shaven',
    'eroding',
    'abstract',
    'cannoli',
    'alligator',
    'distant',
    'badger',
    'abdicate',
    'expand',
    'petrify',
    'amendment',
    'skeptical'
]

var Level_3_Words = [
    'caricature',
    'shakespeare',
    'abandoning',
    'aboriginals',
    'accreditee',
    'uncanonical',
    'antithesis',
    'argumentative',
    'backstrokes',
    'beachcomber',
    'blasphemous',
    'geographical',
    'extraterrestrials',
    'altocumulus',
    'apartheid'
]
function levelOneWord(){
    return Level_1_Words[Math.floor(Math.random() * Level_1_Words.length)];
}
function levelTwoWord(){
    return Level_2_Words[Math.floor(Math.random() * Level_2_Words.length)];
}
function levelThreeWord(){
    return Level_3_Words[Math.floor(Math.random() * Level_3_Words.length)];
}

export { levelOneWord, levelTwoWord, levelThreeWord }