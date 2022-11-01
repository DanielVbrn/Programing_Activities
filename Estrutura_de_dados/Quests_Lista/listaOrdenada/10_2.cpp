#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
#include "listaOrden.hpp"
using namespace std;




main(){
    Lista *l = new Lista();
    l->addOrd(12,"Daniel");
	l->addOrd(4,"Marcos");
	l->addOrd(43,"João");
	l->addOrd(32,"Fabio");
    
    l->mostraFimIni();
    
}

