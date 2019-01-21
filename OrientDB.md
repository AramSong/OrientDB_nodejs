## OrientDB

* 관계성 데이터를 처리할 때 빠르게 처리할 수 있음.  독립서버라도 실행이 가능하고, 임베디드도 실행이 가능.

* 더 중요한 것은 GraphDB.(그래프라는 것은 관계성. 어떤 정보가 다른 정보와 함께 어떤 관계성을 가지고 있냐는 것을 나타냄.) 

* 관계형 데이터베이스에 대비해서 그래프 데이터베이스는 더 효율적으로 관계를 나타낼 수 있음.

* 기존의 관계형 데이터베이스가 표로 나타낸다면, documnet database는 문서로 저장. 정보를 훨씬 더 유연하게 저장할 수 있음.

* Object-oriented conpcets : 부모-자식 관계를 통해 더 다양한 데이터베이스를 표현가능.예를 들어, 본문의 글이 있으면 그 밑에 댓글이 달리는 형식.

* table대신 `class`라는 표현을 씀. 어떠한 데이터가 저장되는 공간이 상속관계에서 구조의 재사용성을 추구할 수 있는 장점이 있음.

* 관계형 데이터베이스의 경우, 테이블로 구조를 짬. NoSQL(Not only SQL)의 경우 구조를 짜지 않는 경우가 있음. 그 둘중의 하나의 특성을 가지고 있는데 OrientDB는 이러한 두가지 특성을 자유롭게 쓸 수 있음

* 현대적인 데이터베이스들은 자체적으로 사용자 인증체계를 갖고있는데, orientDB는 사용자에 대한 권한을 행단위로 가지고 있음.일반적인 데이터베이스의 경우 테이블 단위로 권한을 수행.(테이블의 모든 정보를 활용)


### OrientDB 설치

* 자바로 만들어진 데이터베이스 시스템

* 기본적으로 자바가 필요

  `java jdk` 설치해야 함.

* 홈페이지에서 다운로드 후, C드라이브에 저장.`윈도우키 + r`에서 cmd실행

![1548054536952](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548054536952.png)

![1548054607587](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548054607587.png)

* 관리자 권한으로 데이터베이스를 세팅하기 위해 필요. 관리자의 비밀번호 설정. 엔터를 칠경우 자동으로 비밀번호 설정

![1548054637316](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548054637316.png)

* 

![1548054723206](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548054723206.png)

* 2480을 통해 url에 입력한 후 접속.`localhost:2480`

![1548054825788](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548054825788.png)

* OrientDB에서 제공하는 관리자 모드 화면

![1548054884507](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548054884507.png)

* `NEW DB`를 통해서 데이터베이스를 생성.

  ![1548054975172](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548054975172.png)

* `CREATE DATABASE` 클릭.

* ![1548055019560](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548055019560.png)

* 데이터베이스 생성

![1548055048341](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548055048341.png)



### Orient DB 클래스 생성

데이터의 구조를 정의. 

* `Schema`에 들어가서 새로운 클래스(테이블)을 생성

* `NEW VERTEX`를 통해서 새로운 클래스(topic) 생성

  ![1548055244124](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548055244124.png)

  * Graph형태이기 때문에 "Vertice"와  ''Edge"가  존재. 이 클래스는 자동으로 그래프 모드로 데이터베이스를 생성.
  * Vertice Classs
  * Edge Class

* `NEW PROPERTY`를  통해 column을 정의. 이를 통해 테이블 구조를 정의한다.

  ![1548056094050](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548056094050.png)

  ![1548056128777](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548056128777.png)

* `NEW RECORD`를 통해 데이터를 생성.(행 (row) 추가)

![1548056235773](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548056235773.png)

![1548056287119](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548056287119.png)

* `ADD FIELD`를 통해 새로운 column을 추가할 수 있음.

* `BROWSE`탭에서 SQL문을 통해서 실행.

  ![1548056423178](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548056423178.png)

* `EDGE`를 사용하면 훨씬 더 복잡한 관계형 테이블을 생성할 수 있음.

* 접속할 때, `demoDB`를 통해 여러 기능들을 사용할 수 있음.

* 여기서 나타나는 점 하나가 오라클 DB에서는 테이블을 나타냄. 관계형 데이터베이스에서는 `JOIN`을 통해 나타내는데, OrientDB은 `edge`를 통해서 나타냄.(관계성 부여)

  ![1548056546964](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548056546964.png)

### 자바스크립트를 통한 OrientDB 실행

> https://github.com/orientechnologies/orientjs

* **Installation**

```
npm install orientjs --save
```

* `database_orientdb.js`파일을 생성하여, orientdb를 이용해서 자바스크립트로 오리엔트 디비에 데이터를 추가하는 간단한 파일.

```javascript
var OrientDB = require('orientjs');

var server = OrientDB({
    //localhost: orientdb와 코드가 실행하는  nodejs가 같은 컴퓨터 내에있음을 뜻함.
   host: 'localhost',
   port: 2424,
   username: 'root',
   password: 'yourpassword'
});
```

* **Initializing the Database API**

```javascript
//데이터베이스 핸들링
//내부적으로 'BaseballStats'라는 db의 커넥션이 실행.
var db = server.use('BaseballStats')
console.log('Using Database:'  + db.name);
```

* **Record API**  : 정보에 해당하는 레코드 한 행을 가져오겠다.(#1:1)

```javascript
db.record.get('#1:1')
    .then(function (record){
   	console.log('Loaded record:',record); 
});
```

![1548057534045](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548057534045.png)

* 노란색으로 색칠한 부분이 식별자. 이 식별자를 통해 해당 행의 데이터를 가져올 수 있다. 관계형 데이터베이스에서는 primary key를 사용함. 

### CRUD

* **SELECT**

```javascript
var sql = 'SELECT FROM topic';
db.query(sql).then(function(results){
  console.log(results);
});

```

![1548059395040](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548059395040.png)

데이터들이 배열로 출력.

- 하나의 행만을 출력. 식별자에 맞는 데이터를 출력한다(where 조건이 있냐 없냐의 차이.)

```javascript
var sql = 'SELECT FROM topic WHERE @rid=:rid';
var param = {
  //params라는 property에 rid값을 넣어줌.
  params:{
    rid:'#46:0'
  }
};
db.query(sql,param).then(function(results){
  console.log(results);
});
```

![1548059567311](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548059567311.png)

* **INSERT**

```javascript
//INSERT
var sql = "INSERT INTO topic (title, description) VALUES(:title,:desc)" ;
var param = {
  params:{
    title:'Express',
    desc:'Express is framework for web'
  }
}
db.query(sql,param).then(function(results){
  console.log(results);
});
```

![1548060285911](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548060285911.png)

![1548060337602](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548060337602.png)

* **UPDATE**

```javascript
//UPDATE
var sql = "UPDATE topic SET title=:title WHERE @rid=:rid";
db.query(sql,{params:{title:'Expressjs',rid:'#47:0'}}).then(function(results){
  console.log(results);
})
```

![1548061184352](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548061184352.png)

수정하게 되면 OrientDB 자바 스크립트는 몇개의 행이 수정되었는지 보여줌. 즉 위 결과 값은 1개의 행이 수정되었다는 것을 나타낸다.

![1548061284598](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548061284598.png)

* **DELETE**

```javascript
//DELETE
var sql = "DELETE VERTEX FROM topic WHERE @rid=:rid";
db.query(sql,{params:{rid:'#47:0'}}).then(function(results){
  console.log(results);
});
```

`delete`를 수행할 때, vertext를 삭제할 경우 꼭 `DELETE VERTEX`라고 써줘야 함.

![1548061472000](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548061472000.png)

UPDATE와 마찬가지로 한 행이 삭제되었다는 것을 알려줌.(리턴값 : results는 몇개의 행이 수정되고 삭제됐는지를 알려준다.)

![1548061511979](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\1548061511979.png)

한개의 행이 삭제된 것을 알 수 있음.