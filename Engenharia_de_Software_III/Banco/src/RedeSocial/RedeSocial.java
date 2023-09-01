package RedeSocial;

import java.util.ArrayList;

public class RedeSocial {


    public static void main(String[] args) {
        Post draftPost = new Post(1, "This is a draft post.", Status.Draft);
        draftPost.publish();

        Post publishedPost = new Post(2, "This is a published post.", Status.Published);
        publishedPost.publish();

        publishedPost.deletePost();
    }
}
