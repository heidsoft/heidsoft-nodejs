/**
 * @author wind.b.liu@leaptocloud
 * @description This is a module for providing docker Controller
 * @version 0.1.0
 */

(function(window, angular, undefined) {'use strict';


angular.module("docker.containers",[])
.controller('ContainersController',['$scope','Container',
function($scope,Container){

    //draw grid
    //$("#jqGrid").jqGrid({
    //    url: '',
    //    mtype: "GET",
    //    datatype: "jsonp",
    //    colModel: [
    //        { label: '名称', name: 'name', width: 200 },
    //        { label: '状态̬', name: 'status', width: 200 },
    //        { label: '镜像', name: 'image', width: 200 },
    //        { label: '服务地址ַ', name: 'servicesite', width: 200 },
    //        { label: '创建时间', name: 'createtime', width: 400 }
    //    ],
    //    viewrecords: true,
    //    width: 780,
    //    height: 250,
    //    rowNum: 20,
    //    pager: "#jqGridPager"
    //});

    $scope.baseParam = {
        limit : 5,
        offset : 0
    };
    //定义grid
    $scope.Grid = {
        data : [],
        action : {
            fetchData: function (search, fnCallback) {
                $scope.baseParam.limit = search.limit;
                $scope.baseParam.offset = search.offset;
                Container.query($scope.baseParam,function(data){
                    console.log("query ...");
                    console.log(data);
                    $scope.Grid.data = data;
                    var result={
                        rows:data,
                        total:5
                    }
                    fnCallback(result);
                });
            }
        }
    };
    $scope.Grid.config = {
        paging: true, //grid默认分页
        reload: null, //重新加载
        getData: $scope.Grid.action.fetchData,
        columns: [
            {   sTitle: "ID", mData: "id"},
            {   sTitle: "创建时间", mData: "created"},
            {   sTitle: "镜像大小", mData: "size"},
            {   sTitle: "镜像虚拟大小", mData: "virtualSize"},
            {   sTitle: "父镜像", mData: "parent"}
        ],
        columnDefs: [
            { bSortable: false, aTargets: [ 0 , 2] },
        ],
        defaultOrderBy: [],
        displayLength: 100
    };


    //$('#example').dataTable({
    //    "ajax": {
    //        "url": "http://localhost:8812/docker-service/image/list",
    //        "dataSrc": ""
    //    },
    //    "bFilter": false,    //禁用自带搜索框,默认值true
    //    "bProcessing": true, //启用加载数据提示，默认false
    //    "bStateSave": false, //禁用保存状态到cookie,如每页数量
    //    //"bServerSide": true,
    //    "columns": [
    //        { "data": "id" },
    //        { "data": "created" },
    //        { "data": "size" },
    //        { "data": "virtualSize" },
    //        { "data": "parent" }
    //    ],
    //    "oLanguage": {
    //        "sLengthMenu": "每页显示 _MENU_ 条记录",
    //        "sZeroRecords": "对不起，查询不到任何相关数据",
    //        "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
    //        "sInfoEmpty": "找不到相关数据",
    //        "sInfoFiltered": "（数据表中共为 _MAX_ 条记录）",
    //        "sProcessing": "正在加载中...",
    //        "sSearch": "搜索",
    //        "sUrl": "", //多语言配置文件，可将oLanguage的设置放在一个txt文件中，例：Javascript/datatable/dtCH.txt
    //        "oPaginate": {
    //            "sFirst": "第一页",
    //            "sPrevious": " 上一页 ",
    //            "sNext": " 下一页 ",
    //            "sLast": " 最后一页 "
    //        }
    //    }
    //});

    //$("#jqGrid").jqGrid({
    //    url:"",
    //    datatype:"json", //数据来源，本地数据
    //    mtype:"POST",//提交方式
    //    height:420,//高度，表格高度。可为数值、百分比或'auto'
    //    //width:1000,//这个宽度不能为百分比
    //    autowidth:true,//自动宽
    //    colNames:['名称', '状态', '镜像','服务地址','创建时间'],
    //    colModel:[
    //        //{name:'id',index:'id', width:'10%', align:'center' },
    //        {name:'name',index:'name', width:'20%',align:'center'},
    //        {name:'status',index:'status', width:'20%',align:'center'},
    //        {name:'image',index:'image', width:'20%', align:"center"},
    //        {name:'servicesite',index:'servicesite', width:'20%', align:"center", sortable:false},
    //        {name:'createtime',index:'createtime', width:'20%',align:"center", sortable:false}
    //    ],
    //    rownumbers:true,//添加左侧行号
    //    //altRows:true,//设置为交替行表格,默认为false
    //    //sortname:'createDate',
    //    //sortorder:'asc',
    //    viewrecords: true,//是否在浏览导航栏显示记录总数
    //    rowNum:15,//每页显示记录数
    //    rowList:[15,20,25],//用于改变显示行数的下拉列表框的元素数组。
    //    jsonReader:{
    //        id: "blackId",//设置返回参数中，表格ID的名字为blackId
    //        repeatitems : false
    //    },
    //    pager:$('#jqGridPager')
    //});

    var update = function() {
        Container.get({id: $routeParams.id}, function(d) {
            $scope.container = d;
            $scope.container.edit = false;
            $scope.container.newContainerName = d.Name;
        }, function(e) {
            if (e.status === 404) {
                $('.detail').hide();
                Messages.error("Not found", "Container not found.");
            } else {
                Messages.error("Failure", e.data);
            }
            ViewSpinner.stop();
        });
    };

    $scope.start = function(){
        Container.start({
            id: $scope.container.Id,
            HostConfig: $scope.container.HostConfig
        }, function(d) {
            update();
            Messages.send("Container started", $routeParams.id);
        }, function(e) {
            update();
            Messages.error("Failure", "Container failed to start." + e.data);
        });
    };

    $scope.stop = function() {

        Container.stop({id: $routeParams.id}, function(d) {
            update();
            Messages.send("Container stopped", $routeParams.id);
        }, function(e) {
            update();
            Messages.error("Failure", "Container failed to stop." + e.data);
        });
    };

}]);

})(window, window.angular);

