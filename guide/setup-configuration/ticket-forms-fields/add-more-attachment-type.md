# Add More Attachment Types


---

When submitting/replying to any ticket, **[Fluent Support](https://fluentsupport.com/)** allows certain types of **Attachments** with some specific regulations such as **Photos, CSV, PDF/Docs, Zip, and JSON**. But, if you want you can add more **Attachment** **Types** if needed. This article will guide you through the process of **Adding** **more** **Attachment** **Types**.
## Add More Attachment Types #
To learn how to add more attachment types, follow the steps with screenshots below —
You can add more attachment types using the **“fluent_support/mime_groups”** filter and the **“add_filter”** hook.
For example, I added the “**HTML** ” file type here by using the following **Shortcode.**
> You can easily add this code to your site using a code snippet plugin.
> 
> We recommend using **[FluentSnippet](https://fluentsnippets.com/)** for a seamless experience on your WordPress site. However, feel free to use any snippet plugin of your choice.
> 
> Steps to Add the Code Snippet:
> 
>   1. Open **FluentSnippet** and click on the **Create Snippet** button.
>   2. Paste the following code into the code editor field.
>   3. Once done, **Publish** the snippet to activate it.
> 
> 
[code]
// Add a new MIME group to Fluent Support
add_filter('fluent_support/mime_groups', function ($mimeTypes) {
$mimeTypes['html'] = [
'title' => __('HTML', 'fluent-support'),
'mimes' => [
'text/html',
],
];
return $mimeTypes;
});
[/code]
Now, you can see an “**HTML”** file type is added to the **Accepted** **File** **Types** under the Fluent Support’s**Settings** or**Global Settings.**
![HTML file type added in Accepted File Types](public/images/setup-configuration/ticket-forms-fields/add-more-attachment-type/html-file-types-added-scaled-1.webp)
Also, if you want to make any changes in any of the existing file types, you can do it by using the **“fluent_support/mime_groups”** filter and the **“add_filter”** hook.
For example, I make changes to the **Photos (Image)** file type here by using the following **Shortcode**.
[code] 
// Add a new MIME type to the existing MIME groups in Fluent Support
add_filter('fluent_support/mime_groups', function ($mimeTypes) {
$mimeTypes['images']['mimes'][] = 'image/avif';
return $mimeTypes;
});
[/code]
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [**@support team**](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

