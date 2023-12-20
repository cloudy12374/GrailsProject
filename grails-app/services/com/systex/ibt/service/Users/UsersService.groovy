package com.systex.ibt.service.Users

import com.systex.domain.users.Users
import org.springframework.stereotype.Service

//import grails.transaction.Transactional

@Service
class UsersService {

    public Integer size(){
        return Users.count();
    }
	
	
}
