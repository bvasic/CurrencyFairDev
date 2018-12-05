INSTRUCTIONS FOR RUNNING APP ON LOCAL DEVICE: (app also available on http://vps621397.ovh.net/)
1. Install nodejs framework from https://nodejs.org/en/
2. Enter folder /server/
3. node server.js
4. In browser, open localhost:5555



#################################################


Reminders for configuring nginx:

Site running on vps ubuntu trough nginx reverse proxy on http://vps621397.ovh.net/ .
Database is running on https://cloud.mongodb.com - credentials in the email

It can be also run locally by downloading the code from github and entering folder /server/ and running node server.js, or with some process manager like pm2

REMINDERS:

After changinx nginx config file, it needs to be reloaded via terminal with:
sudo /etc/init.d/nginx reload

############################ v1.0

--after changing sites-enabled of nginx conf, especially assigning new application listening ports etc., do not restart nginx with /etc/init.d/nginx restart, but kill process manually and then start nginx again

-example:
ps aux | egrep '(PID|nginx)' kill -HUP 9831

/etc/init.d/nginx start

############## PM2 IGNORE WATCH on dev env pm2 start server.js --watch --ignore-watch

Using ejs as a template renderer

Koala used as sass processor.

#################### INFO ABOUT FUNCTIONALITY ####################
I made userId as a random integer, because I assume that we would have unique ID-s for specific user after it passes authentication if user is registered.

Rate is also hardcoded since I dont have any API to use for currency exchange rates provided, so there is no calculations.



NODE JS NOTES:
find process: ps aux | grep node
kill PID: kill -9 PID