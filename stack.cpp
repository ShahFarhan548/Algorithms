#include <iostream>
#include <stack>
using namespace std;
int main() {
    stack <string> s;
    s.push("one");
    s.push("two");
    s.push("three");
    s.push("four");
    cout<<"the top element of the stack is : "<<s.top()<<endl;
    s.pop();
    cout<<"the top element of the stack is : "<<s.top()<<endl;
    return 0;
}