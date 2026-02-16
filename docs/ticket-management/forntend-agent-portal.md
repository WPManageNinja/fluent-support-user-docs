# Frontend Agent Portal

Fluent Support allows its **Agents** to view the **Front End** of the entire **Support Portal** ( i.e., you want your Agents to have access to see only the **Front End** of the **Support Portal** , not the **Back End** ). This article will guide you through the process of doing it.

To view the **Front End Agent Portal** , you must have the **Fluent Support Pro Add-on** installed and activated on your **WordPress** site. To learn how to install and activate the Fluent Support Pro Add-on, [**click here**](/docs/upgrade-to-fluent-support-pro-add-on).

## Front End Agent Portal 

To learn how to view the frontend agent portal, follow the steps with screenshots below —

**Agents** can view the **Frontend** page of the **Fluent** **Support** **Portal** using this **Shortcode**.

```
[fluent_support_admin_portal]
```

Additionally, you have to change the **Base URL** of your **Agent Support Portal** by adding the following **code** to your **child theme’s functions.php file** or using any **code snippet plugin**.

We recommend you use the [**FluentSnippets**](https://wordpress.org/plugins/easy-code-manager/) the high-performance file-based custom code Snippets Plugin.  

```
add_filter('fluent_support/portal_admin_base_url', function ($url) {
    $url = 'https://your-forntend-support-page-fullurl/#/';

    return $url;
});
```

It’s necessary to change the base URL because when you get notifications, the ticket view link will be generated from this base URL; by default, it’s the admin site URL.

Remember when using the above-mentioned shortcode, Use your Site’s URL.  
  
You can also add this snippet to your main theme’s functions.php file. But, using the **child theme’s functions.php** or a **code snippet plugin is recommended**. Otherwise, this snippet will be overwritten when you update your main theme.

Your **Front End Agent Portal** will appear as the screenshot shown below —

![Preview of Front End Agent Portal](/images/ticket-management/productivity-tools/forntend-agent-portal/front-end-agent-portal-1.webp)

