- Run this command to get the following friend data.
$ curl http://api.ember-cli-101.com/api/friends.json | python -m json.tool

"friends": [
        {
            "email": "steve@apple.com",
            "first_name": "Steve",
            "id": 873,
            "last_name": "Jobs",
            "total_articles": 7,
            "twitter": "steve"
        },
        {
            "email": "chuck@norris.com",
            "first_name": "Chucky",
            "id": 771,
            "last_name": "Norris",
            "total_articles": 10,
            "twitter": "@cnorris"
        },
        {
            "email": "a",
            "first_name": "morgan",
            "id": 879,
            "last_name": "page",
            "total_articles": 3,
            "twitter": "b"
        },
        {
            "email": "sterling@no-longer-isis.com",
            "first_name": "Sterling",
            "id": 883,
            "last_name": "Archer",
            "total_articles": 0,
            "twitter": "archer"
        },
        {
            "email": "darth@vader.net",
            "first_name": "Darthy",
            "id": 867,
            "last_name": "Vader",
            "total_articles": 6,
            "twitter": "D4rthV4d3r"
        }
    ]

http://api.ember-cli-101.com/api/friends    ----> friend data already ther before my server.


https://bens-borrowing-ember-app.herokuapp.com/ --> url for my server


API URL = http://api.ember-cli-101.com

API End Points Verb URI Pattern

GET /api/articles
POST /api/articles
GET /api/articles/:id
PATCH /api/articles/:id
PUT /api/articles/:id
DELETE /api/articles/:id
GET /api/friends
POST /api/friends
GET /api/friends/:id
PATCH /api/friends/:id
PUT /api/friends/:id
DELETE /api/friends/:id


borrower's backend: https://github.com/abuiles/borrowers-backend

Once we have created our own instance on Heroku, we need to install Heroku Toolbelt18 and check our application’s log with heroku logs -t --app my-app-name.

- whenever we want to access a property of an EmberObject, we need to use this.get('propertyName').
- If we want to change the property of an object, we use this.set(‘propertyName’, ‘newvalue’).


==== UPDATING A FRIEND PROFILE ====
1. Create a route with the ember generator. 2. Fix path in routes.
3. Update the template.
4. Add Controller and actions.

Running: $ ember g route friends/edit --path=:friend_id/edit
Creates: - app/routes/friends/edit.js
         - app/templates/friends/edit.hbs
        - tests/unit/routes/friends/edit-test.js


HELPER: "{{link-to's}}"
{{#link-to 'friends.show' friend}} --> alt
{{#link-to 'friends.show' friend.id}} --> alt

{{#link-to 'friends.show' friend}}
  {{friend.firstName}} {{friend.lastName}}
{{/link-to}}

To transition from a controller, we have been using this.transitionToRoute. It’s a helper that behaves similarly to the {{link-to}} helper but from within a controller. If we were in a Route, we could have used this.transitionTo.
