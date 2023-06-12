class StringList:
    def __init__(self):
        self.items = []

    def add_string(self, string):
        self.items.append(string)

    def find_string(self, string):
        return string in self.items

    def evaluate_list(self):
        return [item.upper() for item in self.items]
