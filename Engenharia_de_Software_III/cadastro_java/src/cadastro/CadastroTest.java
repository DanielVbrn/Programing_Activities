package cadastro;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
public class CadastroTest {
    Cadastro cadastro;
    User user;
    @BeforeEach
    public void setUp() {
        cadastro = new Cadastro();
    }

    @BeforeEach
    public void setUpUser() {
        user = new User(1,"Daniel",19, "daniel@gmail.com");
    }

    @Test
    public void testRegister() {
        cadastro.addUser(user);
        assertTrue(cadastro.getUsersById(user.getId()));
    }

    @Test
    public void testResgisterName() {
        cadastro.addUser(user);
        assertThrows()
    }

}
