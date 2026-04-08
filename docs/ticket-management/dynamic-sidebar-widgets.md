# Adding Custom Dynamic Widget to the Ticket Sidebar

Fluent Support makes it easy to customize your workspace to fit your exact needs. If you need to display custom information such as data from an external system, special customer metrics, or custom text right next to your customer's message, you can add custom dynamic widget. 

This allows developers to add a brand new, custom panel directly to the right-hand sidebar of the individual ticket view, perfectly matching the existing layout alongside panels like "Customer Informations" and "Additional Details".

You can implement this custom widget in two ways: using **PHP (Server-side)** or **JavaScript (Client-side)**. 


### Method 1: Using PHP (Server-Side)

If you want to render HTML directly from your server, you can use a simple PHP filter. 

>**Pro Tip:** We highly recommend using the free **FluentSnippets** plugin to safely add PHP code to your WordPress site without editing your theme files directly.

Simply add the following code snippet to your site. This example creates a widget titled "My Widget" with a Star icon, and it displays the current Ticket ID:

```php
add_filter('fluent_support/widgets/ticket_sidebar', function ($widgets, $data) {
      $widgets[] = [
          'type'    => 'html',
          'title'   => 'My Widget',
          'icon'    => 'Star',
          'content' => '<p>Ticket #' . $data['ticket']->id . '</p>',
      ];
      return $widgets;
  }, 10, 2);
```

**What this code does:**
* `title`: Sets the heading of your new widget box.
* `icon`: Sets the icon displayed next to the title.
* `content`: The actual HTML content inside the box. In this case, it dynamically pulls the ID of the current ticket you are viewing.


### Method 2: Using JavaScript (Client-Side)

If you are a developer building a custom integration or prefer to handle data on the frontend using Vue.js, you can inject your widget using JavaScript. 

You can enqueue this script in your WordPress admin to dynamically push a Vue component into the ticket sidebar:

```javascript
fluentSupportAdmin.hooks.addFilter('ticket_sidebar', 'my_plugin', function(widgets) {
      widgets.push({
          type: 'vue-component',
          title: 'My Widget',
          icon: 'Star',
          use_card: true,
          component: {
              props: ['data'],
              template: '<div>Ticket #{{ data?.ticket?.id }}</div>'
          }
      });
      return widgets;
  });
  window.dispatchEvent(new Event('fluent_support_widgets_ready'));
```

**What this code does:**
* It taps into Fluent Support's frontend JavaScript hooks.
* It registers a `vue-component` type widget.
* The `use_card: true` property ensures your widget is beautifully wrapped in the standard Fluent Support card styling.
* The `template` renders the Vue markup, pulling the dynamic ticket ID directly from the component's properties.

Once you add either of these snippets, simply open any ticket in your dashboard, and you will see your new custom widget proudly displayed in the right sidebar!