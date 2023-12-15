<%--
  Created by IntelliJ IDEA.
  User: 2301000
  Date: 2023/12/15
  Time: 下午 05:52
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main">
    <title></title>
</head>


<body>

    <div class="container" >
        <div class="page-header">
            <div class="col-md-12 main_frame">
                <div class="box1">
                    <h3>${title}</h3>
                </div>
            </div>
        </div>
        <div class="row" >
            <div class="col-md-12">
                <div class="panel panel-default"  id="panel">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-md-12 col-xs-12" style="margin-top:5px;">
                                <button id="add" type="button" class="btn btn-primary" style="margin-top:5px;display:none"><span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;新增</button>
                                <button id="edit" type="button" class="btn btn-primary" style="margin-top:5px;display:none"><span class="glyphicon glyphicon-pencil"></span>&nbsp;&nbsp;修改</button>
                                <button id="remove" type="button" class="btn btn-primary" style="margin-top:5px;display:none"><span class="glyphicon glyphicon-trash"></span>&nbsp;&nbsp;刪除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div id="editPanel" class="modal fade" role="dialog">
            <div class="modal-dialog modal-lg">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header" style="background-color:#ffd699">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="title">Modal Header</h4>
                    </div>
                    <div class="modal-body" style="background-color:#fff5e6">
                        <form class="form-horizontal" role="form" id="editForm">
                            <input type="hidden" id="id" name="id">
                            <div class="form-group" >
                                <div class="row" style="margin:5px">
                                    <div class="col-md-2" style="margin:5px">
                                        <h4><span><font color="red">*</font>姓名</span></h4>
                                    </div>
                                    <div class="col-md-6" style="margin:5px">
                                        <input style="" class="form-control" id="userName" name="userName"/>
                                    </div>
                                </div>
                                <div class="row" style="margin:5px">
                                    <div class="col-md-2" style="margin:5px">
                                        <h4><span><font color="red">*</font>E-Mail位址</span></h4>
                                    </div>
                                    <div class="col-md-6" style="margin:5px">
                                        <input style="" class="form-control" id="noticeAddress" name="noticeAddress"/>
                                    </div>
                                </div>
                                <div class="row" style="margin:5px">
                                    <div class="col-md-2" style="margin:5px">
                                        <h4><span>例外</span></h4>
                                    </div>
                                    <div class="col-md-6" style="margin:5px">
                                        <ul id="exceptionList" class="list-group"></ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer" style="background-color:#ffd699">
                        <div class="row">
                            <div class="col-md-6 col-xs-6" >
                                <button id="save" type="button" class="btn btn-primary btn-block"><span class="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;儲存</button>
                            </div>
                            <div class="col-md-6 col-xs-6" >
                                <button type="button" class="btn btn-primary btn-block" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span>&nbsp;&nbsp;取消</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>
</html>