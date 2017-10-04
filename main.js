document.addEventListener('DOMContentLoaded', function(){
    
        button.addEventListener('click', function() {
    
            var button = document.getElementById('button');
            
            var friends = ['Dave', 'Abraham', 'Joey', 'Emma', 'Aric']
                friends.className = 'friend';
    
            for (var i = 0; i < friends.length; i++){
    
                var f = document.createTextNode(friends[i] + ':');
                var j = 99;
                var h3 = document.createElement("h3");
    
                h3.appendChild(f);
                var div = document.createElement('div');
                div.className = 'friend';
                div.appendChild(h3); 
                    while (j > 0){
                        if (j > 2) {
                            var t = j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file, ';
                            var para = document.createElement("p");
                            para.innerHTML = t;
                            div.appendChild(para);
                        }   else if (j === 2) {
                                var t1 = '2 lines of code in the file, 2 lines of code; ' + friends[i] + ' strikes one out, clears it all out, 1 line of code in the file, ';
                                var para = document.createElement("p");
                                para.innerHTML = t1;
                                div.appendChild(para);
                             }      else {
                                        var t2 = '1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.  ';
                                        var para = document.createElement("p");
                                        para.innerHTML = t2;
                                        div.appendChild(para);
                                    };
                        j--;  
                    };             
                document.body.appendChild(div);
            };
        })
    })