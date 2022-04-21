let task=prompt('what to do?');
let num=1;
let todos =[];
while(task!=="q" && task!=="quit"){
    //adding the new element
     if(task==='new'){
         const newtodo = prompt('ok, what is the new todo?')
        todos.push(newtodo);
        console.log(`${newtodo} added to the list`)
        //listing the elements
     }else if(task==="list"){
          console.log("*************************") 
           for(let i=0;i<todos.length;i++){
               console.log(`${i+1}:${todos[i]}`)
           }
          console.log("*************************") 
     //deleting the given element 
     }else if(task==="delete"){
        let toremove=prompt("what to delete!");
        for(let j=0;j<num;j++){
           todos=todos.filter(item => item !==toremove)
           console.log(`${toremove} is deleted from the list`)
       }
     }
     task=prompt('what to do');
}
console.log("quinting successfull")