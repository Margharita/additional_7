module.exports = function solveSudoku(matrix) {
  var matrix = matrix;


  function fillNum (matrix) { 
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 0) {
          matrix[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        };
      };
    };
    return matrix;
  };


  function corLine (matrix) { 
    var arrPos = []; 
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (typeof matrix[i][j] == "object") {
          arrPos.push(j);
        };
      };
      for (let j = 0; j < arrPos.length; j++) {
        for (let l = 0; l < matrix[i][arrPos[j]].length; l++) {
          for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][arrPos[j]][l] == matrix[i][k]) {
              matrix[i][arrPos[j]].splice(l, 1);
              if (matrix[i][arrPos[j]].length == 1) {
                matrix[i][arrPos[j]] = matrix[i][arrPos[j]][0];
              };
            };
          };
        };
      };
    };
    return matrix;
  };


  function corColumn (matrix) { 
    for (let i = 0; i < 9; i++) { 
      for (let j = 0; j < 9; j++) { 
        if (typeof matrix[i][j] == "object") {
          for (let g = 0; g < 9; g++) { 
            for (let k = 0; k < matrix[i][j].length; k++) {
              if (matrix[i][j][k] == matrix[g][j] && typeof matrix[g][j] != "object") {
                matrix[i][j].splice(k, 1);
                if (matrix[i][j].length == 1) {
                  matrix[i][j] = matrix[i][j][0];
                };
              };
            };
          };
        };
      };
    };
    return matrix;
  };

  return corColumn(corLine(fillNum(matrix)));
};
