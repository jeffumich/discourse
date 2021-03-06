//= require env

//= require ../../app/assets/javascripts/preload_store.js

// probe framework first
//= require ../../app/assets/javascripts/discourse/components/probes.js

// Externals we need to load first
//= require ../../app/assets/javascripts/external/jquery-1.8.2.js

//= require ../../app/assets/javascripts/external/jquery.ui.widget.js
//= require ../../app/assets/javascripts/external/handlebars-1.0.rc.2.js
//= require ../../app/assets/javascripts/external/ember.js

// Pagedown customizations
//= require ../../app/assets/javascripts/pagedown_custom.js

// The rest of the externals
//= require_tree ../../app/assets/javascripts/external
//= require i18n
//= require ../../app/assets/javascripts/discourse/translations

//= require ../../app/assets/javascripts/discourse/helpers/i18n_helpers
//= require ../../app/assets/javascripts/discourse

// Stuff we need to load first
//= require_tree ../../app/assets/javascripts/discourse/mixins
//= require ../../app/assets/javascripts/discourse/components/debounce
//= require ../../app/assets/javascripts/discourse/views/view
//= require ../../app/assets/javascripts/discourse/controllers/controller
//= require ../../app/assets/javascripts/discourse/views/modal/modal_body_view
//= require ../../app/assets/javascripts/discourse/models/model
//= require ../../app/assets/javascripts/discourse/routes/discourse_route

//= require_tree ../../app/assets/javascripts/discourse/controllers
//= require_tree ../../app/assets/javascripts/discourse/components
//= require_tree ../../app/assets/javascripts/discourse/models
//= require_tree ../../app/assets/javascripts/discourse/views
//= require_tree ../../app/assets/javascripts/discourse/helpers
//= require_tree ../../app/assets/javascripts/discourse/templates
//= require_tree ../../app/assets/javascripts/discourse/routes


//= require_tree .

//= require hacks
