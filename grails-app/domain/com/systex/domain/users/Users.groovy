package com.systex.domain.users

class Users {

	String username
	String password
	String email
	String fullName
	Date registrationDate
	Date lastLoginDate
	
	static constraints = {
		// 定義約束，例如唯一性、長度等
		username unique: true
		email unique: true
	}

	static mapping = {
		// 定義與資料庫表格的映射
		table 'users'
		version false
		id column: 'user_id'
		username column: 'username'
		password column: 'password'
		email column: 'email'
		fullName column: 'full_name'
		registrationDate column: 'registration_date'
		lastLoginDate column: 'last_login_date'
	}

	static transactional = true // 確保這一行存在
}
