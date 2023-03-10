#include "./first_arvore.hpp"

main(){
    NoArv* arv = arv_cria(
                1,
                arv_cria(
                    2,
                    arv_cria(4,NULL,NULL),
                    arv_cria(5,NULL,NULL)
                ),
                    arv_cria(3,NULL,arv_cria(6,NULL,NULL)
                )
            );
}