// Copyright (c) 2024, Abhinav jain and contributors
// For license information, please see license.txt
frappe.ui.form.on('Job Apply', {

    // By default, developer fields will be shown
    refresh: function(frm){
        clearFields(frm);
        showDeveloperFields(frm);
    },

    role: function(frm) {
        // Clear previous values
        clearFields(frm);

        // Get the selected role
        var role = frm.doc.role;

        // // Show fields based on role
        if (role === 'Developer') {
            showDeveloperFields(frm);
        } else if (role === 'QA') {
            showQAFields(frm);
        } else if (role === 'Graphic Designer') {
            showDesignerFields(frm);
        }

    }
});

// Function to hide all the fields
function clearFields(frm) {
    var details_table = frm.fields_dict.details.grid;
        details_table.fields_map.language.hidden = 1;
        details_table.fields_map.ides.hidden = 1;
        details_table.fields_map.bug_tracking_system.hidden = 1;
        details_table.fields_map.automation_experience.hidden = 1;
        details_table.fields_map.test_environments.hidden = 1;
        details_table.fields_map.design_style.hidden = 1;
        details_table.fields_map.color_theory_knowledge.hidden = 1;
        details_table.fields_map.typography_skills.hidden = 1;
        details_table.fields_map.uiux_experience.hidden = 1;
        details_table.fields_map.testing_tools.hidden = 1;
        details_table.fields_map.design_tools.hidden = 1;
}

// Function to show developers field
function showDeveloperFields(frm) {
    var details_table = frm.fields_dict.details.grid;
    details_table.fields_map.language.hidden = 0;
    details_table.fields_map.ides.hidden = 0;

}

// Function to show QA fields
function showQAFields(frm) {
    var details_table = frm.fields_dict.details.grid;

    details_table.fields_map.testing_tools.hidden = 0;
    details_table.fields_map.bug_tracking_system.hidden = 0;
    details_table.fields_map.automation_experience.hidden = 0;
    details_table.fields_map.test_environments.hidden = 0;
}

// Function to show designer fields
function showDesignerFields(frm) {
    var details_table = frm.fields_dict.details.grid;

    details_table.fields_map.design_style.hidden = 0;
    details_table.fields_map.color_theory_knowledge.hidden = 0;
    details_table.fields_map.typography_skills.hidden = 0;
    details_table.fields_map.uiux_experience.hidden = 0;
}

// Add events on child table fields
frappe.ui.form.on('Details', {
    
    language: function(frm, cdt, cdn){
        let item = locals[cdt][cdn];
        var language = item.language;

        // Auto fill framework according to selected language
        if(language == 'Python'){
            item.framework = 'Django'
        } else if(language == 'Javascript'){
            item.framework = 'React Native'
        } else if(langauge == 'PHP'){
            item.framework = 'Laravel'
        }
    
        frm.refresh_field('details')
    },

    // Auto fill applied date and initials on ides fill
    ides: function(frm, cdt, cdn){
        let item = locals[cdt][cdn];
        item.applied_date = frappe.datetime.nowdate();
        item.initials = frappe.user.full_name;
        frm.refresh_field('details')
    },

    // Auto fill applied date and initials on ides test_environments
    test_environments: function(frm, cdt, cdn){
        let item = locals[cdt][cdn];
        item.applied_date = frappe.datetime.nowdate();
        item.initials = frappe.user.full_name;
        frm.refresh_field('details')
    },

    // Auto fill applied date and initials on ides design_style
    design_style: function(frm, cdt, cdn){
        let item = locals[cdt][cdn];
        item.applied_date = frappe.datetime.nowdate();
        item.initials = frappe.user.full_name;
        frm.refresh_field('details')
    }

})