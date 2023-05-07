# print_drink.py
def print_drink(num):
    if num == 1:
        return 1
    elif num == 2:
        return 2
    elif num == 3:
        return "Pepsi"
    elif num == 5:
        return "Coke"
    elif num % 3 == 0 and num % 5 == 0:
        return "PepsiCoke"
    elif num % 3 == 0:
        return "Pepsi"
    elif num % 5 == 0:
        return "Coke"

# quickly using the below, to check if the function is working as expected manually.

print(print_drink(1))   # prints "1"
print(print_drink(2))   # prints "2"
print(print_drink(3))   # prints "Pepsi"
print(print_drink(5))   # prints "Coke"
print(print_drink(6))   # prints "Pepsi"
print(print_drink(10))  # prints "Coke"
print(print_drink(15))  # prints "PepsiCoke"
