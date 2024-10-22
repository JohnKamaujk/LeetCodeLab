def SieveOfEratosthenes(num):
    prime = [True for i in range(num+1)]
    # boolean array[True,True,True,True,True,True]
    p = 2
    while (p * p <= num):
 
        # If prime[p] is not
        # changed, then it is a prime
        if (prime[p] == True):
            # Updating all multiples of p [True,True,True,True,False,True]
            for i in range(p * p, num+1, p): 
                prime[i] = False
        p += 1
    count = 0
    # count all prime numbers
    for p in range(2, num+1):
        if prime[p]:
            count += 1
    
    return count
