'''
Anzum Rahman
Tuesday, Jan 31
Activity 17: conditional statements and loops
'''
# example 1
print('------------ Example 1 -------------')
age = int(input('Enter age:'))
if age >= 21:
    print('ADULT')
else:
    print('UNDER AGE!')
print('Age Checkpint!')

# example 2
print('------------ Example 2 -------------')
grade = int(input('Enter Grade: '))
if grade >= 90 and grade <=100:
    print('GPA = A')
elif grade >= 80 and grade < 90:
    print('GPA = B')
elif grade >= 70 and grade < 80:
    print('GPA = C')
elif grade >= 60 and grade < 70:
    print('GPA = D')
elif grade >= 0 and grade < 60:
    print('GPA = D')   
else:
    print('INVALID!')

# example 3
print('------------ Example 3 -------------')
kidAge = int(input('Enter an age between 5 and 10: '))
if kidAge == 5 or kidAge == 6:
    print('Eat pasta')
elif kidAge == 7 or kidAge == 8:
    print('Eat fish and vegetables')
elif kidAge == 9 or kidAge == 10:
    print('Eat ice-cream')
else:
    print('Wrong Age!')

# example 4 for loop
print('------------ Example 4 -------------')
for x in range(0,5):
    print('Counting: ', x)

# example 5 for loop in a list
print('------------ Example 5 -------------')
animals =['fish', 'dog', 'cat', 'bear', 'pig']
for i in animals:
    print(i)

# example 6 for loop with different increment & decrement 
print('------------ Example 6 -------------')
for m in range (3,30,2):
    print('print before break')
    if m==17:
        continue
    print('m = ',m)
# decreasing order
for n in range(10,0,-1):
    print('n = ',n)