/*
Pendekatan divide & conquer bisa digunakan untuk memecah sekuens DNA 
menjadi bagian-bagian yang lebih kecil untuk diproses. Misalnya, 
kita bisa membagi sekuens DNA menjadi dua bagian hingga bagian tersebut 
menjadi cukup kecil untuk diproses secara efisien.
*/

// Function to divide the sequence into smaller parts
function divideSequence(sequence) {
    if (sequence.length <= 1) {
        return [sequence];
    }

    let mid = Math.floor(sequence.length / 2);
    let left = sequence.slice(0, mid);
    let right = sequence.slice(mid);

    return divideSequence(left).concat(divideSequence(right));
}

// Example usage
let dnaSequence = "ACTGACGT";
let dividedSequences = divideSequence(dnaSequence);
console.log(dividedSequences);


/*
Dynamic Programming
Dynamic programming bisa digunakan untuk menemukan alignment optimal antara dua sekuens DNA. 
Misalnya, kita bisa menggunakan algoritma Needleman-Wunsch untuk global alignment.
*/

// Function for Needleman-Wunsch algorithm for global alignment
function needlemanWunsch(seq1, seq2) {
    let m = seq1.length;
    let n = seq2.length;

    // Initialize scoring matrix
    let scoreMatrix = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    // Gap penalty
    let gapPenalty = -1;

    // Initialize the scoring matrix
    for (let i = 0; i <= m; i++) {
        scoreMatrix[i][0] = i * gapPenalty;
    }
    for (let j = 0; j <= n; j++) {
        scoreMatrix[0][j] = j * gapPenalty;
    }

    // Scoring function
    function score(a, b) {
        return a === b ? 1 : -1;
    }

    // Fill the scoring matrix
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let match = scoreMatrix[i - 1][j - 1] + score(seq1[i - 1], seq2[j - 1]);
            let deleteGap = scoreMatrix[i - 1][j] + gapPenalty;
            let insertGap = scoreMatrix[i][j - 1] + gapPenalty;
            scoreMatrix[i][j] = Math.max(match, deleteGap, insertGap);
        }
    }

    // Traceback to get the optimal alignment
    let align1 = '';
    let align2 = '';

    let i = m;
    let j = n;
    while (i > 0 && j > 0) {
        let currentScore = scoreMatrix[i][j];
        let diagonalScore = scoreMatrix[i - 1][j - 1];
        let upScore = scoreMatrix[i - 1][j];
        let leftScore = scoreMatrix[i][j - 1];

        if (currentScore === diagonalScore + score(seq1[i - 1], seq2[j - 1])) {
            align1 = seq1[i - 1] + align1;
            align2 = seq2[j - 1] + align2;
            i -= 1;
            j -= 1;
        } else if (currentScore === upScore + gapPenalty) {
            align1 = seq1[i - 1] + align1;
            align2 = '-' + align2;
            i -= 1;
        } else {
            align1 = '-' + align1;
            align2 = seq2[j - 1] + align2;
            j -= 1;
        }
    }

    // Add remaining gaps if necessary
    while (i > 0) {
        align1 = seq1[i - 1] + align1;
        align2 = '-' + align2;
        i -= 1;
    }
    while (j > 0) {
        align1 = '-' + align1;
        align2 = seq2[j - 1] + align2;
        j -= 1;
    }

    return {
        alignment1: align1,
        alignment2: align2,
        score: scoreMatrix[m][n]
    };
}

// Example usage
let sequence1 = "ACGTTG";
let sequence2 = "ACTTG";
let alignmentResult = needlemanWunsch(sequence1, sequence2);
console.log(alignmentResult);

/*
Gabungan Pendekatan
Kita bisa menggabungkan kedua pendekatan ini untuk mengoptimalkan pemetaan genom. 
Misalnya, kita bisa membagi sekuens besar menjadi potongan-potongan lebih kecil dan m
enggunakan dynamic programming untuk mencari alignment optimal pada masing-masing potongan tersebut.
*/

// Combining divide & conquer with dynamic programming
function optimizedGenomeMapping(sequence1, sequence2) {
    let parts1 = divideSequence(sequence1);
    let parts2 = divideSequence(sequence2);

    let alignments = [];

    for (let i = 0; i < parts1.length; i++) {
        for (let j = 0; j < parts2.length; j++) {
            let alignmentResult = needlemanWunsch(parts1[i], parts2[j]);
            alignments.push(alignmentResult);
        }
    }

    return alignments;
}

/*
Dalam kode ini, kita memecah sekuens DNA besar menjadi 
potongan-potongan yang lebih kecil menggunakan divideSequence. 
Kemudian, kita menggunakan algoritma Needleman-Wunsch (needlemanWunsch) 
untuk mencari alignment optimal antara potongan-potongan sekuens tersebut. 
Pendekatan ini memungkinkan kita untuk mengelola kompleksitas 
dan meningkatkan efisiensi dalam pemetaan genom.
*/

// Example usage
let fullSequence1 = "ACGTGACCTGAC";
let fullSequence2 = "ACTGACGTTGAC";
let optimalAlignments = optimizedGenomeMapping(fullSequence1, fullSequence2);
console.log(optimalAlignments);


/*

*/