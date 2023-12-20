package com.systex.controller.Users

import com.systex.ibt.service.Users.UsersService
import com.systex.ibt.vo.JsonResponse

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import grails.converters.JSON;

@Controller
class UsersController {

    @Autowired
    UsersService usersService;
    def index(){
        //render(view: 'index', model:[title:""+baseService.getDesc(session, controller)])
        render(view: "/users/usersIndex")
        //render("welcome to apiTest");
    }

    def createMember(){


    }

    def queryList(){

        JsonResponse response = new JsonResponse();
        try {
            Integer max = 10;
            Integer page= params.get("page") ? new Integer(params.get("page")) : 1;
            Map condition=[
                    max: max,
                    offset:(page-1) * max
            ]

            int totalCount = usersService.size();
            response.setProcessCode(200);
            response.setData(totalCount);
            render response as JSON;

           

        }catch(Exception e){

        }


    }
}
