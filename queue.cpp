#include <iostream>
#include <queue>
using namespace std;
int main(){
    // creating a queue
    queue <string> q;

    //add difrent strings to the queue
    q.push("oranges");
    q.push("blue");
    q.push("yellow");
    // poping the first element
    std::cout<<"this is the pop from the front : "<<q.front()<<endl;
    q.pop();
    q.push("purple");
    q.pop();
    cout<<"this is the second pop: "<<q.front()<<endl;

    return 0;
}
// create 
// Push
// pop 
// empty
// to implement the queue in an order of O(1) we shall go with the following stratigies
// linked lists  shall be doubly linked
// arrays shall increase their size in a way that they are doubled each time
