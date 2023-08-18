enum Status {
    Draft,
    Published,
    Deleted
}


public class Post {
    private int id;
    private String text;

    private Status status;

    Post(int id, String text, Status status) {
        this.id = id;
        this.text = text;
        this.status = status;
    }

    public Status getStatus() {
        return status;
    }

    public void publish(Post post) {
        if (post.getStatus() == status.t)
    }


}
