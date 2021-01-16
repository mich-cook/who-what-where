# who-what-where
Instead of trading wish lists, tracking numbers, and such in groups or message boards or whatever (think xmas for a family scattered across the country), this app is intended to track everything in one place.

Initial page with description, etc. Since the login will initially use external auth (facebook, maybe google, and others), we could probably put this button on the homepage too since it will spawn a new window and we won't have to maintain a /login/ path. 

https://who-what-where.example.com/


New users and users that choose to edit details about themselves can/will visit this page where they can update their display name (seeded from login data?) and choose (a) group(s) to join. This may also be the location where users add/edit wish lists. 

https://who-what-where.example.com/profile/


A user can see a list of the packages that have been sent to other users at this URL. The list item should show the recipient of a package, the tracking number of the package (if available yet), the status of the package (if avilable). User will be able to toggle between groups on page. No plans to support group in URL.

https://who-what-where.example.com/sent/


A user can see a list of expected/received packages that other users have sent. The user will also be able to mark a "delivered" package as "received" to make the distinction between a package that has been left at the door and one that the user has actually taken into their home. Default sort will put received items at the bottom. User will be able to toggle between groups on page. No plans to support group in URL.

https://who-what-where.example.com/incoming
