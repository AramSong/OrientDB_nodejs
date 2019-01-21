var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
//multer라는 객체가 storage를 리턴하면 그 값을 _storage로 넘겨줌
//({}): 객체 리터럴
var _storage = multer.diskStorage({
  //call back
  //file path
  destination: function (req,file,cb){
    cb(null,'uploads/');
    //파일의 형식이 이미지일경우
    // if()
    //   cb(null,'uploads/images');
    //파일의 형식이 텍스트일 경우
    // else if()
    //   cb(null,'uploads/texts');
    //파일 저장 경로
    //cb(null, 'uploads/')
  },
  //filename 은 저장할 파일의 이름을 어떻게 할 것인가를 결정
  filename: function(req, file, cb){
    //파일 저장 정보를 이름으로
    //만약 이미 파일이 존재한다면,
    //동일 이름의 파일 중에 가장 큰 숫자를 끝에 붙인다.
  //  if()
      cb(null, file.originalname);
      //  cb(null,file.originalname);
  //  else
  }
})
//multer는 사용자의 파일 upload를 처리
var upload = multer({ storage: _storage})
var fs = require('fs');
var app  = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true;
app.use('/user',express.static('uploads'));
app.set('views','./views_file');
app.set('view engine','jade');
app.get('/upload',function(req,res){
  res.render('upload');
})
//사용자가 post한 데이터가 upload폴더로 향하고 있다면
app.post('/upload',upload.single('userfile'),function(req,res){
  //upload.singe() : 사용자가 전송한 데이터가 만약 파일이 포함되어 있다면
  //파일을 가공해서  request의 파일이라는 프로퍼티를 암시적으로 추가하도록 하는 함수
  //정확하게는 미들웨어
  //실행
  //request의 파일이라는 객체에 전송한 파일에 대한 정보를 넣어줌.
  //file 프로퍼티를 통해서 사용자가 보낸 파일에 대한 정보를 얻을 수 있다.
  console.log(req.file);
  res.send('Uploaded : ' + req.file.filename );
})
app.get('/topic/new',function(req,res){
  fs.readdir('data',function(err,files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
      res.render('new',{topics:files});
  });

})
app.get(['/topic','/topic/:id'],function(req,res){
  fs.readdir('data',function(err,files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server error');
    }
    var id = req.params.id;
    if(id){
      //id값이 있을 때 사용
      //2.readFile을 통해서 id값에 해당하는 data(해당 파일의 내용)를 가져옴.
      fs.readFile('data/' + id,'utf-8',function(err,data){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server error');
        }
      //3. title의 내용으로 id값을 주고,each문을 위한 topics값을 files로
        res.render('view',{topics:files,title:id,description:data});
      })
    } else{
      //id값이 없을 때 사용
      res.render('view',{topics:files,title:'Welcome',description:'Hello, JavaScript for Server.'});
    }
  })
});
// app.get('/topic/:id',function(req,res){
//   var id = req.params.id;
//   //1.readir을 통해서 data디렉토리에 있는 목록을 가져옴
//   fs.readdir('data',function(err,files){
//     if(err){
//       console.log(err);
//       res.status(500).send('Internal Server error');
//     }
//   })
// })
app.post('/topic',function(req,res){
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/' + title,description,function(err){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    //redirect를 이용하면 사용자를 해당 주소로 보낼 수 있음.
    res.redirect('/topic/'+title);
  })


})
app.listen(3000,function(){
  console.log('Connected,3000port!');
})
