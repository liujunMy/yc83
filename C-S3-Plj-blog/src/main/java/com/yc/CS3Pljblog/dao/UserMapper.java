package com.yc.CS3Pljblog.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import com.yc.CS3Pljblog.bean.User;

public interface UserMapper {
	
	@Insert("insert into user values (null,"
			+ "#{name},#{account},#{pwd},#{phone},#{email},"
			+ "#{head},now(),#{status},#{type})")
	public int insert(User user);
	
	@Select("select * from user where account=#{account} and pwd=#{pwd}")
	public User selectByLogin(User user);
	
	@Select("select count(*) from user where account=#{account}")
	public int countByAccount(String account);

}
