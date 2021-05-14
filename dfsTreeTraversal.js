/** 
 - Create a variable to store the values of the visited nodes
 - Store the root of the BST in a variable called current.
 - Write a helper function which accepts a node
    -> Push the value of the node to the variable that stores the values.
    -> If the node has a left property, call the helper function with the right property on the node.
 */ 


const dfsTraversal = (node) => {
    const visitedNodes = [];
    let current = 10;

    visitedNodes.push(node) 
    return visitedNodes;
}