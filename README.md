# Gaurav-Meena-ADA-Assignment
The project is used to find the minimum edit distance between two input words word1 and word2. The minimum edit distance is the minimum number of single-character operations (insertion, deletion, or substitution) required to transform one word into another.

The algorithm used to find the minimum edit distance is known as the Levenshtein distance or edit distance algorithm. It is a classic dynamic programming algorithm used in various applications like spell checking, DNA sequence analysis, and more.

Here's a breakdown of how the code works:

The minDistance function takes two words, word1 and word2, as input parameters.
It initializes a 2D array dp, where dp[i][j] will store the minimum edit distance between the substring word1[i:] and word2[j:].
It populates the bottom and right borders of the dp array with initial values, representing the distances between each character of word1 and word2 with an empty string.
It then iterates through the dp array, starting from the end of word1 and word2, and computes the minimum edit distance by considering three possible operations:
If the characters at the current positions are the same, no operation is needed, and the distance remains the same as the next substring's distance: ans = dp[i + 1][j + 1];
If the characters are different, the minimum distance can be obtained by considering the cost of three possible operations: insertion (op1), deletion (op2), or substitution (op3). The minimum distance is then updated accordingly: ans = Math.min(op1, Math.min(op2, op3));
Finally, the function returns the minimum edit distance between word1 and word2, which is stored in dp[0][0].
The running function, which is called when the script is executed, reads a list of words from the inputD, inputD1, inputD2, and inputD3 variables, and then takes user input from an HTML input field (myText). For each word in the list, it calculates the minimum edit distance with the user input using the minDistance function. If the distance is either 1 or 2, it displays the matched words (up to 10 matches) in an HTML element with the id "answerPara".

In summary, this code is used to search for words in a predefined list that have a minimum edit distance of 1 or 2 with the user's input word. The algorithm used is the Levenshtein distance algorithm.
