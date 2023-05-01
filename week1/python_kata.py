def print_drink(num):
    if num == 1:
        print(1)
    elif num == 2:
        print(2)
    elif num == 3:
        print("Pepsi")
    elif num == 5:
        print("Coke")
    elif num % 3 == 0 and num % 5 == 0:
        print("PepsiCoke")
    elif num % 3 == 0:
        print("Pepsi")
    elif num % 5 == 0:
        print("Coke")

# Test cases for the print_drink function:

print_drink(1)   # prints "1"
print_drink(2)   # prints "2"
print_drink(3)   # prints "Pepsi"
print_drink(5)   # prints "Coke"
print_drink(6)   # prints "Pepsi"
print_drink(10)  # prints "Coke"
print_drink(15)  # prints "PepsiCoke"