importScripts(["PoI.js"])


//while(1){
self.setTimeout(function(){
    while(1){
        var result = Module.ccall(
            'calculate_constraint_magic_square',	// name of C function 
            'string',	// return type
            ['string'],	// argument types
            ["0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"]	// arguments
        );
        //console.log(result);
        //}
    }

    
},1000);
