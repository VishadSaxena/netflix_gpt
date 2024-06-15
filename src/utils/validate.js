export const checkValidData = (email,password) => {

    const ValidateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ValidatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!ValidateEmail)  return "Email is Not Valid!!";
    if(!ValidatePassword) return "Password is invalid";

    return null;
};

export const checkSignUpData = (fullName,email,password) => {
      
        const ValidateName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName);
        const ValidateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        const ValidatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
        if(!ValidateName) return "Name is invalid!!"
        if(!ValidateEmail)  return "Email is Not Valid!!";
        if(!ValidatePassword) return "Password is invalid!!";
    
        return null;
    };
