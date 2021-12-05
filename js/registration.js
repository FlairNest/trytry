function saveData(){

let email,name,psw;

name = document.getElementById("name").value;

email= document.getElementById("email").value;

psw = document.getElementById("psw").value;

let user_records=new Array();

user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
alert("Такой email уже зарегистрирован");
}
else
{
user_records.push({
"name":name,
"email":email,
"psw":psw
})
localStorage.setItem("users",JSON.stringify(user_records));
alert("Данные сохранены");
}
}

// Позже
function showData(){

document.getElementById("showUsers").innerHTML="";

let user_records=new Array();

user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records)
{
for(let i=0;i<user_records.length;i++)
{
let addDiv=document.createElement('div');
addDiv.className="row";

addDiv.innerHTML='  <div class="col-sm-4" style="padding: 10px;">'+user_records[i].name+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].email+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].psw+'</div>';

document.getElementById("showUsers").appendChild(addDiv);

}
}
}