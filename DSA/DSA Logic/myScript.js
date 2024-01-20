// flatten array
// flatten object

// Second largest no or kth largest elemnt..... heap
// -> using two vairble
// -> sort and get 2nd element-> time-> sort(Onlogn)

// reverse word in sentence
// reverse a linked list
// binary search (rotated sorted array search)
// -> [1,2,3,4,5,6,7] 
// -> [4,5,6,7,1,2,3] -> need to find out elemt is present and the index
// sol-> 
// - need to find the pivot element (a...x...b) a nd b sholub be greater than x
// - [7,8,9,1,2,3,4,5,6] -> mid - 2... since 2 is smaller then 7 then goto Left
// - [4,5,6,7,1,2,3] -> mid - 7.. since 7 is greater than 4 then goto right
// - 2 binary search, if two search return -1 then return -1
// - Olog(n)+Olog(n) = 2(Olog(n)) = Olog(n)

// insertion sort
// selection sort
// bubble sort


// find missing integer in non-repeating array
// arr = [1,2,3,4,5,6,8,9] -> this is sorted, then check index
// [5, 3, 6, 1, 8, 4, 2, 9, 7] 
// -> sum(1..n) = n*n+1/2 = 45
// [5, 3, 6, 1, 8, 2, 9, 7] = 41
// now 45-41=4-> anser

// Variant 2 -> [5, 3, 6, 1, 8, 3, 2, 9, 7] = 
// 45 -44 = 1
//  missing and repetating integer

[1000, 5000, 2000] -> sol 1
[2, 1, 9] -> 3

traverse -> operation should be on (x< Array.length)


// two sum
[4,6,2,33,65,1] -> 35
sol:-
- sort array, ascending 
[1,2,4,6,33,65] -> 35

low=0..high=5
1+65 -> 66>35....high=high-1 = 4 (if we increse low then sum will be more greater)
same for <


// three sum


// merge 2 sorted LL or array
