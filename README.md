#Ŀ¼�ṹ
```
dist:
ȫ����distribution����ĳЩ����У�
��Ϊ�����ͷ����ǵ����ݻ��ߴ�����ʽ�ǲ�һ���ģ���������Gruntѹ���ȵ�)��
��ʱ�����Ҫһ��������շ����汾�Ĵ��룬�����dist�ļ��е��ô���
```
#ǰ�˹���
```
1.��ǰ��Ӧ����ѭAMD�淶��ʹ��requirejs ����ģ�����
2.login��һ��������html
3.��Ӧ����һ����ҳ��Ӧ��,����ļ���main.js
4.��Ӧ�õ�·������ļ���routes.js
5.��Ӧ�ö����ļ���app.js
6.��Ӧ��Ui·��ʹ��ui.router
7.��Ӧ�õ�gridʹ�� ng-grid
8.ģ������ԭ��
	js\controllers\XxxController.js ҵ�����
	  ������
		js\controllers\index.js ģ������
		������
		js\controllers\module.js ģ�鶨��
	ָ��ͷ�������ú�Controllerһ����ԭ��
```

##��������
```
npm install -g grunt-cli
npm install -g bower
npm install -g gulp

bower init
bower install angular-ui-layout

package.json: 
���ļ���npm���ڴ洢��Ŀ��Ԫ���ݣ��Ա㽫����Ŀ����Ϊnpmģ�顣
������ڴ��ļ����г���Ŀ������grunt��Grunt�����
������devDependencies���ö��ڡ�

Gruntfile: 
���ļ�������Ϊ Gruntfile.js �� Gruntfile.coffee��
�������û�������task��������Grunt����ġ� 
���ĵ����ᵽ�� Gruntfile ��ʵ˵����һ���ļ���
�ļ����� Gruntfile.js �� Gruntfile.coffee��

uglify��һ���ļ�ѹ���������Ŀ��ַ��https://github.com/gruntjs/grunt-contrib-uglify
```

##grun���
```
1).grunt-contrib-uglify��ѹ��js����
2).grunt-contrib-concat���ϲ�js�ļ�
3).grunt-contrib-qunit����Ԫ����
4).grunt-contrib-jshint��js������
5).grunt-contrib-watch���ļ����
```
##ui-layout
	https://github.com/angular-ui/ui-layout
##RequireJS
	RequireJS�������Բ�ͬ�������ķ�ʽȥдJavaScript���㽫����ʹ��script��ǩ��HTML������JS�ļ����Լ�����ͨ��script��ǩ˳��ȥ����������ϵ��
#Angularjs 
```
services��Ϊ������������Ҫ����ʱ�򱻴�����
ֻ����Ӧ���������ڽ�����ʱ�򣨹ر���������Żᱻ�����
��controllers�ڲ���Ҫ��ʱ��ͻᱻ������
```

##Ngָ��

###ng-app
```
ng-app�������б���������Ԫ�ض�����AngularJSӦ��һ��
```
###ng-controller
```
ng-controller�������б���������Ԫ�ض�����ĳ��������
```

#ui-router
```
����״̬����·
```
###ng-view
```
ng-view ��һ������������ǰ·��(/home, /about, or /contact)��ģ���angularָ��, 
�����û����ض�·�ɵ��ļ����������絽��������(index.html).
ֻ�Ǽ򵥵ش���һ��ռλ������һ����Ӧ����ͼ(HTML��ng-template��ͼ)�����Ը������������á�
    <div ng-app="mainApp">
    ...
       <div ng-view></div>
    
    </div>    
```
###ui-sref
      
```
        ui-sref="index"  ״̬·��ָ��
        ui-view  Ƕ����ͼָ��
        
        ui-router�ṩ�������ǿ�����·��Ƕ�׺���ͼ����������. ���ǽ���ʾ���п���ui-router�д��ڵ���������
```

###ng-template

```
ָ������������ʹ��script��ǩ��HTML��ͼ��������һ��������$routeProviderӳ���������ͼ��id�����ԡ�
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

$route����ͨ����ngViewָ��һ��ʹ�á�ngViewָ��Ľ�ɫ��Ϊ��ǰ·�ɰѶ�Ӧ����ͼģ�����뵽����ģ���С�

```

###��װgrunt
###��װgrunt-init
###��װgrunt-init ģ��
###��װgrunt ���
####���ò��
    1).grunt-contrib-uglify��ѹ��js����
    2).grunt-contrib-concat���ϲ�js�ļ�
    3).grunt-contrib-qunit����Ԫ����
    4).grunt-contrib-jshint��js������
    5).grunt-contrib-watch���ļ����
    npm install grunt-contrib-uglify --save-dev
    npm install grunt-contrib-concat --save-dev
    npm install grunt-contrib-qunit --save-dev
    npm install grunt-contrib-jshint --save-dev
    npm install grunt-contrib-watch --save-dev
    