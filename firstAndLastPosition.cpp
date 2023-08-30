#include <iostream>
using namespace std;
// find the first and last position  of the element in the sorted array
// first apply binnary search
int leftOcc(int arr[], int size, int key) {

    int start = 0;
    int end = size - 1;
    int mid = (start + end) / 2;
    int ans = -1;
    while (start <= end) {

        if (arr[mid] == key) {
             ans = mid;
             end = mid - 1;

        } else if (arr[mid] < key) {

            start = mid + 1;
        } else {

            end = mid - 1;
        }

        mid = (start + end) / 2;
    }
    return ans;
}
int RightOcc(int arr[], int size, int key) {

    int start = 0;
    int end = size - 1;
    int mid = (start + end) / 2;
    int ans = -1;
    while (start <= end) {

        if (arr[mid] == key) {
             ans = mid;
             start = mid + 1;

        } else if (arr[mid] < key) {

            start = mid + 1;
        } else {

            end = mid - 1;
        }

        mid = (start + end) / 2;
    }
    return ans;
}


int main(){
    int arr[]= { 1, 2, 3, 3, 3, 4, 5 };
    int leftIndex = leftOcc(arr, 7, 3);
    cout << "the left most occurance is at index " << leftIndex << endl;
    int rightIndex = RightOcc(arr, 7, 3);
    cout << "the right most occurance is at index " << rightIndex << endl;

}
