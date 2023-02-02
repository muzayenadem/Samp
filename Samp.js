class nam{
  constructor(a){
    this.a=a
    this.b= function(b){
      return this.a=b
    }
  }
  ret(){
    return document.getElementById("kk").innerHTML=this.a
  
  }
}

el = new nam('<img src="br.jpg"></img>')
//el.ret()

function ab(){
el.ret()
}
  function inp(){
  const ps = `<div id="fix2">
  <div id="pic1">
  <div id="plc">
  ${el.ret()}
  </div>
  </div>
  <div id="change"></div>
  <div id="btn1" onclick="as()" >Change</div>
  </div>`
  document.getElementById("fix").innerHTML=ps
  }
function ch(){
  const dd = document.getElementById("input").value;
  el.b(dd)
    document.getElementById("plc").innerHTML=el.ret()
  }
  const as = () =>{
  const sure =  confirm (' are u sure')
  if (sure == true){
    const inp = `<div>
    <input id="input" type="file" placeholder="choice photo"></input>
    </hr>
        <h2 onclick="ch()">SET</h2>
    </div>`
    document.getElementById("change").innerHTML=inp
     }
     else{
       alert("bye bye")
     }
  }