frappe.listview_settings['Customer'] = {


    onload(listview) {
        listview.page.add_button('Export', () => {
            frappe.call({
                
                method: "customer_management.customer_management.custom.customer_query.export_customers_list",

                callback: result => {
                    if (result.message) {
                        let export_fields = [["Customer Name", "Customer Type", "Email id", "Mobile number", "Address Line1", "Address Line 2", "Pincode", "City", "State", "Country"]]
                        result.message.map(e => export_fields.push(e))
                        frappe.tools.downloadify(export_fields, null, 'Customer');
                    }
                }
            })
        })
    }}