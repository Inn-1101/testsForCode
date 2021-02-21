const binaryTree = ()=>{
    function Node(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    function Bst(data) {
        this.root = null;
    }

    Bst.prototype.add = function(data){
        let newNode = new Node(data);

        if(this.root===null) {
            this.root = newNode;
        }else {
            this.insert(this.root, newNode);
        }
    }

    Bst.prototype.insert = function(current, newNode){
        if(newNode.data < current.data) {
            if(!current.left) {
                current.left = newNode;
            }else {
                this.insert(current.left, newNode)
            }
        }else {
            if(!current.right) {
                current.right = newNode;
            }else {
                this.insert(current.right, newNode);
            }
        }
    }

    const tree = new Bst();
    tree.add(150);
    tree.add(40);
    tree.add(120);
    tree.add(70);
}

module.exports = binaryTree;