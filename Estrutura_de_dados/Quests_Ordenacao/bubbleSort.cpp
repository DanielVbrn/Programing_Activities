#include <iostream>
#include <stdio.h>

using namespace std;


// #define troca(a,b) {
//     int x = a;
//     a = b;
//     b = x;
// }

// void bolha(int vetor[], int n){
//     int i, j;
//     for (i = 1; i <= n-1; i++){
//         for ( j = 0; j < n-i; j++){
//             if(vetor[j] > vetor[j+1]) troca(v[j],v[j+1]);
//         }  
//     }   
// }



void bolha(int quant, int *vetor){
    int i, j;
    int troca;
    for (i = quant; i >= 1; i--){
        troca = 0;
        for ( j = 0; j < i; j++){
            if(vetor[j] > vetor[j+1]){
                int temp = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = temp;
                troca = 1;
            }
        }
        
    }
    // if (troca == 0) break;
    
}

void mostraBolha(int *vetor){
    int i = 0;
    while (vetor != NULL){
        cout << vetor[i] << endl;
        i++;
    }   
}


main(){
    int vetor[6] = {9, 4, 12, 43, 56, 5};
    bolha(6,vetor);
    mostraBolha(vetor);
    
}