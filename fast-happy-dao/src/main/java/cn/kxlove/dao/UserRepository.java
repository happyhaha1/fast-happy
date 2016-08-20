package cn.kxlove.dao;

import cn.kxlove.model.User;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

/**
 * @author: happyhaha
 * @date: 16/8/19
 */
public interface UserRepository extends CrudRepository<User,Long>,JpaSpecificationExecutor {

    User findByName(String name);

    Integer deleteByName(String name);

}
