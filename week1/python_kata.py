def python_kata(num):
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

python_kata(1)   # prints "1"
python_kata(2)   # prints "2"
python_kata(3)   # prints "Pepsi"
python_kata(5)   # prints "Coke"
python_kata(6)   # prints "Pepsi"
python_kata(10)  # prints "Coke"
python_kata(15)  # prints "PepsiCoke"