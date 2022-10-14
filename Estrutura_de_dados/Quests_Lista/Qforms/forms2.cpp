#include <iostream>
#include <stdio.h>
#include "forms.hpp"
using namespace std;



main(){
    struct Node2 *x = new Node2();
    struct Node2 *x2 = new Node2();
    x2 = x;
    cout << "x2 -> getNode2():" << x2 -> getNode2() << endl;
    x2-> setNode2(4);
    cout << "x2 -> getNode2():" << x2 -> getNode2() << endl;
    cout << "x -> getNode2():" << x2 -> getNode2() << endl;
    cout << "--------------" << endl;
    return 0;
}