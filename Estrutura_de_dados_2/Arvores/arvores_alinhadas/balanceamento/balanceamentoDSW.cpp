#include <iostream>
#include <cmath>

using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int data) {
        this->data = data;
        left = nullptr;
        right = nullptr;
    }
};

// Função auxiliar para realizar uma rotação à esquerda
Node* rotateLeft(Node* root) {
    if (root == nullptr || root->right == nullptr)
        return root;

    Node* newRoot = root->right;
    root->right = newRoot->left;
    newRoot->left = root;
    return newRoot;
}

// Função auxiliar para realizar uma rotação à direita
Node* rotateRight(Node* root) {
    if (root == nullptr || root->left == nullptr)
        return root;

    Node* newRoot = root->left;
    root->left = newRoot->right;
    newRoot->right = root;
    return newRoot;
}

// Função para realizar o balanceamento DSW
Node* balanceDSW(Node* root) {
    int n = 0;
    Node* cur = root;
    while (cur != nullptr) {
        if (cur->left != nullptr) {
            cur = rotateRight(cur);
            cur = cur->right;
        }
        else {
            cur = cur->right;
            n++;
        }
    }

    int m = 1 << static_cast<int>(log2(n + 1)) - 1;
    cur = root;
    for (int i = n - m; i > 0; i--) {
        cur = rotateLeft(cur);
        if (i % 2 == 0)
            cur = cur->right;
    }

    while (m > 1) {
        m /= 2;
        cur = rotateLeft(cur);
        for (int i = 0; i < m - 1; i++)
            cur = cur->right;
    }

    return cur;
}

// Função para inserir um nó em uma árvore AVL
Node* insertNode(Node* root, int data) {
    if (root == nullptr)
        return new Node(data);

    if (data < root->data)
        root->left = insertNode(root->left, data);
    else if (data > root->data)
        root->right = insertNode(root->right, data);

    return root;
}

// Função para imprimir a árvore em ordem
void inorderTraversal(Node* root) {
    if (root != nullptr) {
        inorderTraversal(root->left);
        cout << root->data << " ";
        inorderTraversal(root->right);
    }
}

// Função para liberar a memória ocupada pela árvore
void freeTree(Node* root) {
    if (root != nullptr) {
        freeTree(root->left);
        freeTree(root->right);
        delete root;
    }
}

int main() {
    Node* root = nullptr;
    int arr[] = { 4, 2, 6, 1, 3, 5, 7 };

    for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++)
        root = insertNode(root, arr[i]);

    cout << "Árvore antes do balanceamento DSW:\n";
    inorderTraversal(root);
    cout << endl;

    root = balanceDSW(root);

    cout << "Árvore após o balanceamento DSW:\n";
    inorderTraversal(root);
    cout << endl;

    freeTree(root);

    return 0;
}
