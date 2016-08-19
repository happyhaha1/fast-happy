package cn.kxlove.dao.test;

import cn.kxlove.dao.UserRepository;
import cn.kxlove.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @author: happyhaha
 * @date: 16/8/19
 */
@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryTester {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testExample() throws Exception {
//        entityManager.persist(new User("sboot","1234"));
        this.entityManager.persist(new User("sboot", "1234"));
        User findUser = this.userRepository.findByName("sboot");
        assertThat(findUser.getName()).isEqualTo("sboot");
        assertThat(findUser.getPhone()).isEqualTo("1234");
    }
}
