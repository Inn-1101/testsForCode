function Node(val) {
    this.val = val;
    this.next = null;
}

Node.prototype.add = function(val) {
    let current = this;
    if(this.val === null){
       this.val = new Node(val);   
       return; 
    }
      this.insert(val, current); 
}

Node.prototype.insert = function(val, current){
   if(current.val > val){
            let tmp = current.val; 
            let tmp_next = current.next;
            current.val = val; 
            current.next = new Node(tmp);
            current.next.next = tmp_next;
            return;
   } else {
       if(current.next === null){
       current.next = new Node(val);
       return;
     }
   }  
     this.insert(val, current.next);
}


let list = new Node(1);
list.add(2);
list.add(3);
list.add(5);
list.add(4);
list.add(8);
list.add(7);
console.log(list);