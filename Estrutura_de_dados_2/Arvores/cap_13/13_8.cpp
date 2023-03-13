#include "stdio.h"
#include "stdlib.h"
#include "iostream"
#include "./first_arvore.hpp"
using namespace std;



int main(){
    NoArv* arv = arv_cria(
                    '*',
                    arv_cria(
                        '/',
                        arv_cria('+',
                                arv_cria(5, NULL, NULL),
                                arv_cria(3,NULL,NULL)
                                ),
                        arv_cria(4,NULL,NULL)
                    ),
                    arv_cria(
                        '-',
                        arv_cria(6,NULL,NULL),
                        arv_cria(1,NULL,NULL)
                    )
                );

    cout << ">" << valor(arv) << endl;
}