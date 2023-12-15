package com.systex.controller.Users

import com.systex.ibt.vo.UsersVo
import org.springframework.stereotype.Controller


@Controller
class UsersController {

    def index(){
        //render(view: 'index', model:[title:""+baseService.getDesc(session, controller)])
        render(view: "/users/index")
        //render("welcome to apiTest");
    }

    def createMember(){


    }
}
