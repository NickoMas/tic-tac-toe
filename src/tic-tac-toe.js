class TicTacToe {
    constructor() {
      this.field  = [
        [null, null, null],
        [null, null, null],
        [null, null, null]];
      this.player    = 'x';
    }

    getCurrentPlayerSymbol() {
      return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
      if(!this.field[rowIndex][columnIndex]) {
        this.field[rowIndex][columnIndex] = this.player;
      } else return this;

      {this.player === 'x' ? 
        this.player = 'o' : this.player = 'x'}; 
      return this;
    }

    isFinished() {
        return !!this.getWinner() || !!this.isDraw();
    }

    getWinner() {
      var field = this.field;

      function winnerIs(token){

        var diag = false;

      {field[0][0] != token ? 
         diag : field[1][1] != token ? 
                   diag : field[2][2] != token ? 
                             diag : diag = true};

      {field[0][2] != token ? 
         diag : field[1][1] != token ? 
                   diag : field[2][0] != token ? 
                             diag : diag = true};
        
        check: for(var i=0; i<3; i++){
          var row, col;
          rowcheck: for(var j=0; j<3; j++){ 
           
            if(!field[i][j] || field[i][j] != token) {
              row = false;
              break rowcheck;
            } else row = true;
          }
          if(row) break check;
          
          colcheck: for(var l=0; l<3; l++){
          if(!field[l][i] || field[l][i] != token) {
              col = false;
              break colcheck;
            } else col = true;
          }
          if(col) break check;
        }         
         return row || col || diag;
      }

      return winnerIs('x') ? 'x' : winnerIs('o') ? 'o' : null;

    }

    noMoreTurns() {
     var field = this.field, turns = true;

      check: for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
          if(!field[i][j]){
            turns = false;
            break check;
          }
        }
      }
       return turns;

    }

    isDraw() {
      return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
