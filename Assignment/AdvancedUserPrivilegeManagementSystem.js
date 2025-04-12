/*
Problem Statement: Design a system that determines access privileges for a platform based on a user's role, 
experience (in years), active status (active or inactive), and department. 
The program should provide access levels that vary according to a combination of these factors.

Conditions:

For the "admin" role:

If active, has more than 5 years of experience, and is in the "IT" department, grant "Full IT Admin Access".
If active, has more than 5 years of experience, but is in any other department, grant "Full General Admin Access".
If active but has 5 years or less of experience, grant "Limited Admin Access", regardless of department.
If inactive, grant "Admin Access Revoked".

For the "manager" role:

If active, has more than 3 years of experience, and is in the "Sales" department, grant "Full Sales Manager Access".
If active, has more than 3 years of experience, but in any other department, grant "Full Manager Access".
If active, has 3 years or fewer of experience, grant "Limited Manager Access", regardless of department.
If inactive, grant "Manager Access Revoked".

For the "user" role:

If active and from "Support" department, grant "Priority Support Access" .
If active but not from the "Support" department, grant "User Access".
If inactive, grant "User Access Revoked".
For any other role, output "Invalid Role".

Additional Conditions:

The system should dynamically determine the department based on user input.
The program should use nested ternary operators to handle the decision-making process based on role, experience, department, and status.
Ensure your code is scalable for adding more roles or departments in the future.

*/

function getAccess(user) {
  let message = "";
  switch (user["role"]) {
    case "admin":
      message = user["status"]
        ? user["experience"] > 5 && user["department"] == "IT"
          ? "Full IT Admin Access"
          : user["experience"] > 5
          ? "Full General Admin Access"
          : "Limited Admin Access"
        : "Admin Access Revoked";
      break;
    case "manager":
      message = user["status"]
        ? user["experience"] > 3 && user["department"] == "Sales"
          ? "Full IT Manager Access"
          : user["experience"] > 3
          ? "Full General Manager Access"
          : "Limited Manager Access"
        : "Admin Access Revoked";
      break;
      case "user":
      message = user["status"]
        ? user["department"] == "Support"
          ? "Priority Support Access"
          : "User Access"
          : "User Access Revoked";
      break;
      default :
      message = "Invalid Role"
      break;
  }
  return message
}

let user = { role: "user", status: true, experience: 15, department: "Support" };

console.log(getAccess(user));
