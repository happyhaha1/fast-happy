package cn.kxlove.model;

import lombok.Data;

import javax.persistence.*;

/**
 * @author: happyhaha
 * @date: 16/8/19
 */
@Entity
@Table(name = "user")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String phone;
}
