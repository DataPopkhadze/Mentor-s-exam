# 1. Given an array containing n-1 numbers taken from the range 1 to n, write a function to find the missing number. There are no duplicates in the array.

# 1. test cases: [1, 2, 4, 5] -> 3, [1] -> 2, [2, 3, 1, 5] -> 4

arr = []

def find_missing_number(arr):
    n = len(arr) + 1    #ითვლის სიგრძეს თუ ყველა ციფრი იქნებოდა მასივში
    expected_sum = n * (n+ 1) // 2  #ფორმულა (N x (n = 1)) // 2 გამოყენებით ვითვლის ჯამს (მათემატიკაში ვისწავლე ეს)
    real_sum = sum(arr) #ცვლადში ინახავს ნამდვილ ჯამს
    return expected_sum - real_sum
    
print(find_missing_number([1]))
