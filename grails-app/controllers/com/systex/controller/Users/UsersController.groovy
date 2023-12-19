package com.systex.controller.Users


import org.springframework.stereotype.Controller


@Controller
class UsersController {

    def index(){
        //render(view: 'index', model:[title:""+baseService.getDesc(session, controller)])
        render(view: "/users/usersIndex")
        //render("welcome to apiTest");
    }

    def createMember(){


    }
}
