# Shortcodes


---

[**Fluent Support**](https://fluentsupport.com/) is fully shortcodes enabled i.e., you can use **Shortcode** for specific pages or posts on your WordPress site for your **Customer Support Portal**. This article will help you with a list of compatible shortcodes and their use case in the Customer Portal of Fluent Support.

## Add Fluent Support Customer Portal #

To **display** the **Customer Support Portal** in the **Frontend** , you need to add any one of the following Shortcodes to the **desired Page/Post** on your **WordPress Site**.

**Remember** , there is a significant difference between the functionality of both shortcodes despite their similar interfaces. The **fluent_support_auth** shortcode is only capable of performing the authentication process, i.e., verifying if the user is logged in or not while the **fluent_support_portal** shortcode can also display the **Customer** **Support** **Portal**.
[code] 
    **[fluent_support_portal]**
[/code]
[code] 
     **[fluent_support_auth]**
[/code]

The above-mentioned shortcodes will display all the **Built-in** **Login, Signup, and** **Reset Passwords** together in one form as shown in the screenshot below. Once users complete the login process, they will get access to the **Customer Support Portal**.

![Login form with Sing up and Reset Password](/guide/public/images/ticket-management/automation-in-tickets/shortcodes/both-signup-and-login-1-1024x747.webp)

## **Shortcodes for the Customer Support Portal** #

Here are some **Shortcodes** listed below that you can use for your **Fluent Support Customer Portal** — 

### 1\. Login Form #

To display only the built-in **Login Form** , use the following shortcode and the form will only apply to **non-logged-in users**. The **Username or Email Address** and **Password** options will appear in your Customer Portal for login like the screenshot below.

**Remember** , you can enable **[Two-Factor Authentication](https://fluentsupport.com/docs/customer-support-portal-setup/#10-toc-title)** for the login form. This will require customers to enter a verification code sent to their email whenever they try to log in to the customer portal. To learn how you can enable Two-Factor Authentication, [**click here**](https://fluentsupport.com/docs/customer-support-portal-setup/). 
[code] 
    **[fluent_support_login]**
[/code]

![Built in Login Form](/guide/public/images/ticket-management/automation-in-tickets/shortcodes/built-in-login-form-1.webp)

### 2\. Login Form with Reset Password #

To display only the **Reset** **Password** option with the **built-in Login** form, use any one of the following shortcodes. The **Reset Password** option will appear in your customer portal’s **Login** form like the screenshot below. 
[code] 
    **[fluent_support_login show-signup=false show-reset-password=true]** ****
[/code]
[code] 
    **[fluent_support_login show-reset-password=true]**
[/code]

![Login with Reset Password Form](/guide/public/images/ticket-management/automation-in-tickets/shortcodes/reset-password-with-log-in-form.webp)

### 3\. Login Form with Create New Account #

To display only the **Signup** (**Create an Account**) option with the **built-in Login** form, use any one of the following shortcodes. The signup (**Create an Account**) option will also appear in your customer portal’s **Login** form like the screenshot below.
[code] 
    **[fluent_support_login show-signup=true show-reset-password=false]**  
[/code]
[code] 
    [fluent_support_login show-signup=true]
[/code]

![Login withCreate an Account form](/guide/public/images/ticket-management/automation-in-tickets/shortcodes/new-create-an-account-option-1024x764.webp)

### 4\. Signup Form #

To display the **SIgnup** **Form** only, use this shortcode and the **Signup** form will appear in your Customer Portal for sign-in like the screenshot below.

**Remember** , for sign-up, use a valid email as a verification code will be sent to the user email for confirmation, ensuring only valid emails can be used for sign-in.
[code] 
    **[fluent_support_signup]**
[/code]

![Signup Form](/guide/public/images/ticket-management/automation-in-tickets/shortcodes/signup-portal-1.webp)

### 5\. Reset Password Form #

To display the **Reset Password** **Form** only, use this **fluent_support_signup** shortcode and the **Reset Password** form will appear in your Customer Portal for resetting your password like the screenshot below.
[code] 
    **[fluent_support_reset_password]**
[/code]

![Reset Password](/guide/public/images/ticket-management/automation-in-tickets/shortcodes/reset-password-only.webp)

### 6\. Set-Mailbox Shortcode #

To manage multiple business inboxes with ease, you can easily generate a Support Portal for your specific Business Inbox by using this shortcode. This shortcode makes it easy to direct support tickets from any page to the right inbox and create a personalized support portal for your business needs. 

To know more about how to use this shortcode follow this [documentation](https://fluentsupport.com/docs/business-inbox/#0-toc-title).
[code] 
    **[fluent_support_portal show_logout = yes business_box_id=2]**
[/code]

### 7\. Logout option in the Customer Support Portal #

To **display** the Logout Option in the **Customer Support Portal Dashboard** , you need to add the following shortcode to the **desired Page/Post** on your **WordPress Site**.
[code] 
    [fluent_support_portal show_logout = yes]
[/code]

![Logout option in customer portal](/guide/public/images/ticket-management/automation-in-tickets/shortcodes/7.-logout-option-shortcode-1.webp)


---

