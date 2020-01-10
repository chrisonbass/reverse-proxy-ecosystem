# Reverse Proxy 
This is a simple prototype of 4 services.  One is an nginx container that is configured to work as a reverse proxy for the other services.  The next 2 services are the `app1` and `app2` service.  These are simple node express apps that output a basic html app.  The last service is a Node Socket.io app called `messenger` that handles websocket connections.  The nginx service will proxy-pass websocket calls on the `app1` and `app2` domains to the `messenger` service.

### Docker Install and Setup ###
- Install Docker Destop for [Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows) or [Apple](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
- Run Docker Desktop on your machine
- Open docker settings 
    - Windows right-click the tray icon
    - Mac click on the docker icon in the Menu Bar at the top of the screen
- Under shared drives, select the drive where the codebase will be

### Starting the services ###


### Restarting a container after editing code ###

If you edit a `server.js` file in the app1/ directory. You'll to restart the container so node restarts the app with the new code.

Run the following commands to restart the `app1` Node App.
```
docker-compose restart app1
```

This same idea can be applied with the other services.  For example, if you edit the NGINX config file, you'll need to run:
```
docker-compose restart nginx
```
