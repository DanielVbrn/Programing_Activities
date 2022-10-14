#include <iostream>
#include <stdio.h>
#include "forms.hpp"
using namespace std;








main(){
    struct Node2 y1;
    struct Node2 y2;
    y1.setNode2(3);
    y2 = y1;
    y2.setNode2(4);
    cout << "(VALUE)y1.getNode2():" << y1.getNode2() << endl;
    cout << "(VALUE)y2.getNode2():" << y2.getNode2() << endl;
    cout << "------------" << endl;
}