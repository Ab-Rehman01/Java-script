
var inp =document.get
window.addData=function(){
    var obj ={
        text: inp.value,

    };
    console.log(obj);
    var key =Math.random();
    key=key.toString().slice(2);

    var reference = ref(db, `tasks/${key}`);
    setInterval(reference, obj);
};