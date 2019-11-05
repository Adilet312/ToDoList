
/*Class of the ThingsToDo*/
function ThingsToDo(task_one,task_two,task_three)
{
  this.task_one = task_one;
  this.task_two = task_two;
  this.task_three = task_three;
}



/*Class of List Things To Do*/

function ListToDo()
{
  this.list = [];
  this.id = 0;
}
ListToDo.prototype.addToList=function(things)
{
  things.id =this.currentID();
  this.list.push(things);
}
ListToDo.prototype.currentID=function()
{
  this.id+=1;
  return this.id;
}
ListToDo.prototype.deleteTaskById=function(idx)
{
  for(var index=0; index<list.length; index++)
  {
    if(list[index])
    {
      if(list[index]===idx)
      {
        delete list[index];
        return true;
      }
    }
  }
  return false;
}
ListToDo.prototype.deleteTaskByName=function(name)
{
  for(var index=0; index<list.length; index++)
  {
    if(list[index])
    {
      if(list[index]===name)
      {
        delete list[index];
        return true;
      }
    }
  }
  return false;
}
var listToDo = new ListToDo();
function displayLocationDetails(locationListToDisplay) {
  var outputOfLocations = $("#output");
  var storageForLocations = "";
  locationListToDisplay.list.forEach(function(eachLocation) {
    storageForLocations += "Task one:" + eachLocation.task_one+", Task two: " + eachLocation.task_two + ", Task three: "+ eachLocation.task3 +"<br>";
  });
  outputOfLocations.html(storageForLocations);
};

$(document).ready(function()
{
  $("form#formID").submit(function(event)
  {
    event.preventDefault();
    var task1Input = $("#task1ID").val();
    var task2Input = $("#task2ID").val();
    var task3Input = $("#task3ID").val();
    var refThingsToDo = new ThingsToDo(task1Input,task2Input,task3Input);
    listToDo.addToList(refThingsToDo);
    displayLocationDetails(refThingsToDo);

  });
});
