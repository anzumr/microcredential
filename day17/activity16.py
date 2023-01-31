"""
Anzum Rahman
Day 17 - intro to Python
Monday, Jan 30
"""
# Example using the print() function
print('Anzum Rahman')
print('---------- example 1 ----------')
name = 'Peter Pan'
number = 2.5
print(name)
print('My name is: ',name, 'and my lucky number is: ', number)
# Example using input() function
print('---------- example 2 ----------')
lastName = input('Enter a last name: ')
num1 = int(input('Enter a number: '))
print('Last name = ',lastName, ' Enter a number = ', num1, 'The double of the number is = ',num1*2)
print('---------- example 3 ----------')
h = float(input('Enter a height: '))
w = float(input('Enter a weight: '))
hyp =(h**2 + w**2)**0.5
print('Hypotenuse = ', hyp)
print('---------- class activity ----------')
"""
write a Python code that will ask the user to enter a radius and a height from the keyboard --> input()
Once the values are collected, calculate the area of a circle, the circumference, and the volume of sphere.
To calculate area = 3.1416*radius**2
To calculate the circumference = 2*3.1416*radius
To calculate the volume = area*height

print as:
Area = ____
Circumference = _____
Volume = _____
"""

pi = 3.1416

radius = float(input("Enter the radius: "))
height = float(input("Enter the height: "))

area = pi * radius ** 2
circumference = 2 * pi * radius
volume = area * height

print("Area: ", area)
print("Circumference: ", circumference)
print("Volume: ", volume)

print('---------- example 4 ----------')
# assign a value
number1 = 8
print('Number = ',number1)
# self add +=
number1 += 3
print('Self add = ', number1)
# self subtraction -=
number1 -= 5
print('Self subtract = ', number1)
number1 %= 4
print('Remainder after the division with 4 = ', number1)

#using %s market on print()
print('The height = %s and with = %s. The claculation for the hypotenuse is %s ' %(h,w,hyp))

print('---------- example 5 ----------')
# find a character in a string using index
msg = 'Queensborough'
# print the 3rd and 7th character in string msg
print('The 3rd character is = ', msg[2])
print('The 7th chracter is = ', msg[6])
# slice in a string
print('From the 5th to the 10th character: ', msg[4:9])
lenMsg = len(msg)
print('The length is = ', lenMsg)
#upper() method
msgUpper = msg.upper()
print(msgUpper)
# replace() method
msgReplace = msg.replace('e', '$')
print(msgReplace)
# in operator
msgIn = 'm' in msg
print('Is m in the message?', msgIn)

print('---------- example 6 ----------')
# create list of animals
animals = ['cat', 'dog', 'parrot', 'fish', 'rat']
print('2nd animal = ', animals[1])
#delete the 3rd item in the list
del animals[2]
print(animals)
#ask  the user to input an animal. The new animal will be added to the existing list
a = input('Enter an animal: ')
animals.append(a)
print(animals)







