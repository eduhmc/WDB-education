let x = 5;
let y = 4;
function a_plus_abs_b(a,b) {
	/*
    Return a+abs(b), but without calling abs().

    >>> a_plus_abs_b(2, 3)
    5
    >>> a_plus_abs_b(2, -3)
    
  */
	let f = (a,b) => a + b;
	if (b < 0) {
        b = b * - 1
		let f = (a,b) => a + b;
	}
	return f(a, b);
}
let z = a_plus_abs_b(x,y);
console.log(z);


function two_of_three(x, y, z){
    /*Return a*a + b*b, where a and b are the two smallest members of the
    positive numbers x, y, and z. 

    >>> two_of_three(1, 2, 3)
    5
    >>> two_of_three(5, 3, 1)
    10
    >>> two_of_three(10, 2, 8)
    68
    >>> two_of_three(5, 5, 5)
    50

    // Hint: Consider using the Math.max or Math.min function!
    */
    return Math.max(x*x + y*y, y*y + z*z, z*z + x*x);
}

function largest_factor(n){
    /*Return the largest factor of n that is smaller than n.

    >>> console.log(largest_factor(15)); # factors are 1, 3, 5
    5
    >>> console.log(largest_factor(80)); # factors are 1, 2, 4, 5, 8, 10, 16, 20, 40
    40
    >>> console.log(largest_factor(13)); # factor is 1 since 13 is prime
    1
    */
    // *** YOUR CODE HERE ***
    let i = 0;
    let factor = 0;
    while (i < n) {
        if (n % i === 0) {
            factor = i;
            i = i + 1;
        } else{
            i = i + 1;
        }
    }
    return factor;
}

function hailstone(n){
	/* Print the hailstone sequence starting at n and return its
		    length. 
		For reference: https://mathworld.wolfram.com/HailstoneNumber.html

		>>> let a = hailstone(10)
		10
		5
		16
		8
		4
		2
		1
		>>> console.log(a);
		7

		Can be solved recursively or iteratively!
	*/
	// *** YOUR CODE HERE ***
    let count = 1;
    console.log(n);
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = ((n * 3) + 1);
        }
        console.log(n);
        count = count + 1
    }
	return count;
}


function product(n, term){
	/* Return the product of the first n terms in a sequence.
    n -- a positive integer
    term -- a function that takes one argument to produce the term

    >>> product(3, identity)  # 1 * 2 * 3
    6
    >>> product(5, identity)  # 1 * 2 * 3 * 4 * 5
    120
    >>> product(3, square)    # 1^2 * 2^2 * 3^2
    36
    >>> product(5, square)    # 1^2 * 2^2 * 3^2 * 4^2 * 5^2
    14400
    >>> product(3, increment) # (1+1) * (2+1) * (3+1)
    24
    >>> product(3, triple)    # 1*3 * 2*3 * 3*3
    162
	*/
  // *** YOUR CODE HERE ***"
  let x = 1;
  let total = 1;
  while(x <= 1) {
      x = x + 1;
      total = term(x) * total;
  }
  return total;
}


function accumulate(merger, base, n, term){
    /*Return the result of merging the first n terms in a sequence and base.
    The terms to be merged are term(1), term(2), ..., term(n). merger is a
    two-argument commutative function.

    >>> accumulate(add, 0, 5, identity)  # 0 + 1 + 2 + 3 + 4 + 5
    15
    >>> accumulate(add, 11, 5, identity) # 11 + 1 + 2 + 3 + 4 + 5
    26
    >>> accumulate(add, 11, 0, identity) # 11
    11
    >>> accumulate(add, 11, 3, square)   # 11 + 1^2 + 2^2 + 3^2
    25
    >>> accumulate(mul, 2, 3, square)    # 2 * 1^2 * 2^2 * 3^2
    72
    >>> accumulate(lambda x, y: x + y + 1, 2, 3, square)
    19
    >>> accumulate(lambda x, y: 2 * (x + y), 2, 3, square)
    58
    >>> accumulate(lambda x, y: (x + y) % 17, 19, 20, square)
    16
    */
    // *** YOUR CODE HERE ***
    let x = 1;
    let total = base;
    while (x >= n) {
        x = x + 1;
        total = merger(term(x), total);
    }
    return total;
}


// Refer to CS 61a HW2 for details on each of the problems! 
// https://cs61a.org/hw/hw02/

function make_repeater(func, n){
    /*
		Return the function that computes the nth application of func.

    >>> add_three = make_repeater(increment, 3)
    >>> add_three(5)
    8
    >>> make_repeater(triple, 5)(1) # 3 * 3 * 3 * 3 * 3 * 1
    243
    >>> make_repeater(square, 2)(5) # square(square(5))
    625
    >>> make_repeater(square, 4)(5) # square(square(square(square(5))))
    152587890625
    >>> make_repeater(square, 0)(5) # Yes, it makes sense to apply the function zero times!
    5
    */
    // Can be solved iteratively or recursively!
    // *** YOUR CODE HERE ***
    function h(x) {
        let y = 0;
        while (y < n) {
            x = func(x);
            y = y + 1; 
        }
        return x;
    }
    return h;
}


function num_eights(pos){
    /* Returns the number of times 8 appears as a digit of pos.

    >>> num_eights(3)
    0
    >>> num_eights(8)
    1
    >>> num_eights(88888888)
    8
    >>> num_eights(2638)
    1
    >>> num_eights(86380)
    2
    >>> num_eights(12345)
    0
    NO variable assignment allowed!
    */
    // *** YOUR CODE HERE ***
    if (pos === 0) {
        return 0;
    }
    else if (pos % 10 === 8) {
        return 1 + num_eights(Math.floor(pos, 10));
    } else{
        return num_eights(Math.floor(pos, 10));
    }
}

function pingpong(n){
    /*
		Return the nth element of the ping-pong sequence.

    >>> pingpong(8)
    8
    >>> pingpong(10)
    6
    >>> pingpong(15)
    1
    >>> pingpong(21)
    -1
    >>> pingpong(22)
    -2
    >>> pingpong(30)
    -2
    >>> pingpong(68)
    0
    >>> pingpong(69)
    -1
    >>> pingpong(80)
    0
    >>> pingpong(81)
    1
    >>> pingpong(82)
    0
    >>> pingpong(100)
    -6

    Look at 61A problem set for info on the ping-pong sequence.
    */
    // *** YOUR CODE HERE ***
    "*** YOUR CODE HERE ***"
    function pp_helper(result, x,flag){
        if (n === x){
            return result;    
        }else{
            if (x % 8 === 0 || num_eights(x) > 0){
                return pp_helper(result -flag * 1,x+1,-flag);
            } else {
                return pp_helper(result+flag * 1, x+1,flag);
            }
        }
    }
    return pp_helper(1,1,1)
}

function missing_digits(n){
    /* Given a number a that is in sorted, increasing order,
    return the number of missing digits in n. A missing digit is
    a number between the first and last digit of a that is not in n.
    >>> missing_digits(1248) # 3, 5, 6, 7
    4
    >>> missing_digits(19) # 2, 3, 4, 5, 6, 7, 8
    7
    >>> missing_digits(1122) # No missing numbers
    0
    >>> missing_digits(123456) # No missing numbers
    0
    >>> missing_digits(3558) # 4, 6, 7
    3
    >>> missing_digits(35578) # 4, 6
    2
    >>> missing_digits(12456) # 3
    1
    >>> missing_digits(16789) # 2, 3, 4, 5
    4

    >>> missing_digits(4) # No missing numbers between 4 and 4
    0

    No iteration allowed!
    */
    // *** YOUR CODE HERE ***
    if (n / 10 == 0) {
        return 0;
    }
    else if (n % 10 == n / 10 %10) {
        return missing_digits(n/10);
    } else {
        return (n % 10 - n  /10 %10 -1) + missing_digits(n/10);
    }
}



function get_next_coin(coin){
    /* Return the next coin. 
    >>> get_next_coin(1)
    5
    >>> get_next_coin(5)
    10
    >>> get_next_coin(10)
    25
    >>> get_next_coin(2) # Other values return None
    */
    // *** YOUR CODE HERE ***
    if (coin == 1){
        return 5;
    }
    else if (coin == 5) {
        return 10;
    }
    else if (coin == 10) {
        return 25
    } else {
        return None;
    }
}

function count_coins(change){
    /* Return the number of ways to make change using coins of value of 1, 5, 10, 25.
    >>> count_coins(15)
    6
    >>> count_coins(10)
    4
    >>> count_coins(20)
    9
    >>> count_coins(100) # How many ways to make change for a dollar?
    242

    No iteration allowed!
    */
    // *** YOUR CODE HERE ***
    function count_func(total, smallest_coin) {
        if (total < 0){
            return 0;
        }
        if (total == 0){
            return 1;
        }
        if (smallest_coin === None){
            return 0;
        }
        with_current = count_func(total - smallest_coin, smallest_coin);
        without_current = count_func(total, next_largest_coin(smallest_coin));
        return with_current + without_current;
    }
    return count_func(total, 1);
}


// Recursion sequence: Look at https://inst.eecs.berkeley.edu/~cs61a/fa19/hw/hw03/ for reference on each of the questions!

function num_sevens(n){
    // *** YOUR CODE HERE ***
}

function pingpong(n){
    // *** YOUR CODE HERE ***
}

function count_change(amount){
    // *** YOUR CODE HERE ***
}



/**
NOTE from the Notion page:
Make sure that when you run each of these functions that the output is the same in Javascript. 
You will be graded on pure correctness. Feel free to copy and paste your python code! 
This is more to learn the language rather than to test your CS 61A knowledge. 
If you need the python solutions, ask one of us and we'll drop them!
**/