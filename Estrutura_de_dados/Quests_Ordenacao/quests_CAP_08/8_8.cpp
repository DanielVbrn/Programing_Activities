#include <iostream>
#include <stdio.h>
#include "./ordenacoes.hpp"

main(){
    // int v[] = {72, 69, 51, 33, 28, 15};
    // quick_Sort(v, 2, 4);
    //     do{
    //     cout << v[i] << " ";
    //     i++;
    // } while (i < 6);
    int v2[] = {46, 28, 51, 33, 72, 15, 69};
    int i = 0;

    quick_Sort(v2, 1, 4);
        do{
        cout << v2[i] << " ";
        i++;
    } while (i < 7);
}