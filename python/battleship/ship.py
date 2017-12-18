class Ship:
    def __init__(self, id, size):
        self.id = id
        self.size = size
        self.hit_count = size
    def hit_ship(self):
        self.hit_count = self.hit_count - 1
        print("That's a hit!")
        if(self.hit_count == 0):
            print('Sunk ship of size', ship.size)

class Board:
    def __init__(self, id):
        self.id = id
    def build_board(self,size):
        self.board = [[0 for x in range(size)] for y in range(size)]
        self.hitBoard = [[0 for x in range(size)] for y in range(size)]
    def check_win(self):
        for i in range(len(self.board)):
            if(1 in self.board[i]):
                return(False)
            elif(2 in self.board[i]):
                return(False)
            elif(3 in self.board[i]):
                return(False)
            else:
                pass
        return(True)
    def strike(self, x, y):
        if(self.board[x][y] == '*'):
            print("You've already struck here")
        elif(self.board[x][y] == 1):
            self.board[x][y] = '*'
            self.hitBoard[x][y] = 1
        elif(self.board[x][y] == 2):
            self.board[x][y] = '*'
            self.hitBoard[x][y] = 1
        elif(self.board[x][y] == 3):
            self.board[x][y] = '*'
            self.hitBoard[x][y] = 1
        else:
            self.board[x][y] = '*'
            self.hitBoard[x][y] = 2
            print('Miss')
    def insert_ship(self, ship, x, y, direction):
        if(direction == 'R'):
            for i in range(ship.size):
                self.board[x][y+i] = ship.id
        elif(direction == 'L'):
            for i in range(ship.size):
                self.board[x][y-i] = ship.id
        elif(direction == 'U'):
            for i in range(ship.size):
                self.board[x-i][y] = ship.id
        elif(direction == 'D'):
            for i in range(ship.size):
                self.board[x+i][y] = ship.id
    def display_board(self):
        for i in range(len(self.hitBoard)):
            print(self.hitBoard[i])
    def hit_count(self, x, y):
        self.board[x][y] = count


ship1 = Ship(1, 2)
ship2 = Ship(2, 3)
ship3 = Ship(3, 4)
ship4 = Ship(1, 2)
ship5 = Ship(2, 3)
ship6 = Ship(3, 4)
board1 = Board(1)
board2 = Board(2)

board1.build_board(5)
board1.insert_ship(ship1, 2, 3, 'R')
board1.insert_ship(ship2, 3, 4, 'L')
board1.insert_ship(ship3, 0, 0, 'D')

board2.build_board(5)
board2.insert_ship(ship4, 0, 1, 'D')
board2.insert_ship(ship5, 0, 3, 'D')
board2.insert_ship(ship6, 4, 0, 'R')

#print("Welcome to Battleship. Let's set up our board")
#board.build_board(int(input('What is your desired square board size?')))
#num_ships = int(input('How many ships would you like to play with?'))
#for i in range(num_ships):

print(board1.board)

print("Let's play some battleship. You will give your moves in row x column coordinates. To give a move, simply enter your coordinates with a space between them.")
while((board1.check_win() and board2.check_win()) == False):
    board1.display_board()
    x_move, y_move = input("Player 1, what is your move?\n").split()
    x_move, y_move = [int(x) for x in [x_move, y_move]]
    if(board1.board[x_move][y_move] == 1):
        ship1.hit_ship()
    elif(board1.board[x_move][y_move] == 2):
        ship2.hit_ship()
    elif(board1.board[x_move][y_move] == 3):
        ship3.hit_ship()
    board1.strike(x_move, y_move)
    if(board1.check_win() == True):
        print('Player 1 wins!')
        break
    else:
        board2.display_board()
        x_move, y_move = input("Player 2, what is your move?\n").split()
        x_move, y_move = [int(x) for x in [x_move, y_move]]
        if(board2.board[x_move][y_move] == 1):
            ship4.hit_ship()
        elif(board2.board[x_move][y_move] == 2):
            ship5.hit_ship()
        elif(board2.board[x_move][y_move] == 3):
            ship6.hit_ship()
        board2.strike(x_move, y_move)
        if(board2.check_win() == True):
            print('Player 2 wins!')
            break
