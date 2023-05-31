#include <iostream>


using namespace std;

template <typename T>
class AVLTree {
private:
    struct NoArv {
        T data;
        int height;
        NoArv* left;
        NoArv* right;

        NoArv(const T& el) {
            data = el;
            height = 1;
            left = nullptr;
            right = nullptr;
        }
    };

    NoArv* root;

    int getHeight(NoArv* node) const {
        if (node == nullptr) {
            return 0;
        }
        return node->height;
    }

    void updateHeight(NoArv* node) {
        int leftHeight = getHeight(node->left);
        int rightHeight = getHeight(node->right);
        node->height = max(leftHeight, rightHeight) + 1;
    }

    NoArv* rotateLeft(NoArv* root) {
        NoArv* newRoot = root->right;
        root->right = newRoot->left;
        newRoot->left = root;

        updateHeight(root);
        updateHeight(newRoot);

        return newRoot;
    }

    NoArv* rotateRight(NoArv* root) {
        NoArv* newRoot = root->left;
        root->left = newRoot->right;
        newRoot->right = root;

        updateHeight(root);
        updateHeight(newRoot);

        return newRoot;
    }

    NoArv* balanceArv(NoArv* node) {
        updateHeight(node);

        int balanceFactor = getHeight(node->left) - getHeight(node->right);

        if (balanceFactor > 1) {
            if (getHeight(node->left->left) < getHeight(node->left->right)) {
                node->left = rotateLeft(node->left);
            }
            node = rotateRight(node);
        } else if (balanceFactor < -1) {
            if (getHeight(node->right->left) > getHeight(node->right->right)) {
                node->right = rotateRight(node->right);
            }
            node = rotateLeft(node);
        }

        return node;
    }

    NoArv* insertValue(NoArv* node, const T& value) {
        if (node == nullptr) {
            return new NoArv(value);
        }

        if (value < node->data) {
            node->left = insertValue(node->left, value);
        } else {
            node->right = insertValue(node->right, value);
        }

        return balanceArv(node);
    }

public:
    AVLTree() : root(nullptr) {}

    void insert(const T& value) {
        root = insertValue(root, value);
    }

    void printInOrder(NoArv* node) const {
        if (node == nullptr) {
            return;
        }
        printInOrder(node->left);
        cout << node->data << " ";
        printInOrder(node->right);
    }

    void printInOrder() const {
        printInOrder(root);
        cout << endl;
    }
};

int main() {
    AVLTree<int> tree;

    // Inserindo os valores na árvore
    tree.insert(7);
    tree.insert(6);
    tree.insert(22);
    tree.insert(14);
    tree.insert(40);
    tree.insert(63);

    // Imprimindo a árvore em ordem
    tree.printInOrder();

    return 0;
}
