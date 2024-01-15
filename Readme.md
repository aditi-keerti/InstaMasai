Create a Fullstack App InstaMasai
Backend
Multiple users should be able to register on the app.
While registering accept the following details.
name ==> String
email ==> String
gender ==> String
password ==> String
age ==> Number
city ==> String
If the user is already present, then there should be a response that "User already exist, please login", that means there should be no two users registered with same details.
These users can create multiple posts.
Post will have the following details.
title ==> String
body ==> String
device ==> String
no_of_comments ==> Number

==> Where device is the one from which the post has been made, it can be "Laptop", "Tablet", "Mobile"
Only logged in users can do any kind of CRUD operations.
That means a user can see his or her posts only.
A user can update or delete his/her posts only.
A user can only create a post if he/she has logged in.
Following Routes should be there.
/users/register ==> To register a new user.
/users/login ==> For logging in generating a token, token should have an expiry of 7 days.
/logout ==> For Logging out the user by blacklisting the token, add blacklisted token in the Database, schema design can be done in your own way for this.
/posts/add ==> To create a post, only if the user has logged in
/posts ==> This will show the posts of logged in users.
   - There should be a filter as well that can show the posts of single users (you can achieve this by handling queries)
   - Can also filter out the posts based on min and max comments passed as queries, should show posts with comments in between min and max comments
   - Only 3 posts should be visible per page (Apply Pagination)
/posts/top ==> This will show the post details that has maximum number of comments for the user who has logged in.
   - Only 3 posts should be visible per page (Apply Pagination)
/posts/update ==> The logged in user can update his/her posts.
/posts/delete ==> The logged in user can delete his/her posts.

Following functionalities should also be there.
1. If the device name is passed as query, then it should show only those posts from which device that post has been made.
 2. For Example, device=Mobile ==> will give mobile posts only for the user who has logged in.
3. device1=Mobile & device2=Tablet ==> will give the posts made by mobile and tablet for the user who has logged in.
Mongo Atlas should be used.
Relationship between posts and user should be managed, do it in a way that this relationship is dynamically created.
Middleware
Authentication middleware should be there to authenticate the user, for all the restricted routes.

All the good practices while coding should be followed

Hashing the password.
JWT.
MVC.
.env for keeping crucial stuff.
Send Status codes as well.
Also all the responses should be in JSON form.
Commit after every 10 - 15 minutes.
Frontend
Use React for Frontend
Following pages should be there.
Home Page
Signup Page.
Login Page.
Posts Page ==> Only that user's posts should be visible who has logged in.
A delete button should also be there, which will delete that particular post.
Along with Delete button there should be an update button as well, which will take you to a form that will ask for things to be updated, and once you fill them and click on the ok button, that particular post should be updated.
There should be a navbar as well which should be visible all the time.
A logout button should be there which will log out the user take you to posts page and no posts should be visible then at posts page.
A counter should be there at the top left corner which will show the number of posts, and once the user logs out, should become 0.