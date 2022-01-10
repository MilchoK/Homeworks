let story = [];

story[story.length] = prompt("Let's create a story together. First give me a name:");
story[story.length] = prompt("Now tell me in what mood is the character:");
story[story.length] = prompt("Lastly, give me an activity for the character");

function tellStory(array){
console.log("This is "+ array[0] +". "+ array[0] +" is a nice person. Today they are "+ array[1] +". They are "+ array[2] +" all day. The end.")
}

tellStory(story);