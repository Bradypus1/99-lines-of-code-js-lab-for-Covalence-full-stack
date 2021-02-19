var friends = ['john', 'jill', 'jake', 'josh', 'jeremy'];
var arrCount = 0;

for (var i =0; i < friends.length;i++){
    var j = 99
    while( j > 0){
        if (j > 1){
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' 
            + friends[i] + 
            ' strikes one out, clears it all out' + j-1 + ' lines of code in the file')
        }
        else{
            console.log(j + ' line of code in the file, ' + j + ' line of code; ' 
            + friends[i] + 
            ' strikes one out, clears it all out, no more lines of code in the file')
        }
        j--;
    }
}