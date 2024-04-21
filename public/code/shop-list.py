# Grocery list program

# Function to add an item to the list
def add_item(grocery_list, item):
    grocery_list.append(item)
    print(f"{item} has been added to the list.")

# Function to display the grocery list
def display_list(grocery_list):
    print("Grocery list:")
    for i, item in enumerate(grocery_list, start=1):
        print(f"{i}. {item}")

# Main function
def main():
    grocery_list = []

    print("Welcome to the grocery list.")

    while True:
        print("\n1. Add item")