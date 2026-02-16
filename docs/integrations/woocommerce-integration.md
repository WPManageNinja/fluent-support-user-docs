# WooCommerce Integration


---

**WooCommerce** is a customizable, open-source eCommerce platform for **WordPress** that allows support agents to view the **purchase** **history** of any WooCommerce product user and allows customers to open tickets through Fluent Support for issues related to specific WooCommerce products or orders.

This article will guide you through integrating [**WooCommerce**](https://woocommerce.com/) with **Fluent Support**.

## **WooCommerce Integration With FluentSupport** 

To integrate WooCommerce into Fluent Support, follow the guidelines below —

> [!Note]
> You do not need to perform any manual integration steps. The connection happens automatically if the WooCommerce plugin is already installed and active on your WordPress site.

### **WooCommerce Product Information in your Ticket** 

If you click on the **Product ID** under a specific ticket, a pop-up will appear that includes all the information about the product purchase.

To get the product information in your tickets as shown in the screenshot below, you must **Create Custom Fields** in your **Fluent Support** site for **WooCommerce**.

![WooCommerce Product Information in your Ticket](/images/integrations-channels/core-integrations/woocommerce-integration/product-id-click-scaled-1.webp)

You will find Billing details, Shipping details, Product details, and Price in this pop-up here.

![Billing, Shipping, Product & Price details](/images/integrations-channels/core-integrations/woocommerce-integration/billing-info-scaled-1.webp)

### Create Custom Fields for WooCommerce 

From the **Fluent Support Dashboard**, go to **Settings** and select **Custom Fields** from the left side. Click the **\+ Add New Field** button from the top right corner.

![Custom Fields from Global Settings under Fluent Support dashboard](/images/integrations-channels/core-integrations/woocommerce-integration/global-settings-custom-fields-add-new-field-1.webp)

Choose the **Field Type** from the dropdown menu that suits your needs (**WooCommerce Products** or **WooCommerce Orders)** and click the **Add** button.

Make sure your WordPress site has WooCommerce installed and activated to proceed.

![Field Type dropdown list](/images/integrations-channels/core-integrations/woocommerce-integration/field-type-1.webp)

Give your **Field Type** a name and configure additional fields as necessary. Also, you can enable the **Conditional logic** if required. To save all the settings, click the **Add** button.

![Add New Custom Field popup page](/images/integrations-channels/core-integrations/woocommerce-integration/configure-additional-settings-scaled-1.webp)

Your **WooCommerce custom field** will now be visible on your support portal, as shown below.

![Preview of WooCommerce Custom Field in Support Portal](/images/integrations-channels/core-integrations/woocommerce-integration/support-portal-1.webp)

This is how th**e** integration of **WooCommerce** with **Fluent Support** works!  

---

