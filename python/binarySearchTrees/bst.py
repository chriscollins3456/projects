class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.leftChild = None
        self.rightChild = None
    def insert(self, node):
        if node.key > self.key:
            if self.rightChild:
                self.rightChild.insert(node)
            else:
                self.rightChild = node
        if node.key < self.key:
            if self.leftChild:
                self.leftChild.insert(node)
            else:
                self.leftChild = node
    def find(self, node):
        print('I')                    #printing 'I' in order to count number of searches conducted
        if node.key == self.key:
            print(node.value)
            return True
        if node.key > self.key:
            if self.rightChild:
                return self.rightChild.find(node)
            else:
                return False
        else:
            if self.leftChild:
                return self.leftChild.find(node)
            else:
                return False


class Tree:
    def __init__(self, root):
        self.root = root
    def insert(self, node):
        if self.root:
            return self.root.insert(node)
        else:
            self.root = node
    def find(self, node):
        if self.root:
            return self.root.find(node)
        else:
            return False

node1 = Node(1, 'a')
node2 = Node(2, 'b')
node3 = Node(3, 'c')
node4 = Node(4, 'd')
node5 = Node(5, 'e')
node6 = Node(6, 'f')
node7 = Node(7, 'g')
node8 = Node(8, 'h')
node9 = Node(9, 'i')
node10 = Node(10, 'j')


# tree = Tree(node5)
# tree.insert(node1)
# tree.insert(node2)
# tree.insert(node3)
# tree.insert(node4)
# tree.insert(node6)
# tree.insert(node7)
# tree.insert(node8)
# tree.insert(node9)


tree2 = Tree(node5)
tree2.insert(node3)
tree2.insert(node2)
tree2.insert(node1)
tree2.insert(node4)
tree2.insert(node7)
tree2.insert(node6)
tree2.insert(node8)
tree2.insert(node9)

# print(tree2.root.key)
# print(node5.leftChild.key)
# print(node3.leftChild.key)
# print(node2.leftChild.key)
# print(node3.rightChild.key)
# print(node5.rightChild.key)
# print(node7.leftChild.key)
# print(node7.rightChild.key)
# print(node8.rightChild.key)

tree2.find(node4)
