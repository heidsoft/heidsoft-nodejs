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
##Ŀ¼�ṹ
```

```
##��������
```
 
```

##nodejs

##��װbower
	npm install -g bower
##��ʼ��ui���
	bower init
##�������
	bower install angular-ui-layout\#bower
##We use Karma and jshint to ensure the quality of the code
	npm install -g gulp
	npm install && bower install
	gulp
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
    