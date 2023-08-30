#include <iostream>
using namespace std;
// code for Binary Search 
// time complexity is O(log n)
int BS(int arr[], int size, int key) {
    
    int start = 0;
    int end = size - 1;
    int mid = (start + end) / 2;
    cout << "the mid is at start " << mid << endl;
    while (start <= end) {
        if (arr[mid] == key) {
            return mid;
        } else if (arr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = (start + end) / 2;
        cout << "the new mid is " << mid << endl;
    }
    return -1;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    int index = BS(arr, 7, 5);
    cout << "the index is " << index << endl;
}
