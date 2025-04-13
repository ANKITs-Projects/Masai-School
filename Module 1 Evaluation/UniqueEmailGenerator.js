/**
 * 
 * Write a function that takes a list of names and a list of existing email addresses. 
 * For each name, create an email by using the first name in lowercase followed by the first letter of the last name, then "@company.com". 
 * If the email already exists in the existing list, append a number (starting with 1) until a unique email is found.
 * 
 */



function generateEmails(names, existingEmails) {
    let generatedEmails = []
    
    for (let i = 0; i < names.length; i++) {

      let name = names[i]
      let name_parts = name.split(" ")

      let firstName = name_parts[0].toLowerCase()

      let lastNameFirstletter = name_parts[1][0].toLowerCase()

      let baseEmail = firstName + lastNameFirstletter + "@company.com"
      let uniqueEmail = baseEmail
      let count = 1
  
      while (existingEmails.indexOf(uniqueEmail) !== -1 || generatedEmails.indexOf(uniqueEmail) !== -1) {
        uniqueEmail = firstName + lastNameFirstletter +count+ "@company.com"
        count++
      }
  
      generatedEmails.push(uniqueEmail)
    }
  
    return generatedEmails
  }
  
  
  


let names= [
    "John Smith",
    "Jane Doe",
    "John Simpson",
    "Jane Davis"
  ]
  
let existingEmails = [
    "johns@company.com",
    "janed1@company.com"
  ]
  

  
  let newEmails = generateEmails(names, existingEmails)
  console.log(newEmails)