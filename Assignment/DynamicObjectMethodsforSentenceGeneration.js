/*
You are tasked with building an object called sentenceBuilder that dynamically generates a sentence based on its properties and methods. 
The object should have the following structure:

Properties:

subject: A string representing the subject of the sentence (e.g., "I", "The cat").
verb: A string representing the action (e.g., "am", "is running").
object: A string representing the object of the sentence (e.g., "coding", "on the roof").

Methods:

buildSentence(): This method should return a full sentence in the format: "subject verb object". 
If any of the properties (subject, verb, object) are missing, it should return a default sentence: "Incomplete sentence".
updateProperty(property, value): This method should allow the user to update any of the properties (subject, verb, or object) dynamically using string concatenation. 
It should check if the property exists, and update it, otherwise return "Invalid property".
Additional Constraints:
Use ternary operators to check if properties are present when building the sentence.
Use string concatenation to form the sentence.
*/


let obj = {
    "subject" : "The cat",
    "verb" : "is running",
    "object" : "on the roof",
    buildSentence : function(){
        this.subject && this.verb && this.object ?console.log( this.subject +" "+ this.verb +" "+ this.object) : console.log("Incomplete sentence")
    },
    updateProperty : function(property, value){
        let message =""
        property == "subject" ? this.subject = value : property == "verb" ? this.verb = value : property == "object" ? this.object = value : message = "Invalid property"

        return message ? message : "Updated Successfully"

    }
}


obj.buildSentence()

console.log(obj.updateProperty("subject","The Dog"))

obj.buildSentence()