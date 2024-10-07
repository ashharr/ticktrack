# Ticktrack — A Minimalist ToDo App

This documentation provides a comprehensive guide for setting up and using the Minimalist Todo app built using the Spring framework, Spring Boot, Hibernate, and Spring Security.

## **Table of Contents**

1. **Introduction**
2. **Installation**
3. **Configuration**
4. **Usage**
5. **Contributing**
6. **License**

## **Introduction**

The Minimalist Todo app is a simple yet powerful task management application built using the Spring framework. It allows users to create, update, and manage their tasks effectively. The application utilizes Spring Boot to simplify the setup and configuration process, Hibernate for data persistence, and Spring Security for authentication and authorization.

## **Installation**

To install the Minimalist Todo app, follow the steps below:

1. Ensure that you have Java Development Kit (JDK) version 8 or above installed on your system.
2. Clone the repository: **`git clone <repository-url>`**
3. Navigate to the project directory: **`cd minimalist-todo-app`**
4. Build the project using Maven: **`mvn clean install`**

## **Configuration**

Before running the application, you need to configure the following:

1. **Database Configuration**: Open the **`application.properties`** file located in the **`src/main/resources/application.properties`** directory. Update the database connection properties to match your local database configuration. I am making use of the MySQL database for this project. You can use that or in memory database such as H2. 
2. **Security Configuration**: Open the **`SecurityConfig.java`** file located in the **`src/main/java/com/mytodoapp/springboot/mytodoapp/security/SpringSecurityConfiguration.java`** directory. Customize the security configurations such as authentication providers, access control rules, etc., according to your requirements.

## **Usage**

To run the Minimalist Todo app, execute the following command:

```bash
java -jar target/minimalist-todo-app.jar
```

Once the application is up and running, you can access it by navigating to **`http://localhost:8089`** in your web browser.

After you enter the credentials you would see the Home page.

![Sign In](sign-in.png)

### ToDo Home Page

![Untitled](home-page.png)

From here you can view your todos, update or logout and come to see later. All your todos are saved in the database.

![Untitled](todos.png)

Update/Add todo page –

![Untitled](add-todo.png)

## **Contributing**

Contributions to the Minimalist Todo app are always welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.

## **License**

The Minimalist Todo app is open-source software released under the [**MIT License**](https://chat.openai.com/LICENSE). You are free to modify and distribute the application as per the terms of the license.