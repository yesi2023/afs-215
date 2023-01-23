class PythonFunctions:
    def __init__(self):
        self.list = []

    def addNumber(self, Anynumber) -> None:
        self.list.append(Anynumber)

    def addString(self, str) -> None:
        self.list.append(str)

    def addDictionary(self, dict) -> None:
        self.list.extend(dict.items())

    def addTuple(self, tuple) -> None:
        self.list.extend(tuple)

    def __str__(self):
        return str(print(self.list))


myObject = PythonFunctions()
num = 2023
string = 'Hello World!'
dict = {'j': 'k', 'k': 'l'}
tuple = (1, 2, 3, 4)
myObject.addNumber(1)
myObject.addString(string)
myObject.addDictionary(dict)
myObject.addTuple(tuple)
print(myObject)
