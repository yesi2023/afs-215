import pytest
from string_list import StringList


# Commented out original code: Based on assignment instructions
# class StringList:
#     def __init__(self):
#         self.items = []

#     def add_string(self, string):
#         self.items.append(string)

#     def find_string(self, string):
#         return string in self.items

#     def evaluate_list(self):
#         return [item.upper() for item in self.items]

# Refactored code using pytest.fixture and new test functions below;

@pytest.fixture
def string_list():
    return StringList()


def test_add_string(string_list):
    string_list.add_string("apple")
    assert string_list.items == ["apple"]


def test_find_string(string_list):
    string_list.add_string("apple")
    assert string_list.find_string("apple") is True
    assert not string_list.find_string("banana")


def test_evaluate_list(string_list):
    string_list.add_string("apple")
    string_list.add_string("banana")
    assert string_list.evaluate_list() == ["APPLE", "BANANA"]
