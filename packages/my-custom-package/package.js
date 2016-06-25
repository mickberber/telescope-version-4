Package.describe({
  name: "my-custom-package"
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'fourseven:scss',

    'nova:core',
    'nova:base-components',
    'nova:posts',
    'nova:users'
  ]);

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);

  api.addFiles([
  'lib/stylesheets/agency.css'
], ['client']);

api.addFiles([
  'lib/stylesheets/bootstrap.css'
], ['client']);

api.addFiles([
  'lib/stylesheets/custom.css'
], ['client']);

});
