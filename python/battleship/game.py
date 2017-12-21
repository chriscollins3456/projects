class Ship:
    def __init__(self, id, size):
        self.id = id
        self.size = size
        self.hit_count = size
        self.coordinates = []
        self.alive = True
    def hit_ship(self):
        self.hit_count = self.hit_count - 1
        print("That's a hit!")
        if(self.hit_count == 0):
            print('Sunk ship of size', self.size)
            self.alive = False

class Player:
    def __init__(self, id):
        self.id = self
        self.ships = []
        self.hits = []
    def insert_ship(self, ship, x, y, direction):
        self.ships.append(ship)
        if(direction == 'R'):
            for i in range(ship.size):
                ship.coordinates.append((x, y + i))
        elif(direction == 'L'):
            for i in range(ship.size):
                ship.coordinates.append((x, y - i))
        elif(direction == 'U'):
            for i in range(ship.size):
                ship.coordinates.append((x - i, y))
        elif(direction == 'D'):
            for i in range(ship.size):
                ship.coordinates.append((x + i, y))
    def strike(self, x, y):
        if (x,y) in self.hits:
            print("You've already struck here")
            return
        self.hits.append((x,y))
        for ship in self.ships:
            if (x, y) in ship.coordinates:
                ship.hit_ship()
                return
        print('Miss')
    def check_win(self):
        for ship in self.ships:
            if ship.alive:
                return False
        return True



player1 = Player(1)
player2 = Player(2)

ship1 = Ship(1, 2)
ship2 = Ship(2, 3)
ship3 = Ship(3, 4)
ship4 = Ship(1, 2)
ship5 = Ship(2, 3)
ship6 = Ship(3, 4)

player1.insert_ship(ship1, 2, 3, 'R')
player1.insert_ship(ship2, 3, 4, 'L')
player1.insert_ship(ship3, 0, 0, 'D')

player2.insert_ship(ship4, 0, 1, 'D')
player2.insert_ship(ship5, 0, 3, 'D')
player2.insert_ship(ship6, 4, 0, 'R')

while((player1.check_win() == False and player2.check_win()) == False):
    x_move, y_move = input("Player 1, what is your move?\n").split()
    x_move, y_move = [int(x) for x in [x_move, y_move]]
    player2.strike(x_move, y_move)
    if(player2.check_win() == True):
        print('Player 1 wins!')
        break
    else:
        x_move, y_move = input("Player 2, what is your move?\n").split()
        x_move, y_move = [int(x) for x in [x_move, y_move]]
        player1.strike(x_move, y_move)
        if(player1.check_win() == True):
            print('Player 2 wins!')
            break
