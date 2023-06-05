/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let xSet = new Set();
    let ySet = new Set();
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j] == 0){
                xSet.add(i)
                ySet.add(j)
            }
        }
    }

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j] !== 0 && (xSet.has(i) || ySet.has(j))){
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};