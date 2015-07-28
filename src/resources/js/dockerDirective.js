/**
 * @author wind.b.liu@leaptocloud
 * @description This is a module for providing docker directive
 * <p>
 *   1.通过指令封装datatable默认配置项
 * <p>
 * @version 0.1.0
 */

(function(window, angular, undefined) {'use strict';

    /**
     * @description define a parse object
     */
    var ParseFactory = function($parse){
        this._parse = $parse;
    };
    ParseFactory.prototype.getValue = function(varName,scope){
        //this _parse is  $parse(exp, interceptorFn, expensiveChecks)
        //this varName is Grid.config
        var getter = this._parse(varName);
        return getter(scope);
    };
    ParseFactory.prototype.setValue = function(varName,varValue,scope){
        var setter = this._parse(varName).assign;
        setter(scope,varValue);
        if(scope.$apply!=undefined){
            if (!scope.$$phase) {
                scope.$apply();
            }
        }
    };

    /**
     * @description define my docker directive
     * @type {module}
     */
    var dockerDirective = angular.module('docker.directive',['ngResource']);
    dockerDirective.directive('ngMyTable',['$compile','$parse', function($compile,$parse) {
        var parseFactory = new ParseFactory($parse);
        return {
            link: function(scope, element, attrs) {
                var config = parseFactory.getValue(attrs.ngMyTable,scope);
                var rowsName = "rows";
                var countName = "total";
                var paging = true;
                if(config.rowsName){
                    rowsName = config.rowsName;
                }
                if(config.countName){
                    countName = config.countName;
                }
                if(config.paging!=null){
                    paging = config.paging;
                }
                var sortBy = [];
                var tableObj = element.dataTable({

                    /*自带的搜索框,默认值true*/
                    "bFilter": false,

                    /*每页的条数选择框,默认true*/
                    "bLengthChange": false,

                    /*分页，默认true*/
                    "bPaginate": paging ,

                    "bInfo":paging,

                    /*排序功能，默认true*/
                    "bSort": true,

                    /*分页，一共两种样式，full_numbers和two_button(默认)*/
                    "sPaginationType": "full_numbers",

                    /*保存状态到cookie,如每页数量*/
                    "bStateSave": false,

                    "bServerSide": true,

                    "sAjaxSource": "",

                    //"bJQueryUI": true ,//启用jQuery UI样式.默认值false
                    //"aaData": aDataSet, //使用的js array格式数据
                    //"bProcessing": true, //正在加载数据提示，默认false

                    "fnServerData": function ( sSource, aoData, fnCallback ) {
                        var sEcho = aoData[0].value;
                        var colsNum = aoData[1].value;
                        var offset = aoData[3].value;
                        var limit = aoData[4].value;
                        config.getData(
                            {
                                limit : limit, //每页条数(即取多少条数据)
                                offset : offset //从第几条数据开始取
                            },
                            function(data){
                                var iTotalRecords = data[countName];
                                var aaData = data[rowsName];
                                fnCallback({
                                    sEcho: sEcho,
                                    iTotalRecords:iTotalRecords,
                                    iTotalDisplayRecords:iTotalRecords,
                                    aaData:aaData
                                });
                            }
                        );
                    },

                    /*创建行得时候的回调函数*/
                    "fnCreatedRow":function(nRow, aData, iDataIndex){
                        $compile(nRow)(scope)
                    },

                    /*初始化结束的回调函数*/
                    "fnInitComplete": function(oconfig, json) {
                        $compile(element.find("thead"))(scope);
                    },

                    /*设置表格的语言选项*/
                    "oLanguage": {
                        "sLengthMenu": "每页显示 _MENU_ 条记录",
                        "sZeroRecords": "对不起，查询不到任何相关数据",
                        "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录。",
                        "sInfoEmpty": "找不到相关数据",
                        "sInfoFiltered": "（数据表中共为 _MAX_ 条记录）",
                        "sProcessing": "正在加载中...",
                        "sSearch": "搜索",
                        "sUrl": "", //可将oLanguage的设置放在txt文件中，例：Javascript/datatable/dtCH.txt
                        "oPaginate": {
                            "sFirst": "第一页",
                            "sPrevious": " 上一页 ",
                            "sNext": " 下一页 ",
                            "sLast": " 最后一页 "
                        }
                    },

                    /**
                     * aoColumns设置列时，不可以任意指定列，必须列出所有列。如果某一列不需要设置，则要赋值null
                     */
                    "aoColumns": config.columns,

                    /**
                     * aoColumnDefs设置列的属性时，可以任意指定列，并且不需要给所有列都设置
                     * 如果aoColumnDefs和aoColumns同时给同一列的同一个属性设置了值，那么aoColumns的优先级要高
                     */
                    "aoColumnDefs": config.columnDefs,

                    /**
                     * 指定按多列数据排序的依据
                     *  [[1, 'desc']]
                     */
                    "aaSorting": config.defaultOrderBy,

                    /**
                     *用于指定一屏显示的条数，需开启分页器,(整数）默认为10
                     */
                    "iDisplayLength": config.displayLength ? config.displayLength : 100,

                    /**
                     * 这个为选择每页的条目数，当使用一个二维数组时，二维层面只能有两个元素，
                     * 第一个为显示每页条目数的选项，第二个是关于这些选项的解释
                     */
                    "aLengthMenu": [20,50,100]
                });
            }
        };
    }]);

})(window, window.angular);
