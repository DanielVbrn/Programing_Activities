package RedeSocial;

enum Status {
    Draft,
    Published,
    Deleted,

    Empty
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

    public void setStatus(Status newStatus) {
        status = newStatus;
    }

    public void deletePost() {
        setStatus(Status.Deleted);
        System.out.println("Post removed.");
    }

    public void publish() {
        if (validate()) {
            setStatus(Status.Published);
            System.out.println("Post published.");
        }
    }

    public boolean validate() {
        if (text.trim().isEmpty()){
            throw new RuntimeException("Post is Empty!");
        }
        return true;
    }


}
