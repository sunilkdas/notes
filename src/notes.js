let val=localStorage.getItem("notes");
const notes=[];
if(val!=null){
const notes = JSON.parse(val);
}
else{
const notes=[];
}
export default notes;