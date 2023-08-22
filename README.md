## OVERVIEW
EaseRead BACKEND API

* LANGUAGES : Node.js
* DATABASES : Mongodb
* ORM : Mongoose
* FRAMEWORK : Express.js
* BASE_URL : http://localhost:5000

### ENDPOINTS

* REGISTRATION
    - This endpoint allows to create an account on the platform.
    - An email will be sent to the user before their account is created for verification
    
    - URL: {BASE_URL}/api/v1/register
    - METHOD: POST
    - REQUEST BODY: 
    ```
    {
        username: data.firstName + '.' + data.lastName.charAt(0).toLowerCase()
        firstName: 'samuel',
        lastName: 'makinde',
        email: 'example@gmail.com',
        phone: "12345436361',
        university: "Unilag"
        password: "dfdasd123"
    }
    
    ```
    - RESPONSE:
    ```
        {
            message: "Account Created, Email has been sent to your mailbox",
            data:  {
                username: 'samuel.m'
                firstName: 'samuel',
                lastName: 'makinde',
                email: 'example@gmail.com',
                phone: "12345436361',
                university: "Unilag"
                password: "dfdasd123"
            }
        }
    ```

   
