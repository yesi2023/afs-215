# test_print_drink.py

from print_drink import print_drink  # import the print_drink function

def test_print_drink_one():
    assert print_drink(1) == 1

def test_print_drink_two():
    assert print_drink(2) == 2

def test_print_drink_three():
    assert print_drink(3) == "Pepsi"

def test_print_drink_five():
    assert print_drink(5) == "Coke"

def test_print_drink_six():
    assert print_drink(6) == "Pepsi"

def test_print_drink_ten():
    assert print_drink(10) == "Coke"

def test_print_drink_fifteen():
    assert print_drink(15) == "PepsiCoke"






