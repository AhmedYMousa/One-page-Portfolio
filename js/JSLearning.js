var json={"name":"Ahmed","age":26};
//Convert JS object to JSON.
json=JSON.stringify(json);
//Convert JSON to JS Object
var obj=JSON.parse(json);
console.log(json);
var i=setTimeout(function(){
    console.log("Hi there");
},5000);
console.log(obj.name);
$(".col-3>h3").click(function(){
    console.log($(this).text());
});

console.log(obj.age);