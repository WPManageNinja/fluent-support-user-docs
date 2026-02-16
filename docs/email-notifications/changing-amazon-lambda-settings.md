# Change Amazon Lambda Settings for Email Piping

This article will help you through the steps required to change your default **Amazon Lambda Cloud Processing** service and implement another one for [Email Piping](/docs/email-piping-email-based-support-ticket) in Fluent Support.

## How to Change the Amazon Lambda Cloud Processing Service

To learn how to change the **Amazon Lambda Cloud Processing** service and implement your own **Lambda** function for Fluent Support Email Piping, refer to the Repository below —

[https://github.com/WPManageNinja/fluent-support-email-parser](https://github.com/WPManageNinja/fluent-support-email-parser)

Please use this repository. It’s the simplified version of our own implementation, but the mime parser is the same as our hosted one.

> [!NOTE]
> You need a bit of JS and serverless knowledge to deploy this function.
> You need an extra domain to connect it with Amazon SES’s incoming endpoint. 

If you want to know more details about Email Piping, you can also read this [What is Email Piping and Why?](https://fluentsupport.com/what-is-email-piping-and-why/)

