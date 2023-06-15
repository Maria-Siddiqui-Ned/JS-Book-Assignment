// 1. Declare an empty array using JS literal notation to store student names in future.
var students_name = [];

// 2. Declare an empty array using JS object notation to store student names in future.

// 3. Declare and initialize a strings array.
var string = ['afifa' , 'maria' , 'nabira', 'zoha'];

// 4. Declare and initialize a numbers array.
var number = [1,2,3,4,5]

// 5. Declare and initialize a boolean array.
var boolean = ['True','False'];

// 6. Declare and initialize a mixed array.
var mixed_array = ['laMasia' , 10,'messi' , 36,'True'];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var qualification = ['SSC','HSC','BCS','BS','B.COM','MS','M.Phil.','PhD'];
document.write('QUALIFICATIONS <br> <br>');
for (var i = 0; i<qualification.length;i++){
    document.write( i+1  + ") " + qualification[i] +  '<br>');
}
