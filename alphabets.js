const consonant = ['b','c','d','f','g','h','j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v','w','x','y', 'z']
const vowels = ['a', 'e', 'i', 'o', 'u'];
const alphabets = ['a','b','c','d','e','f','g','h','i','j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v','w','x','y', 'z']
const vowel_a_combinations = ['a', 'ai', 'ay', 'au', 'aw']
const vowel_e_combinations = ['e', 'ea', 'ee', 'ew', 'eigh', 'ei', 'ey']
const vowel_i_combinations = ['i', 'ie', 'igh']
const vowel_o_combinations = ['o', 'oa', 'oe','oi', 'oy', 'oo', 'ou', 'ow']
const vowel_u_combinations = ['u', 'ui']

export default {
    consonant: consonant,
    vowels: vowels,
    alphabets: alphabets,
    ACombo:vowel_a_combinations,
    ECombo: vowel_e_combinations,
    ICombo:vowel_i_combinations,
    OCombo:vowel_o_combinations,
    UCombo:vowel_u_combinations
}