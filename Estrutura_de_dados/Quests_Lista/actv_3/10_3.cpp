
#include "iostream"
#include "listaOrdenada.hpp"
using namespace std;

void inSR(Item x, Lista *l) {
    if (!procurar(x, *l)) insert(x, l);
}

int main() {
    Lista l;
    l = include(34, include(23, include(12, NULL)));
    showList(l);
    inSR(5, &l);
    showList(l);
}