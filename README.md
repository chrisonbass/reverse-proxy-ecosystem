# Reverse Proxy 
This is a simple prototype of 4 services.  One is an nginx container that is configured to work as a reverse proxy for the other services.  The next 2 services are the `app1` and `app2` service.  These are simple node express apps that output a basic html page with basic javascript.  The last service is a Node Socket.io app called `messenger` that handles websocket connections.  The nginx service will proxy-pass websocket calls on the `app1` and `app2` domains to the `messenger` service.

### Docker Install and Setup ###
- Install Docker Destop for [Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows) or [Apple](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
- Run Docker Desktop on your machine
- Open docker settings 
    - Windows right-click the tray icon
    - Mac click on the docker icon in the Menu Bar at the top of the screen
- Under shared drives, select the drive where the codebase will be

### Host File Configuration ###
The nginx service is listening on port 80 for the following domains:

- http://app1.vm
- http://app2.vm

You will need to edit your machine's hosts file to point those domain names to the nginx service running on localhost:80 or 127.0.0.1:80.  The hosts file on Windows is usually found at `C:\Windows\System32\drivers\etc\hosts` and `/private/etc/hosts` on Macs.  You will need to add the following lines to your hosts file.
```
127.0.0.1 app1.vm
127.0.0.1 app2.vm
```

### Starting the services ###
Run the below command from the directory containing the docker-compose.yml file.  This command will start the services.  When you run it for the first time, it may take some time for the Node apps to get started.
```
docker-compose up --build
```

### Restarting a container after editing code ###
The docker-compose.yml file is configured to map the local app1, app2, messenger, and nginx directories to their containers.  If, for example, you edit the `server.js` file in the `app1`directory, you will need to restart the container to see the changes in your browser.  You won't need to restart the container if you edit the files in `app1/public` or `app2/public` since those are statically served by Express.

Run the following commands to restart the `app1` Node App.
```
docker-compose restart app1
```

This same idea can be applied with the other services.  For example, if you edit the NGINX config file, you'll need to run:
```
docker-compose restart nginx
```

