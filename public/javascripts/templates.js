(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['edit-note'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div data-note-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <input type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.existingText || (depth0 != null ? depth0.existingText : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"existingText","hash":{},"data":data}) : helper)))
    + "\" />\n  <button class=\"submit-button\">Submit</button>\n  <button class=\"cancel-button\">Cancel</button>\n</div>\n";
},"useData":true});
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"homepage\">\n  <h1>6.170 Notes</h1>\n  <p>You must be signed in to continue.</p>\n  <button id=\"signin-btn\">Sign in</button>\n  <button id=\"register-btn\">Register</button>\n</div>\n";
},"useData":true});
templates['note'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div class=\"note\" data-note-id="
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n  <p>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n  <a href=\"#\" class=\"edit-note\">Edit</a>\n  <a href=\"#\" class=\"delete-note\">Delete</a>\n</div>\n";
},"useData":true});
templates['notes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.note,depth0,{"name":"note","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "    <p><em>No notes yet!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"notes\">\n\n  <p>Welcome, "
    + container.escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"currentUser","hash":{},"data":data}) : helper)))
    + " (<a href=\"#\" id=\"logout-link\">logout</a>)</p>\n  \n  <div>\n    <div class=\"error\"></div>\n    <label for=\"new-note-input\">Add a new note:</label>\n    <input type=\"text\" id=\"new-note-input\" />\n    <button id=\"submit-new-note\">Add</button>\n  </div>\n\n  <h1>My Notes</h1>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n</div>\n";
},"usePartial":true,"useData":true});
templates['register'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"register\">\n  <a href=\"#\" id=\"home-link\">Back to Home</a>\n  <h1>Register</h1>\n  <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <form id=\"register-form\">\n    <div>Username: <input type=\"text\" name=\"username\" required /></div>\n    <div>Password: <input type=\"password\" name=\"password\" required /></div>\n    <div>Confirm Password: <input type=\"password\" name=\"confirm\" required /></div>\n    <input type=\"submit\" />\n  </form>\n</div>\n";
},"useData":true});
templates['signin'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"signin\">\n  <a href=\"#\" id=\"home-link\">Back to Home</a>\n  <h1>Sign in</h1>\n  <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <form id=\"signin-form\">\n    <div>Username: <input type=\"text\" name=\"username\" required /></div>\n    <div>Password: <input type=\"password\" name=\"password\" required /></div>\n    <input type=\"submit\" />\n  </form>\n</div>\n";
},"useData":true});
})();
