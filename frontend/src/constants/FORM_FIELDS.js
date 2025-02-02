export const FORM_FIELDS = {
    email: { name: "email", type: "email", placeholder: "Enter your email" },
    password: { name: "password", type: "password", placeholder: "Enter your password", 
      validation: { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters",
         }
      }
    }
  };
  
  