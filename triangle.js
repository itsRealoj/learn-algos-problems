// Write a loop that makes seven calls to console.log to output the following triangle:

/*
#
##
###
####
#####
######
#######
*/

let output = ''
do {
    output += '#'
    console.log(output)
} while(output.length < 7)