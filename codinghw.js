var names = ["Hannah", "Sydney", "Sophie", "Ella"];
for (var i = 0; i < names.length; i++) { 
  var name = names[i];
  
  if (name.length <= 3) {
    console.log("Bonjour, " + name)
    
  } else {
    console.log("Shalom, " + name)
  }
}