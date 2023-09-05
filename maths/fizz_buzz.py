#Given an integer n, return a string array answer (1-indexed) where:

# answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
# answer[i] == "Fizz" if i is divisible by 3.
# answer[i] == "Buzz" if i is divisible by 5.
# answer[i] == i (as a string) if none of the above conditions are true.

def fizz_buzz(n):
    result = []

    for i in range(1,n+1):
        strn = ''
        if i % 3 == 0:
            strn += 'Fizz'
        if i % 5 == 0:
            strn += 'Buzz'
        if not strn:
            strn += str(i)
        result.append(strn)
    
    return result

