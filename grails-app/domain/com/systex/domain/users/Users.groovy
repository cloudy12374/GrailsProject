package com.systex.domain.users

class Users {

	String username
	String password
	String email
	String fullName
	Date registrationDate
	Date lastLoginDate
	
	static constraints = {
		// �w�q�����A�Ҧp�ߤ@�ʡB���׵�
		username unique: true
		email unique: true
	}

	static mapping = {
		// �w�q�P��Ʈw��檺�M�g
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

	static transactional = true // �T�O�o�@��s�b
}
