class DataList:
    def __init__(self):
        self.my_list = []

    def add_number(self, number):
        self.my_list.append(number)

    def add_string(self, string):
        self.my_list.append(string)

    def add_dictionary(self, dictionary):
        self.my_list.append(dictionary)

    def add_tuple(self, tup):
        self.my_list.append(tup)

    def to_tuple(self):
        return tuple(self.my_list)

my_data_list = DataList()
my_data_list.add_number(7)
my_data_list.add_string('Hello')
my_data_list.add_dictionary({"Name": "Irma", 'age': 33})
my_data_list.add_tuple((1, 2, 3))

# Convert the list to a tuple
my_tuple = my_data_list.to_tuple()

# Print the tuple
print(my_tuple)
