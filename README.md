#目录结构
```
dist:
全称是distribution。在某些框架中，
因为开发和发布是的内容或者代码形式是不一样的（比如利用Grunt压缩等等)，
这时候就需要一个存放最终发布版本的代码，这就是dist文件夹的用处。
```
#前端构建
```
1.本前端应用遵循AMD规范，使用requirejs 进行模块管理
2.login是一个单独的html
3.本应用是一个单页的应用,入口文件是main.js
4.本应用的路由入口文件是routes.js
5.本应用定义文件是app.js
6.本应用Ui路由使用ui.router
7.本应用的grid使用 ng-grid
8.模块依赖原则
	js\controllers\XxxController.js 业务控制
	  依赖于
		js\controllers\index.js 模块索引
		依赖于
		js\controllers\module.js 模块定义
	指令和服务定义采用和Controller一样的原则
```

##开发工具
```
npm install -g grunt-cli
npm install -g bower
npm install -g gulp

bower init
bower install angular-ui-layout

package.json: 
此文件被npm用于存储项目的元数据，以便将此项目发布为npm模块。
你可以在此文件中列出项目依赖的grunt和Grunt插件，
放置于devDependencies配置段内。

Gruntfile: 
此文件被命名为 Gruntfile.js 或 Gruntfile.coffee，
用来配置或定义任务（task）并加载Grunt插件的。 
此文档中提到的 Gruntfile 其实说的是一个文件，
文件名是 Gruntfile.js 或 Gruntfile.coffee。

uglify是一个文件压缩插件，项目地址：https://github.com/gruntjs/grunt-contrib-uglify
```

##grun插件
```
1).grunt-contrib-uglify：压缩js代码
2).grunt-contrib-concat：合并js文件
3).grunt-contrib-qunit：单元测试
4).grunt-contrib-jshint：js代码检查
5).grunt-contrib-watch：文件监控
```
##ui-layout
	https://github.com/angular-ui/ui-layout
##RequireJS
	RequireJS会让你以不同于往常的方式去写JavaScript。你将不再使用script标签在HTML中引入JS文件，以及不用通过script标签顺序去管理依赖关系。
#Angularjs 
```
services作为单例对象在需要到的时候被创建，
只有在应用生命周期结束的时候（关闭浏览器）才会被清除。
而controllers在不需要的时候就会被销毁了
```

##Ng指令

###ng-app
```
ng-app声明所有被它包含的元素都属于AngularJS应用一样
```
###ng-controller
```
ng-controller声明所有被它包含的元素都属于某个控制器
```

#ui-router
```
根据状态进行路
```
###ng-view
```
ng-view 是一个用来包含当前路由(/home, /about, or /contact)的模板的angular指令, 
它会获得基于特定路由的文件并将其诸如到主布局中(index.html).
只是简单地创建一个占位符，是一个相应的视图(HTML或ng-template视图)，可以根据配置来放置。
    <div ng-app="mainApp">
    ...
       <div ng-view></div>
    
    </div>    
```
###ui-sref
      
```
        ui-sref="index"  状态路由指令
        ui-view  嵌套视图指令
        
        ui-router提供了让我们可以做路由嵌套和视图命名的特性. 我们将在示例中看到ui-router中存在的所有类型
```

###ng-template

```
指令是用来创建使用script标签的HTML视图。它包含一个用于由$routeProvider映射控制器视图“id”属性。
    <div ng-app="mainApp">
    ...
       <script type="text/ng-template" id="addStudent.html">
          <h2> Add Student </h2>
             {{message}}
       </script>
    
    </div>   
```
###$route

```

$route服务通常和ngView指令一起使用。ngView指令的角色是为当前路由把对应的视图模板载入到布局模板中。

```

###安装grunt
###安装grunt-init
###安装grunt-init 模板
###安装grunt 插件
####常用插件
    1).grunt-contrib-uglify：压缩js代码
    2).grunt-contrib-concat：合并js文件
    3).grunt-contrib-qunit：单元测试
    4).grunt-contrib-jshint：js代码检查
    5).grunt-contrib-watch：文件监控
    npm install grunt-contrib-uglify --save-dev
    npm install grunt-contrib-concat --save-dev
    npm install grunt-contrib-qunit --save-dev
    npm install grunt-contrib-jshint --save-dev
    npm install grunt-contrib-watch --save-dev
    