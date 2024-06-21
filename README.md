# Proximity Words

## Overview

Welcome to **Proximity Words** – a dynamic and engaging web application designed to discover words that are just a step or two away from each other. Enter a word, and our clever algorithm will reveal words that are closely related by an edit distance of 1 or 2. Whether for fun or research, Proximity Words brings a playful twist to exploring language!

The project is used to find the minimum edit distance between two input words word1 and word2. The minimum edit distance is the minimum number of single-character operations (insertion, deletion, or substitution) required to transform one word into another.

## Files

### 1. index.html
The main HTML file that constructs the framework of our interactive web page. It features a text input for users to type their word, a submit button to trigger the search, and a display area to showcase the results.

### 2. style.css
The CSS file that styles the web page, ensuring an attractive and user-friendly interface. It defines the layout, colors, and aesthetics to make your experience delightful.

### 3. index.js
The JavaScript file that performs the computation of edit distances and dynamically updates the display with the results.

## Project Structure

```
.
├── index.html
├── style.css
└── index.js
```

## Detailed Description

### index.html
The `index.html` file sets up the core structure of the web page, providing elements for user interaction and result display.

### style.css
The `style.css` file enhances the visual appeal and usability of the web page with carefully crafted styles and layouts.

### index.js
The `index.js` file implements the core functionality of the application, including the edit distance calculation and result rendering.

## Usage

To use **Proximity Words**:
1. Open `index.html` in a web browser.
2. Enter a word in the input field.
3. Click the submit button to find words closely related to the input based on edit distance of 1 or 2.
4. View the results displayed below the input area.

# ADA
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

## Algorithm

### Dynamic Programming - Edit Distance Algorithm

The project utilizes the **Edit Distance Algorithm** with **Dynamic Programming** to determine the minimum number of single-character edits required to transform one word into another. This approach efficiently calculates the edit distance, enabling the discovery of words closely related to the user input.

### How It Works

1. **Initialization**: 
   - A 2D array `dp` of size `(n1+1) x (n2+1)` is initialized, where `n1` and `n2` are the lengths of the two words being compared.
   
2. **Base Case**: 
   - If one of the strings is empty, the edit distance is simply the length of the other string. This is initialized in the `dp` array.
   
3. **Filling the DP Table**: 
   - Iteratively compute the minimum edit distance by considering:
     - Matching characters (no edit required).
     - Insertion of a character.
     - Deletion of a character.
     - Substitution of a character.
   - Update the `dp` table accordingly until the entire matrix is filled.
   
4. **Result**: 
   - The minimum edit distance between the two words is found at `dp[0][0]`.

### Complexity

- **Time Complexity**: O(n1 * n2), where `n1` and `n2` are the lengths of the two words.
- **Space Complexity**: O(n1 * n2) for the DP table.

This efficient algorithm allows the application to handle a wide range of words and compute the required edit distances in real time.

Thankyou : ) 
