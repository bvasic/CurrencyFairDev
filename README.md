Koala used as sass processor.

Site running on vps trough nginx on http://vps621397.ovh.net/

REMINDERS:

After changinx nginx config file, it needs to be reloaded via terminal with:
sudo /etc/init.d/nginx reload

Then we can use :
sudo /etc/init.d/nginx start

############################ v1.0

--after changing sites-enabled of nginx conf, especially assigning new application listening ports etc., do not restart nginx with /etc/init.d/nginx restart, but kill process manually and then start nginx again

ps aux | egrep '(PID|nginx)' kill -HUP 9831

/etc/init.d/nginx start

############## PM2 IGNORE WATCH on dev env pm2 start server.js --watch --ignore-watch

Using ejs as a template renderer